import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { WeatherService } from 'src/app/services/weather.service';
import { AutheticationService } from 'src/app/authetication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';
  currentTime: string;
  temperature: number;

  constructor(
    private formBuilder: FormBuilder,
    private loadingCtrl: LoadingController,
    private authService: AutheticationService,
    private router: Router,
    private weatherService: WeatherService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
        ]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern("(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"),
          Validators.maxLength(8)
        ]
      ]
    });

    this.updateTime();
    setInterval(() => this.updateTime(), 1000);

    // Coordenadas de São Paulo
    const lat = -23.5505;
    const lng = -46.6333;

    // Buscar temperatura
    this.weatherService.getTemperature(lat, lng).subscribe(
      data => {
        console.log('Dados da temperatura:', data); // Log para depuração
        if (data && data.hours && data.hours.length > 0 && data.hours[0].airTemperature && data.hours[0].airTemperature.sg) {
          this.temperature = data.hours[0].airTemperature.sg;
        } else {
          console.error('Estrutura de dados inesperada:', data);
        }
      },
      error => {
        console.error('Erro ao buscar temperatura:', error);
      }
    );
  }

  ionViewWillEnter() {
    this.clearForm(); // Limpa o formulário sempre que a página for carregada
  }

  clearForm() {
    this.loginForm.reset();
  }

  updateTime() {
    this.currentTime = new Date().toLocaleTimeString();
  }

  togglePasswordVisibility(): void {
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }

  convertEmailToLowerCase(): void {
    const emailControl = this.loginForm.get('email');
    if (emailControl) {
      const emailValue = emailControl.value;
      emailControl.setValue(emailValue.toLowerCase(), { emitEvent: true }); // Certifique-se de emitir o evento para atualizar a exibição
    }
  }
  

  onEnter(event: KeyboardEvent): void {
    this.login();
  }

  async login() {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    if (this.loginForm?.valid) {
      const user = await this.authService.loginUser(this.loginForm.value.email, this.loginForm.value.password).catch((error) => {
        console.log(error);
        loading.dismiss();
      });

      if (user) {
        loading.dismiss();
        this.router.navigate(['/icons-page']); // Atualize esta linha para redirecionar para 'icons-page'
      } else {
        loading.dismiss();
        alert('Dados inválidos');
      }
    }
  }
}

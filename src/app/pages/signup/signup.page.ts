import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';
import { AutheticationService } from 'src/app/authetication.service';
import { TermsModalPage } from '../terms-modal/terms-modal.page';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  regForm: FormGroup;
  termsRead: boolean = false;
  termsCheckboxClicked: boolean = false;
  termsAccepted: boolean = false;

  showPasswordChecklist: boolean = false;
  uppercaseChecked: boolean = false;
  lowercaseChecked: boolean = false;
  specialCharChecked: boolean = false;
  fiveNumbersChecked: boolean = false;

  isFullNameValid: boolean = false;
  isEmailValid: boolean = false;
  isPasswordValid: boolean = false;

  passwordType: string = 'password';
  confirmPasswordType: string = 'password';

  constructor(
    private formBuilder: FormBuilder,
    private loadingCtrl: LoadingController,
    private authService: AutheticationService,
    private router: Router,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.regForm = this.formBuilder.group({
      fullname: ['', [
        Validators.required,
        Validators.pattern("^[a-zA-Z\\s]*$")
      ]],
      email: [{ value: '', disabled: true }, [
        Validators.required,
        Validators.email,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
      ]],
      password: [{ value: '', disabled: true }, [
        Validators.required,
        Validators.pattern("^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%&*=])(?=.*\\d{5}).{8}$")
      ]],
      confirmPassword: [{ value: '', disabled: true }, Validators.required],
      terms: [{ value: false, disabled: true }, Validators.requiredTrue]
    }, {
      validator: this.mustMatch('password', 'confirmPassword')
    });

    this.regForm.get('fullname').valueChanges.subscribe(value => {
      this.isFullNameValid = this.regForm.get('fullname').valid;
      if (this.isFullNameValid) {
        this.regForm.get('email').enable();
      } else {
        this.regForm.get('email').disable();
      }
    });

    this.regForm.get('email').valueChanges.subscribe(value => {
      this.isEmailValid = this.regForm.get('email').valid;
      if (this.isEmailValid) {
        this.regForm.get('password').enable();
      } else {
        this.regForm.get('password').disable();
      }
    });

    this.regForm.get('password').valueChanges.subscribe(value => {
      this.isPasswordValid = this.regForm.get('password').valid;
      this.showPasswordChecklist = true; // Mostrar o checklist quando o usuário começa a digitar a senha
      this.updatePasswordChecklist(value);
      if (this.isPasswordValid) {
        this.regForm.get('confirmPassword').enable();
      } else {
        this.regForm.get('confirmPassword').disable();
      }
    });

    this.regForm.get('confirmPassword').valueChanges.subscribe(() => {
      this.showPasswordChecklist = false; // Ocultar o checklist quando o usuário começa a digitar a confirmação da senha
    });

    this.regForm.get('terms').valueChanges.subscribe(value => {
      this.termsCheckboxClicked = true; // Detectar quando o checkbox de termos é clicado
    });
  }

  get errorControl() {
    return this.regForm.controls;
  }

  mustMatch(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[password];
      const matchingControl = formGroup.controls[confirmPassword];

      if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
        return;
      }

      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  validateName(event: any) {
    const pattern = /^[a-zA-Z\s]*$/;
    let input = event.target.value;

    if (!pattern.test(input)) {
      event.target.value = input.replace(/[^a-zA-Z\s]/g, '');
      this.regForm.get('fullname').setValue(event.target.value);
    }
  }

  validateEmail(event: any) {
    const input = event.target.value.toLowerCase();
    this.regForm.get('email').setValue(input);
  }

  validatePassword(event: any) {
    let input = event.target.value;

    if (input.length > 8) {
      input = input.substring(0, 8);
      event.target.value = input;
      this.regForm.get('password').setValue(input);
    }

    this.showPasswordChecklist = true;
    this.updatePasswordChecklist(input);
  }

  validateConfirmPassword(event: any) {
    let input = event.target.value;

    if (input.length > 8) {
      input = input.substring(0, 8);
      event.target.value = input;
      this.regForm.get('confirmPassword').setValue(input);
    }
  }

  updatePasswordChecklist(password: string) {
    this.uppercaseChecked = /[A-Z]/.test(password);
    this.lowercaseChecked = /[a-z]/.test(password);
    this.specialCharChecked = /[!@#$%&*=]/.test(password);
    this.fiveNumbersChecked = /\d{5}/.test(password);
  }

  togglePasswordVisibility() {
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
  }

  toggleConfirmPasswordVisibility() {
    this.confirmPasswordType = this.confirmPasswordType === 'password' ? 'text' : 'password';
  }

  async signUp() {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    if (this.regForm?.valid) {
      try {
        const user = await this.authService.registerUser(this.regForm.value.email, this.regForm.value.password);
        if (user) {
          this.router.navigate(['/login']);
        }
      } catch (error) {
        console.log(error);
      } finally {
        loading.dismiss();
      }
    }
  }

  clearForm() {
    this.regForm.reset();
    this.showPasswordChecklist = false; // Resetar o checklist quando o formulário for limpo
  }

  async openTerms() {
    const modal = await this.modalController.create({
      component: TermsModalPage
    });

    modal.onDidDismiss().then((data) => {
      if (data.data) {
        this.termsRead = true;
        this.regForm.get('terms').enable();
      }
    });

    await modal.present();
  }

  validateTerms() {
    this.termsAccepted = this.regForm.get('terms').value;
  }
}

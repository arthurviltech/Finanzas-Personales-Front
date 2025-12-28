import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  hidePassword = true;
  isLoading = false;
  allowOfflineMode = true;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.loginForm = this.fb.group({
      email: ['demo@finanzas.com', [Validators.required, Validators.email]],
      password: ['demo123', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.isLoading = true;

      // Simula llamada al backend (300ms)
      setTimeout(() => {
        const { email, password } = this.loginForm.value;
        
        // Mock: acepta cualquier email/password para demo
        if (email && password) {
          // Guarda token mock
          localStorage.setItem('finanzas_token', 'mock-jwt-token-' + Date.now());
          localStorage.setItem('finanzas_user', JSON.stringify({
            id: 1,
            nombre: 'Usuario Demo',
            email: email
          }));

          this.snackBar.open('¡Bienvenido!', 'Cerrar', {
            duration: 3000,
            horizontalPosition: 'end',
            verticalPosition: 'top'
          });

          this.router.navigate(['/dashboard']);
        } else {
          this.showError('Credenciales inválidas');
        }
        
        this.isLoading = false;
      }, 300);
    } else {
      this.markFormGroupTouched(this.loginForm);
    }
  }

  onGuestMode(): void {
    // Modo invitado sin login
    localStorage.setItem('finanzas_guest', 'true');
    localStorage.setItem('finanzas_user', JSON.stringify({
      id: 0,
      nombre: 'Invitado',
      email: 'guest@local'
    }));

    this.snackBar.open('Modo invitado activado', 'Cerrar', {
      duration: 2000
    });

    this.router.navigate(['/dashboard']);
  }

  private showError(message: string): void {
    this.snackBar.open(message, 'Cerrar', {
      duration: 4000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      panelClass: ['error-snackbar']
    });
  }

  private markFormGroupTouched(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach(key => {
      const control = formGroup.get(key);
      control?.markAsTouched();
    });
  }

  getErrorMessage(fieldName: string): string {
    const control = this.loginForm.get(fieldName);
    
    if (control?.hasError('required')) {
      return 'Este campo es requerido';
    }
    
    if (control?.hasError('email')) {
      return 'Email inválido';
    }
    
    if (control?.hasError('minlength')) {
      const minLength = control.errors?.['minlength'].requiredLength;
      return `Mínimo ${minLength} caracteres`;
    }
    
    return '';
  }
}

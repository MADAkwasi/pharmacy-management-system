import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Button } from '@shared/components/button/button';
import { TextInput } from '@shared/components/text-input/text-input';
import { Lock, LucideAngularModule, Pill, User } from 'lucide-angular';

@Component({
  selector: 'app-login',
  imports: [LucideAngularModule, ReactiveFormsModule, Button, TextInput],
  templateUrl: './login.html',
})
export class Login {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  protected readonly icons = { Pill, User, Lock };
  protected readonly loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  protected onSubmit(): void {
    this.router.navigate(['/admin']);
  }
}

import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

//bcrypt
@Injectable()
export class AuthService {
  constructor(private http: HttpService) {}

  async login(username: string, password: string) {
    const { data } = await firstValueFrom(
      this.http.post(
        process.env.OPENID_CONNECT,
        new URLSearchParams({
<<<<<<< HEAD
          client_id: 'nest',
          client_secret: 'ofwHaTO0QWZlkXb6aTK4ckwicMwXuxZo',
          grant_type: 'password',
          scope: 'openid profile email api-nest',
=======
          client_id: process.env.CLIENT_ID,
          client_secret: process.env.CLIENT_SECRET,
          grant_type: process.env.GRANT_TYPE,
>>>>>>> 3b67fe7 (Refact(auth) Adjustments in the security)
          username,
          password,
          scope: process.env.SCOPE,
        }),
      ),
    );
    return data;
  }
}

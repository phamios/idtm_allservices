import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from '../users/dto/create-user.dto';

class SignInDTO {
  username: string;
  password: string;
}

@Controller('authentication')
export class AuthenticationController {
  @Post('/sign-in')
  Signin(@Body() signinDTO: SignInDTO) {
    console.log('sign in data', signinDTO);
    return null;
  }
}

import { Module } from '@nestjs/common';
import { GoogleStrategy } from 'src/google.strategy';

@Module({
    providers:[GoogleStrategy]
})
export class AuthUtilsModule {}

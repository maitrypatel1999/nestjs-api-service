import { BasicStrategy as Strategy } from 'passport-http';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class BasicStrategy extends PassportStrategy(Strategy) {
    constructor(
        private configService: ConfigService,
    ) {
        super({
            passReqToCallback: true
        });
    }

    public validate = async (req: any, username: string | undefined, password: string | undefined): Promise<boolean> => {        
        if (
            this.configService.get('apiUser') === username &&
            this.configService.get('apiPassword') === password
        ) {
            return true;
        }
        throw new UnauthorizedException();
    }
}
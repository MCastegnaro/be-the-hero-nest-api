import { Controller, Get, Headers } from '@nestjs/common';
import { ProfilesService } from './profiles.service';

@Controller('profile')
export class ProfilesController {
    constructor(
        private readonly profilesService: ProfilesService
    ) { }

    @Get()
    index(@Headers('authorization') ongId: string) {
        return this.profilesService.getOngProfile(ongId);
    }
}

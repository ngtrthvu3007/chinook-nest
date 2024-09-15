import { Controller, Get, Param } from '@nestjs/common';
import { ArtistEntity } from '../entities/artists.entity';
import { ArtistsService } from './artists.service';

@Controller('artists')
export class ArtistsController {
  constructor(private artistService: ArtistsService) {}

  @Get()
  async getArtists(): Promise<ArtistEntity[]> {
    return await this.artistService.getArtists();
  }

  @Get(':id')
  async getArtistDetail(@Param('id') id: string): Promise<ArtistEntity> {
    return await this.artistService.getArtistDetail(+id);
  }
}

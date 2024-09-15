import { Controller, Get, Param, Query } from '@nestjs/common';
import { AlbumEntity } from 'src/entities/albums.entity';
import { AlbumsService } from './albums.service';

@Controller('albums')
export class AlbumsController {
  constructor(private albumService: AlbumsService) {}

  @Get()
  async getAlbums(@Query('artist') artistId: string): Promise<AlbumEntity[]> {
    return await this.albumService.getAlbumsByArtist(+artistId);
  }

  @Get(':id')
  async getAlbumDetail(@Param('id') id: string): Promise<AlbumEntity> {
    return await this.albumService.getAlbumDetail(+id);
  }
}

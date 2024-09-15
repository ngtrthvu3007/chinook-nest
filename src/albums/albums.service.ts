import { Injectable } from '@nestjs/common';
import { AlbumEntity } from 'src/entities/albums.entity';
import { DataSource } from 'typeorm';

@Injectable()
export class AlbumsService {
  private albumRepository;

  constructor(private dataSource: DataSource) {
    this.albumRepository = this.dataSource.getRepository(AlbumEntity);
  }
  async getAlbumsByArtist(artistId?: number): Promise<AlbumEntity[]> {
    const options = {
      relations: ['Artist'],
      where: artistId ? { Artist: { ArtistId: artistId } } : undefined,
    };

    return await this.albumRepository.find(options);
  }

  async getAlbumDetail(AlbumId: number): Promise<AlbumEntity> {
    return await this.albumRepository.findOne({
      where: { AlbumId },
      relations: ['Artist'],
    });
  }
}

import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { ArtistEntity } from '../entities/artists.entity';

export interface CreateUser {
  username: string;
  password: string;
}

@Injectable()
export class ArtistsService {
  private artistRepository;

  constructor(private dataSource: DataSource) {
    this.artistRepository = this.dataSource.getRepository(ArtistEntity);
  }

  async getArtists(): Promise<ArtistEntity[]> {
    return await this.artistRepository.find({
      relations: ['Albums'],
    });
  }
  async getArtistDetail(ArtistId: number): Promise<ArtistEntity> {
    return await this.artistRepository.findOne({
      where: { ArtistId },
      relations: ['Albums'],
    });
  }
}

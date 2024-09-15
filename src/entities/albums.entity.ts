import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ArtistEntity } from './artists.entity';

@Entity('Album')
export class AlbumEntity {
  @PrimaryGeneratedColumn({ name: 'AlbumId' })
  AlbumId: number;

  @Column({ name: 'Title', type: 'varchar', length: 160, nullable: false })
  Title: string;

  @ManyToOne(() => ArtistEntity, (artist) => artist.Albums)
  Artist: ArtistEntity; // Many Albums belong to one Artist
}

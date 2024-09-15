import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AlbumEntity } from './albums.entity';

@Entity('Artist')
export class ArtistEntity {
  @PrimaryGeneratedColumn({ name: 'ArtistId' })
  ArtistId: number;

  @Column({ name: 'Name', type: 'varchar', length: 120, nullable: false })
  Name: string;

  @OneToMany(() => AlbumEntity, (album) => album.Artist)
  Albums: AlbumEntity[]; // Relationship: One Artist can have many Albums
}

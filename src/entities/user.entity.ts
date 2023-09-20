import { ApiProperty } from '@nestjs/swagger';
import { Scope } from 'src/utils/alerter/types/Scope';
import {
  Column, CreateDateColumn, Entity, Index, PrimaryColumn, Unique, UpdateDateColumn
} from 'typeorm';
import { Exclude } from 'class-transformer';




@Entity("user")
@Unique(["advisor_code"])
export class User {
  @ApiProperty({ type: String, description: 'advisor_code' })
  @PrimaryColumn({ length: 17 }) public advisor_code: string;

  @ApiProperty({ type: String, description: 'email' })
  @Column({ length: 150, nullable: false })
  @Index('UPNIndex') public email: string;

  @ApiProperty({ type: String, description: 'last_name' })
  @Column({ length: 35, nullable: true }) public last_name: string;

  @ApiProperty({ type: String, description: 'first_name' })
  @Column({ length: 35, nullable: true }) public first_name: string;

  @ApiProperty({ type: String, description: 'language' })
  @Column({ nullable: true }) public language: string = null;

  @ApiProperty({ type: String, description: 'scope' })
  @Column({ nullable: false }) public scope: Scope;

  @ApiProperty({ type: String, description: 'country' })
  @Column({ nullable: true }) public country: string = null;

  @Exclude()
  @CreateDateColumn({ name: 'created_at' }) 'created_at': Date;
  @Exclude()
  @UpdateDateColumn({ name: 'updated_at' }) 'updated_at': Date;

}



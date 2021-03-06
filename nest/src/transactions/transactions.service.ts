import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { TenantService } from './../tenant/tenant/tenant.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { Transaction } from './entities/transaction.entity';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectModel(Transaction)
    private readonly transactionMode: typeof Transaction,
    private readonly tenantService: TenantService,
  ) {}

  create(createTransactionDto: CreateTransactionDto) {
    return this.transactionMode.create({
      ...createTransactionDto,
      subdomain: this.tenantService.subdomain,
    });
  }

  findAll() {
    // console.log(this.tenantService.subdomain)
    return this.transactionMode.findAll({
      where: {
        subdomain: this.tenantService.subdomain,
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} transaction`;
  }

  update(id: number, updateTransactionDto: UpdateTransactionDto) {
    return `This action updates a #${id} transaction`;
  }

  remove(id: number) {
    return `This action removes a #${id} transaction`;
  }
}

import { SetMetadata } from '@nestjs/common';

export const Role = (role: string) => {
  // console.log(SetMetadata)
  return SetMetadata('role', role);
};

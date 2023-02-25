import { injectable } from 'inversify'

import { MaskFormatter } from '~/app/presentation/common/protocols'

@injectable()
export class CnpjMaskFormatter implements MaskFormatter {
  format(value: string) {
    return value
      ?.replace(/\D/g, '')
      ?.replace(/(\d{2})(\d)/, '$1.$2')
      ?.replace(/(\d{3})(\d)/, '$1.$2')
      ?.replace(/(\d{3})(\d)/, '$1/$2')
      ?.replace(/(\d{4})(\d)/, '$1-$2')
      ?.replace(/(-\d{2})\d+?$/, '$1')
  }
}

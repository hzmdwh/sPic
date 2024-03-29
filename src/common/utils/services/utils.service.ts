import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto';
import { WxErrorInfo } from '../../../modules/mini-sdk/dtos/mini-sdk.dto';
// 不能写成这样：
// import crypto from 'crypto';
import { v4 as uuidv4 } from 'uuid';
import { WxCheckSignatureDto } from '../../../modules/mp/dtos/wx-check-signature.dto';
import { UtilsSignature, Signature } from './utils-signature';
@Injectable()
export class UtilsService {
  // sha1加密
  getSha1(str: string) {
    return crypto.createHash('sha1').update(str).digest('hex');
  }

  // md5
  getMd5(str: string) {
    return crypto.createHash('md5').update(str).digest('hex');
  }

  checkWxSha1Equal(query: WxCheckSignatureDto, token: string) {
    const { signature, timestamp, nonce, echostr } = query;
    const str = [token, timestamp, nonce].sort().join('');
    const signatureCurr = this.getSha1(str);
    if (signatureCurr === signature) return echostr;
    return null;
  }

  sprintf(template: string, values: string[]): string {
    return template.replace(/%s/g, function () {
      return values.shift();
    });
  }

  // 随机生成[min, max]
  randomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  // 随机生成10位组合字符串
  getRandomStr(m = 10) {
    let str = '';
    for (let i = 0; i < m; i++) {
      const index = this.randomInt(1, 3);
      switch (index) {
        case 1:
          str += String.fromCharCode(this.randomInt(97, 122));
          break;
        case 2:
          str += String.fromCharCode(this.randomInt(65, 90));
          break;
        case 3:
          str += String(this.randomInt(0, 9));
          break;
        default:
          break;
      }
    }
    return str;
  }
  // 生成随机token
  genRandomToken(openid: string, salt: string) {
    const hash = crypto.createHash('md5');
    hash.update(openid);
    hash.update(salt);
    hash.update(uuidv4());
    return hash.digest('hex');
  }

  genUuidToken() {
    return uuidv4().replace(/-/g, '').toLowerCase();
  }

  isWxError<T = unknown>(data: WxErrorInfo | T): data is WxErrorInfo {
    return typeof (<WxErrorInfo>data).errcode === 'number';
  }

  // 判断是否为纯对象
  isPureObject(v: unknown) {
    return (
      typeof v === 'object' &&
      Object.prototype.toString.call(v) == '[object Object]'
    );
  }

  // 创建签名验证实例
  createSignature(options: Signature) {
    return new UtilsSignature(options);
  }
}

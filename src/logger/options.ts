import { transports, format } from 'winston';
import 'winston-daily-rotate-file';
import * as Transport from 'winston-transport';

const isProd = process.env.NODE_ENV === 'production';

export const getLoggerTransports = (): Transport[] => {
  if (isProd) {
    const errorTransport = new transports.DailyRotateFile({
      filename: 'nestjs-api-service-error-%DATE%.log',
      format: format.combine(format.timestamp(), format.json()),
      datePattern: 'YYYY-MM-DD-HH',
      maxSize: '10m',
      maxFiles: '14d',
      level: 'error',
    });

    const allTransport = new transports.DailyRotateFile({
      filename: 'nestjs-api-service-all-%DATE%.log',
      format: format.combine(format.timestamp(), format.json()),
      datePattern: 'YYYY-MM-DD-HH',
      maxSize: '10m',
      maxFiles: '14d',
    });

    return [errorTransport, allTransport];
  } else {
    const consoleTransport = new transports.Console({
      format: format.simple(),
    });

    return [consoleTransport];
  }
};

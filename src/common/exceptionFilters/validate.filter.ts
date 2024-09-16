import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';

@Catch(HttpException)
export class ValidationExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse();
    const request = host.switchToHttp().getRequest();

    response.status(exception.getStatus()).json({
      statusCode: exception.getStatus(),
      message: exception.getResponse(),
      path: request.url,
      method: request.method,
    });
  }
}

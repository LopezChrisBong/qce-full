import { Injectable } from '@nestjs/common';
import { CreatePdfgenDto } from './dto/create-pdfgen.dto';
import { UpdatePdfgenDto } from './dto/update-pdfgen.dto';
import { createPdf } from '@saemhco/nestjs-html-pdf';
import {join} from 'path';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { DataSource, Repository } from 'typeorm';
// const PDFDocument = require('pdfkit-table');

@Injectable()
export class PdfgenService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>, private dataSource : DataSource

  //another tables used
 //private readonly userRepository1: Repository<User>
  ){}
  async secondExample(): Promise<any>{
    let userinfo = await this.dataSource.createQueryBuilder(User, 'ud')
    .select([
      'ud.username as username',
      'ud.name as name',
      'ud.created_at as date',
    ])
    .getRawMany();

    // let nameinfo = await this.dataSource.createQueryBuilder(User, 'as')
    // .select([
    //   'as.name as name',
    // ])
    // .getRawMany();
    const data = {
    title: '',
    H1:`QUALITATIVE CONTRIBUTION (QCE) RESULTS`,
    Year:`1st Semester, S.Y. 2022-2023`,
    Summary:`SUMMARY OF INDIVIDUAL QCE RATING`,
    userslist:userinfo,
   //************************** */
   //userslist:[
   //     { username: info[0].username,   } this code is distinct to only one data.
   //]
   //
    // items: [
    //         {
    //         description: 'custom suit',
    //         detail: {
    //             color: 'blue',
    //             size: '42',
    //         },
    //         price: {
    //             price0: 1500.0,
    //             price: 1050.0,
    //             save: 25,
    //         },
    //         quantity: 1,
    //         image:
    //             'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(4).webp',
    //         },
    //         {
    //         description: 'playstation 5',
    //         detail: {
    //             color: 'white',
    //             size: '45cmx45cm',
    //         },
    //         price: {
    //             price0: 500.0,
    //             price: 250.0,
    //             save: 50,
    //         },
    //         quantity: 2,
    //         image:
    //             'https://promart.vteximg.com.br/arquivos/ids/931599-1000-1000/image-b08a9ed36e114598bc56d7d4a5e7dd2d.jpg?v=637569550232800000',
    //         },
    //   ],
    //   subTotal: 1550.0,
    //   shipping: 15.0,
    //   total: 1565.0,
      imagehead: 'http://localhost:3000/pdfgen/header',
      imagefoot: 'http://localhost:3000/pdfgen/footer',
    };
    // const images = {
    //   imagehead1: 'http://localhost:3000/pdfgen/header',
    // };
    // const imagefooter = `<div style=" width: 75%; margin: 0 2cm">
    // <img style="height: 50px;" src="http://localhost:3000/pdfgen/footer" />  
    //   </div>`
    
    const options = {
      format: 'A4',
      displayHeaderFooter: true,
      margin: {
        left: '0.25in',
        top: '0.25in',
        right: '0.25in',
        bottom: '0.60in',
      },
      headerTemplate:``,
       footerTemplate:
        '<div style="width: 100%; text-align: center; font-size: 10px;"> Page <span class="pageNumber"> </span> of <span class="totalPages"></span></div>',
    
    //  `<div style="display:flex;width:100%;font-size: 10px;padding: 5px 0;margin:auto;border-bottom: 0.5px solid black;">
    //       <div style="width:50%;text-align:center">HeaderHeaderHeaderHeaderHeaderHeaderHeaderHeaderHeaderHeaderHeader</div>
    //       <div style="width:50%"><img src="public/images/CaptureFooter.png" style="width:30px;height:30px;"/></div>
    //       <div style="width:25%;text-align:right"></div>
    //  </div>`
      landscape: false,
    };

    // function base64Encode(file) {
    //   return fs.readFileSync(file, {encoding: 'base64'});
    // }
    
    // function logo() {
    //   return '<img height="13" src="data:image/png;base64,' + base64Encode(appRoot + 'images/CaptureFooter.png') + '"/>';
    // }
    const filePath = join(process.cwd(), './src/templates', 'pdf-invoice.hbs');
    return createPdf(filePath, options, data);
  }
}

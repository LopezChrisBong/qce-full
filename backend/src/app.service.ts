import { Injectable } from '@nestjs/common';
import { createPdf } from '@saemhco/nestjs-html-pdf';
import path from 'path';
import {join} from 'path';
const PDFDocument = require('pdfkit-table');

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  async generarPDF(): Promise<Buffer>
  {
      const pdfBuffer: Buffer = await new Promise( resolve => {
        const doc =  new PDFDocument(
          {
            size: "LETTER",
            bufferPages: true
          })

          //todo
          doc.text("PDF HEADER");
          doc.moveDown();
          doc.text("Sample Text");


          const buffer = []
          doc.on('data', buffer.push.bind(buffer))
          doc.on('end', () => {
              const data = Buffer.concat(buffer)
              resolve(data)
          })
          doc.end()


      })

      return pdfBuffer;
    
  }

 
  secondExample(): Promise<any> {
  const data = {
  title: 'My PDF file',
  status: 'paid',
  invoiceId: '#123-123',
  customerName: 'Saúl Escandón',
  customerAddress: '1234 Main St',
  customerCity: 'Huánuco',
  customerState: 'Huánuco',
  customerCountry: 'Perú',
  customerPhone: '555-555-5555',
  items: [
          {
          description: 'Lovely Suit',
          detail: {
              color: 'blue',
              size: '42',
          },
          price: {
              price0: 1500.0,
              price: 1050.0,
              save: 25,
          },
          quantity: 1,
          image:
              'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(4).webp',
          },
          {
          description: 'playstation 5',
          detail: {
              color: 'white',
              size: '45cmx45cm',
          },
          price: {
              price0: 500.0,
              price: 250.0,
              save: 50,
          },
          quantity: 2,
          image:
              'https://promart.vteximg.com.br/arquivos/ids/931599-1000-1000/image-b08a9ed36e114598bc56d7d4a5e7dd2d.jpg?v=637569550232800000',
          },
    ],
    subTotal: 1550.0,
    shipping: 15.0,
    total: 1565.0,
  };
  const options = {
    format: 'A4',
    displayHeaderFooter: true,
    margin: {
      left: '10mm',
      top: '25mm',
      right: '10mm',
      bottom: '15mm',
    },
    headerTemplate: `<div style="width: 100%; text-align: center;"><span style="font-size: 20px;">@saemhco CORP</span><br><span class="date" style="font-size:15px"><span></div>`,
    footerTemplate:
      '<div style="width: 100%; text-align: center; font-size: 10px;">Page <span class="pageNumber"></span> of <span class="totalPages"></span></div>',
    landscape: true,
  };
  const filePath = join(process.cwd(), '/src/templates', 'pdf-invoice.hbs');;
  return createPdf(filePath, options, data);
}

}

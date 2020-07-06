import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

export const ExportPdf = (data) => {
    var rows = []
    var title = ''
    var subtitle = ''
    var content = []
    var pageSize = ''
    if (data.action == 'laporan') {
        rows.push([
            { text: 'No.', style: 'thead' },
            { text: 'Kode Transaksi', style: 'thead' },
            { text: 'Tanggal Tansaksi', style: 'thead' },
            { text: 'Nama Pelanggan', style: 'thead' },
            { text: 'No.HP', style: 'thead' },
            { text: 'Alamat', style: 'thead' },
            { text: 'Total Transaksi', style: 'thead' },
        ])
        data.data.forEach((el, idx) => {
            rows.push([
                { text: idx + 1 + '.', },
                { text: el.kode_transaksi },
                { text: el.tanggal_transaksi },
                { text: el.nama_pelanggan },
                { text: el.no_hp },
                { text: el.alamat },
                { text: 'Rp.' + el.total_bayar, alignment: 'justify' },
            ])
        })
        title = 'Laporan Transaksi Berkah Laundry'
        subtitle = data.tanggal
        pageSize = 'A4'
        content.push([
            {
                text: title,
                style: 'title'
            },
            {
                text: subtitle,
                style: 'subtitle'
            },
            {
                margin: [0, 10],
                table: {
                    body: rows,
                    widths: [20, 100, 100, '*', 120, '*', 100],
                }
            }
        ])
    } else if (data.action == 'nota') {
        console.log(data)
        title = 'Bukti Transaksi'
        pageSize = 'A5'
        rows.push([
            { text: 'No.', bold: true },
            { text: 'Paket', bold: true },
            { text: 'Kuantitas', bold: true, alignment: 'center' },
            { text: 'Biaya', bold: true, alignment: 'center' }
        ])
        data.data.transaksi_list.forEach((el, id) => {
            rows.push([{ text: id + 1, alignment: 'center' }, el.paket, { text: el.kuantitas, alignment: 'center' }, { text: `Rp. ${el.harga}`, alignment: 'center' }])
        })
        rows.push([
            { text: 'Total', colSpan: 3, bold: true, alignment: 'center' },
            {}, {},
            { text: `Rp. ${data.data.total_bayar}`, bold: true, alignment: 'center' }
        ])

        content.push([
            {
                text: 'Berkah Laundry',
                alignment: 'center',
                bold: true,
                margin: [0, 10, 0, 0]
            },
            {
                text: 'Jl.Poros Kariango No.1, Kec. Mandai \nMaros',
                alignment: 'center',
                fontSize: 10,
                margin: [0, 0, 0, 5]
            },
            { canvas: [{ type: 'line', x1: 0, y1: 5, x2: 595 - 2 * 40, y2: 5, lineWidth: 3 }] },
            {
                text: 'Bukti Transaksi',
                alignment: 'center',
                margin: [10, 10, 10, 10],
                fontSize: 14
            },

            {
                columns: [
                    {
                        text: 'Kode Transaksi'
                    },
                    {
                        text: ': ' + data.data.kode_transaksi,
                        bold: true
                    },
                    {
                        text: 'Tanggal Transaksi'
                    },
                    {
                        text: `: ${data.data.tanggal_transaksi}`
                    }
                ],

            },
            {
                columns: [
                    {
                        text: 'Nama Pelanggan'
                    },
                    {
                        text: `: ${data.data.nama_pelanggan}`
                    },
                    {
                        text: 'Status Transaksi'
                    },
                    {
                        text: `: ${data.data.status_pembayaran ? 'Lunas' : 'Belum Lunas'}`
                    }
                ],

            },

            {
                columns: [
                    {
                        width: 130,
                        text: 'No. Hp'
                    },
                    {
                        text: `: ${data.data.no_hp}`
                    },
                ],

            },
            {
                columns: [

                    {
                        width: 130,
                        text: 'Alamat'
                    },
                    {
                        text: `: ${data.data.alamat}`
                    },
                ],

            },
            {
                margin: [0, 10, 0, 10],
                table: {
                    body: rows,
                    widths: [20, 200, 100, '*']
                }
            },
            {
                text: '*Ini adalah bukti transaksi yang sah. Simpan bukti ini untuk mengambil paket.',
                fontSize: 8,
                italics: true
            }
        ])
    }

    const dd = {
        pageSize: pageSize,
        pageOrientation: 'landscape',
        content: content,
        info: {
            title: title
        },
        styles: {
            thead: {
                fontSize: 12,
                bold: true,
                alignment: 'center',
                fillColor: '#ffff00',
            },
            title: {
                fontSize: 14,
                bold: true,
                alignment: 'center'
            },
            subtitle: {
                fontSize: 12,
                alignment: 'center'
            }
        }
    }
    pdfMake.createPdf(dd).open();
}
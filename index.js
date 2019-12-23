var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
        user: '***@lavitech.net',
        pass: '*****'
    }
});


const arr = ['***@gmail.com', '***@gmail.com']


arr.forEach( (item) => {

    const mailOptions = {

        from: 'andrii@lavitech.net', // sender address
        to: item, // list of receivers
        subject: 'from nodemailser', // Subject line
        html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta content="text/html; charset=utf-8" http-equiv="Content-Type">
<meta content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" name="viewport">
<link href='http://fonts.googleapis.com/css?family=Marck+Script&subset=latin,cyrillic' rel='stylesheet' type='text/css'>
<title>Christmas</title>
<style type="text/css">
.ReadMsgBody { width: 100%; background-color: #ffffff; }
.ExternalClass { width: 100%; background-color: #ffffff; }
.ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div { line-height: 100%; }
html { width: 100%; }
body { -webkit-text-size-adjust: none; -ms-text-size-adjust: none; margin: 0; padding: 0; }
table { border-spacing: 0; }
img { display: block !important; }
table td { border-collapse: collapse; }
.yshortcuts a { border-bottom: none !important; }
a { color: #b7202f; text-decoration: none; }
@media only screen and (max-width: 640px) {
body { width: auto !important; }
table[class="table600"] { width: 450px !important; text-align: center !important; border-right: 3px solid #8d4343 !important; border-left: 3px solid #8d4343 !important; }
table[class="table-inner"] { width: 86% !important; text-align: center !important; }
table[class="table2-2"] { width: 47% !important; }
table[class="table3-3"] { width: 100% !important; text-align: left !important; }
table[class="table1-3"] { width: 29.9% !important; }
table[class="table3-1"] { width: 64% !important; text-align: center !important; }
/* spacific element */
table[class="header"] { width: 470px !important; text-align: center !important; }
table[class="footer"] { width: 452px !important; text-align: center !important; }
table[class="header-image"] { width: 95% !important; text-align: center !important; }
/* Image */
img[class="img1"] { width: 100% !important; height: auto !important; }
}
@media only screen and (max-width: 479px) {
body { width: auto !important; }
table[class="table600"] { width: 290px !important; }
table[class="table-inner"] { width: 80% !important; }
table[class="table2-2"] { width: 100% !important; }
table[class="table3-3"] { width: 100% !important; text-align: center !important; }
table[class="table1-3"] { width: 100% !important; }
table[class="table3-1"] { width: 100% !important; text-align: center !important; }
/* spacific element */
table[class="header"] { width: 300px !important; text-align: center !important; }
table[class="footer"] { width: 288px !important; text-align: center !important; }
table[class="header-image"] { width: 95% !important; text-align: center !important; }
/* image */
img[class="img1"] { width: 100% !important; }
}
</style>
</head>
<body>
<table width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#a64f4f">
<tbody>
<tr>
<td valign="top">
<table class="header" width="620" cellspacing="0" cellpadding="0" border="0" align="center">
<tbody>
<tr>
<td valign="bottom" align="center">
<img class="img1" width="620" height="187" alt="header" src="http://redstudio.com.ua/img/top-header.gif" style="display:block;">
</td>
</tr>
</tbody>
</table>
<table class="table600" width="600" cellspacing="0" cellpadding="0" border="0" bgcolor="#FFFFFF" align="center" style="border-left:5px solid #8d4343; border-right:5px solid #8d4343;">
<tbody>
<tr>
<td align="center">
<table class="table-inner" width="540" cellspacing="0" cellpadding="0" border="0">
<tbody>
<tr>
<td>
<img class="img1" width="540" height="30" alt="image" src="img/top-snow.png" style="display:block">
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr>
<td valign="top" align="center">
<table class="table600" width="600" cellspacing="0" cellpadding="0" border="0" bgcolor="#FFFFFF" align="center" style="border-left:5px solid #8d4343; border-right:5px solid #8d4343;">
<tbody>
<tr>
<td align="center">
<table class="header-image" width="540" cellspacing="0" cellpadding="0" border="0" align="center">
<tbody>
<tr>
<td>
<img class="img1" width="540" height="297" alt="image" src="img/5401.png">
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr>
<td>
<table class="table600" width="600" cellspacing="0" cellpadding="0" border="0" bgcolor="#FFFFFF" align="center" style="border-left:5px solid #8d4343; border-right:5px solid #8d4343;">
<tbody>
<tr>
<td align="center">
<table class="table-inner" width="540" cellspacing="0" cellpadding="0" border="0" align="center">
<tbody>
<tr>
<td height="25"></td>
</tr>
<tr>
<td align="center" style="font-family: 'Marck Script', cursive; font-size:21px; color:#b7202f; font-weight:bold;">Дорогие друзья!</td>
</tr>
<tr>
<td height="10"></td>
</tr>
<tr>
<td align="left" style="font-family: 'Marck Script', cursive; font-size:18px; color:#7f8c8d; line-height:24px;"> 

&nbsp;&nbsp;&nbsp;В канун Нового года каждый из нас задумывается о главном. Это время, чтобы вспомнить все важные решения и шаги. Это время для анализа и выводов. Но еще – это время для мечты и надежды. <br>
&nbsp;&nbsp;&nbsp;Мы хотим Вам пожелать, чтобы в наступающем году Вы не просто надеялись на лучшее, а наслаждались воплощенными в жизнь мечтами. <br>
&nbsp;&nbsp;&nbsp;Желаем, чтобы в работе Вас сопровождали лишь ответственные и надежные люди, с которыми хочется мечтать, ставить смелые цели и достигать их. Мы очень надеемся, что в следующем году наши дружеские отношения только укрепятся, и мы вместе сможем покорять новые вершины успеха.<br>


</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>



<tr>
<td>
<table class="table600" width="600" cellspacing="0" cellpadding="0" border="0" bgcolor="#FFFFFF" align="center" style="border-left:5px solid #8d4343; border-right:5px solid #8d4343;">
<tbody>
<tr>
<td height="25"></td>
</tr>
<tr>
<td align="center">
<img class="img1" width="365" height="25" alt="image" src="img/divider-bell.png">
</td>
</tr>
<tr>
<td height="25"></td>
</tr>
</tbody>
</table>
</td>
</tr>






<tr>
<td>
<table class="table600" width="600" cellspacing="0" cellpadding="0" border="0" bgcolor="#FFFFFF" align="center" style="border-left:5px solid #8d4343; border-right:5px solid #8d4343;">
<tbody>
<tr>
<td valign="bottom" align="center">
<img class="img1" width="540" height="65" alt="image" src="img/footer-top-snow.png" style="display:block;">
</td>
</tr>
<tr>
<td height="20"></td>
</tr>
<tr>
<td align="center" style="font-family: 'Open Sans', Arial, sans-serif; font-size:12px; color:#7f8c8d;">
<a style="color:#a7a550;" href="#">Открыть в браузере</a>
|
<a style="color:#a7a550;" href="#">Отписаться</a>
|
<a style="color:#a7a550;" href="#">Подписаться</a>
</td>
</tr>
<tr>
<td height="10"></td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr>
<td valign="top">
<table class="footer" width="610" cellspacing="0" cellpadding="0" border="0" align="center">
<tbody>
<tr>
<td valign="top" align="center">
<img class="img1" width="600" height="71" alt="header" src="img/footer-buttom-snow.png" style="display:block;">
</td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr>
<td align="center" style="font-family: 'Open Sans', Arial, sans-serif; font-size:12px; color:#ffffff;">Copyright © texha.ru , All rights reserved</td>
</tr>
<tr>
<td height="10"></td>
</tr>
<tr>
<td align="center">
<table width="156" cellspacing="0" cellpadding="0" border="0" align="center">
<tbody>
<tr>
<td height="20">
<a href="#">
<img width="20" height="20" alt="social-icon" src="img/facebook.png">
</a>
</td>
<td width="5"></td>
<td>
<a href="#">
<img width="20" height="20" alt="social-icon" src="img/twitter.png">
</a>
</td>
<td width="5"></td>
<td>
<a href="#">
<img width="20" height="20" alt="social-icon" src="img/googleplus.png">
</a>
</td>
<td width="5"></td>
<td>
<a href="#">
<img width="20" height="20" alt="social-icon" src="img/linkedin.png">
</a>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr>
<td height="30"></td>
</tr>
</tbody>
</table>
</body>
</html>`
    };

    transporter.sendMail(mailOptions, function (err, info) {
        if (err)
            console.log(err)
        else
            console.log(info);
    });

} )





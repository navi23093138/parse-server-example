
exports.env = function() {
	return "Navi";	
}
exports.push_env = function() {
	return "";	
}

exports.mail_cc = function () {
	return "navi.23093138@gmail.com";
}

exports.admin_mail = function() {
	return "avery.hou@wintopinfo.com";
}

exports.error_admin = function() {
	return "avery.hou@wintopinfo.com";
}


exports.mock_mode = function() {
	return false;
}



////////////////////////////////////////////////////
///////// mail service using MailGun ///////////////
// use Mailgun instead of building internal mail server 
// Mailgun can send up to 12,000 mails/month for free.
////////////////////////////////////////////////////

var mailgun_domain = "mailgunservice.navi.love";
var mailgun_key = "key-7a957cbdcd043b41588d1236f3a242f3";

exports.mailgun_domain = function() {
	return mailgun_domain;
}
exports.mailgun_key = function() {
	return mailgun_key;
}


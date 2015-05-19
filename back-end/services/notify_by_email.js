(function() {
  'use strict';

  exports.verify = function(node, email, res) {
    var model = {
      // verifyEmail : 'https://hauangelite.herokuapp.com/user/verify/',
      title       : 'NOTIFY',
      subTitle    : 'Verifying your credentials',
      body        : 'Our team is verifying your credentials.. Please wait for confirmation'
    };

    var transporter = node.nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: 'caninojories@gmail.com',
          pass: 'Ver0nicavilla'
        }
    });

    node._.templateSettings = {
      interpolate: /\{\{(.+?)\}\}/g
    };

    var mailOptions = {
      from: 'caninojories@gmail.com',
      to: email,
      subject: 'Notifiy',
      html: getHtml()
    };

    transporter.sendMail(mailOptions, function(err, info) {
      if(err) {return err;}
      console.log('email sent ' + info.response);
      res.json('success');
    });

    function getHtml(token) {
      var path =  node.path.normalize(__dirname + '/../../') + 'back-end/email_views/notify.html';
      var html = node.fs.readFileSync(path, {'encoding':'utf8'});

      var template = node._.template(html);
      model.body += '';
      // model.verifyEmail += token;
      return template(model);
    }
  };
}());

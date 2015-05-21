(function() {
  'use strict';

  module.exports = function(node, email, res) {
    var model = {
      //verifyEmail : 'https://hauangelite.herokuapp.com/user/verify/',
      title       : 'Verified',
      subTitle    : 'Your has been verified',
      body        : 'You can now log-in into your account'
    };

    var transporter = node.nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: 'caninojories@gmail.com',
          pass: 'Ver0nicavilla_'
        }
    });

    node._.templateSettings = {
      interpolate: /\{\{(.+?)\}\}/g
    };

    var mailOptions = {
      from: 'caninojories@gmail.com',
      to: email,
      subject: 'Verify',
      html: getHtml()
    };

    transporter.sendMail(mailOptions, function(err, info) {
      if(err) {
        console.log(err);
        return err;
      }
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

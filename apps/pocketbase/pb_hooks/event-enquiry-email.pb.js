onRecordAfterCreateSuccess((e) => {
 const escape = (v) => String(v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
 try { $app.newMailClient().send(new MailerMessage({from:{name:'Velvet Roll Co. Enquiries'},to:[{address:'velvetrollco@gmail.com'}],subject:'New event enquiry — '+e.record.getString('name'),html:'<h1>New Velvet Roll Co. event enquiry</h1><p><strong>Name:</strong> '+escape(e.record.getString('name'))+'</p><p><strong>Email:</strong> '+escape(e.record.getString('email'))+'</p><pre style="white-space:pre-wrap;font-family:Arial;line-height:1.8">'+escape(e.record.getString('details'))+'</pre>'})); } catch(err) { $app.logger().error('Event enquiry email failed','error',String(err),'record',e.record.id); }
 e.next();
}, 'event_enquiries');

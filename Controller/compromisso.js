const { frappe } = require('frappe-js-sdk');

const createCompromisso = async (req, res) => {
  const { date, time, salesUser } = req.body;
  const doctype = frappe.new_doc('Compromisso');
  doctype.update({
    name: 'Compromisso',
    fields: [
      { label: 'Data', fieldname: 'date', fieldtype: 'Date', value: date },
      { label: 'Hora', fieldname: 'time', fieldtype: 'Time', value: time },
      { label: 'Usuário Vendedor', fieldname: 'sales_user', fieldtype: 'Link', value: salesUser },
    ],
    quick_entry: 1,
    is_tree: 0,
    is_child: 0,
    module: 'Scheduling System',
    custom: 1,
    autoname: 'compromisso-#.##',
  });
  await doctype.insert();
  res.json({ message: 'Compromisso created successfully' });
};

module.exports = { createCompromisso };

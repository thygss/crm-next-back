# compromisso.py
from frappe import _

def get_context(context):
    context.no_breadcrumbs = True

fields = [
    {"label": _("Data"), "fieldname": "date", "fieldtype": "Date"},
    {"label": _("Hora"), "fieldname": "time", "fieldtype": "Time"},
    {"label": _("Usuário Vendedor"), "fieldname": "sales_user", "fieldtype": "Link", "options": "User"},
    
]

doctype = frappe.new_doc("Compromisso")
doctype.update({
    "name": "Compromisso",
    "fields": fields,
    "quick_entry": 1,
    "is_tree": 0,
    "is_child": 0,
    "module": "Scheduling System",
    "custom": 1,
    "autoname": "compromisso-#.##"
})
doctype.insert()
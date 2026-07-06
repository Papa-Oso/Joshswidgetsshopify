# Josh's Widgets Shopify Setup

This theme reads product compatibility from Shopify metafields. Create these product metafields in namespace `custom` so the homepage finder, product pages, guide tables, and collection cards can stay accurate.

## Product Metafields

| Name | Namespace and key | Suggested type | Used for |
| --- | --- | --- | --- |
| Helmet Brand | `custom.helmet_brand` | Single line text | Filters, product compatibility box |
| Helmet Model | `custom.helmet_model` | Single line text or list | Filters, product compatibility box |
| Helmet Communication System | `custom.helmet_communication_system` | Single line text | Installation location |
| Cardo Compatible Devices | `custom.cardo_compatible_devices` | List of single line text | Filters, compatibility tags |
| Cardo Incompatible Devices | `custom.cardo_incompatible_devices` | List of single line text | Product warnings |
| Product Category | `custom.product_category` | Single line text | Filters and card labels |
| Product Material | `custom.product_material` | Single line text | Materials accordion |
| Installation Method | `custom.installation_method` | Multi-line text | Installation accordion |
| Included Items | `custom.included_items` | Multi-line text | What's included |
| Installation Guide URL | `custom.installation_guide_url` | URL | Installation guides page |
| Installation Video URL | `custom.installation_video_url` | URL | Product installation accordion |
| Compatibility Warning | `custom.compatibility_warning` | Multi-line text | Product and finder warnings |

## Collection Handles

The theme links to these collection handles by default:

- `helmet-adapters`
- `hjc-cardo-adapters`
- `shoei-cardo-adapters`
- `nexx-cardo-adapters`
- `scorpion-cardo-adapters`
- `bmw-z3-m-roadster-parts`
- `kayak-accessories`
- `other-practical-parts`

Only add brand collections to navigation or homepage settings when they have live products.

## Page Handles and Templates

Create Shopify pages using these handles and assign the matching theme template:

| Page handle | Template |
| --- | --- |
| `find-your-fit` | `page.find-your-fit` |
| `installation-guides` | `page.installation-guides` |
| `about` | `page.about` |
| `support` | `page.support` |
| `shipping-policy` | `page.shipping-policy` |
| `return-policy` | `page.return-policy` |
| `privacy-policy` | `page.privacy-policy` |
| `terms-of-service` | `page.terms-of-service` |
| `contact-information` | `page.contact-information` |
| `accessibility-statement` | `page.accessibility-statement` |

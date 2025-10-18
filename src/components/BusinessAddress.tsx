import { APP_CONFIG } from '@/config/constants';

export default function BusinessAddress() {
  return (
    <address 
      className="not-italic text-gray-600"
      itemScope 
      itemType="https://schema.org/PostalAddress"
    >
      <div className="space-y-1">
        <div>
          <span className="font-semibold text-primary-blue">Community AR</span>
        </div>
        <div itemProp="streetAddress">
          {APP_CONFIG.company.address.street}
        </div>
        <div>
          <span itemProp="addressLocality">{APP_CONFIG.company.address.city}</span>,{' '}
          <span itemProp="addressRegion">{APP_CONFIG.company.address.state}</span>{' '}
          <span itemProp="postalCode">{APP_CONFIG.company.address.zipCode}</span>
        </div>
        <div itemProp="addressCountry">Argentina</div>
        <div className="mt-2">
          <a 
            href={`tel:${APP_CONFIG.company.phone}`}
            className="text-primary-blue hover:text-primary-pink transition-colors"
            itemProp="telephone"
          >
            {APP_CONFIG.company.phone}
          </a>
        </div>
        <div>
          <a 
            href={`mailto:${APP_CONFIG.company.email}`}
            className="text-primary-blue hover:text-primary-pink transition-colors"
            itemProp="email"
          >
            {APP_CONFIG.company.email}
          </a>
        </div>
      </div>
    </address>
  );
}
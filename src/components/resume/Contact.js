import React from 'react';
import Input from '../ui/Input';
import { Label } from '../ui/Label';

const Contact = ({ contactInfo, updateContact, errors }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
      
      <div className="mb-4">
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          type="text"
          value={contactInfo.name}
          onChange={(e) => updateContact('name', e.target.value)}
          className={errors.name ? 'border-red-500' : ''}
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>
      <div className="mb-4">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={contactInfo.email}
          onChange={(e) => updateContact('email', e.target.value)}
          className={errors.email ? 'border-red-500' : ''}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>
      <div className="mb-4">
        <Label htmlFor="phone">Phone</Label>
        <Input
          id="phone"
          type="tel"
          value={contactInfo.phone}
          onChange={(e) => updateContact('phone', e.target.value)}
          className={errors.phone ? 'border-red-500' : ''}
        />
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
      </div>
      <div className="mb-4">
        <Label htmlFor="linkedin">LinkedIn</Label>
        <Input
          id="linkedin"
          type="url"
          value={contactInfo.linkedin}
          onChange={(e) => updateContact('linkedin', e.target.value)}
          className={errors.linkedin ? 'border-red-500' : ''}
        />
        {errors.linkedin && <p className="text-red-500 text-sm">{errors.linkedin}</p>}
      </div>
    </div>
  );
};

export default Contact;
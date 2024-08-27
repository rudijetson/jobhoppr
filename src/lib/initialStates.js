export const initialResumeState = {
  contactInfo: { name: '', email: '', phone: '', linkedin: '' },
  summary: '',
  experience: [
    {
      title: '',
      company: '',
      startDate: '',
      endDate: '',
      bullets: ['']
    }
  ],
  skills: [''],
  education: [
    {
      degree: '',
      institution: '',
      graduationDate: ''
    }
  ]
};

export const initialErrorState = {
  name: '',
  email: '',
  phone: ''
};
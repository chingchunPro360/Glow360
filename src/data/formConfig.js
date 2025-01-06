export const FORM_CONFIG = {
  // 預約表單
  booking: {
    fields: [
      {
        name: 'service',
        label: 'Service',
        type: 'select',
        required: true
      },
      {
        name: 'date',
        label: 'Date',
        type: 'date',
        required: true
      },
      {
        name: 'time',
        label: 'Time',
        type: 'select',
        required: true
      },
      {
        name: 'notes',
        label: 'Special Requests',
        type: 'textarea',
        maxLength: 500
      }
    ]
  },

  // 聯絡表單
  contact: {
    fields: [
      {
        name: 'name',
        label: 'Name',
        type: 'text',
        required: true
      },
      {
        name: 'email',
        label: 'Email',
        type: 'email',
        required: true
      },
      {
        name: 'phone',
        label: 'Phone',
        type: 'tel'
      },
      {
        name: 'subject',
        label: 'Subject',
        type: 'text',
        required: true
      },
      {
        name: 'message',
        label: 'Message',
        type: 'textarea',
        required: true
      }
    ]
  },

  // 評論表單
  review: {
    fields: [
      {
        name: 'rating',
        label: 'Rating',
        type: 'rating',
        required: true
      },
      {
        name: 'title',
        label: 'Title',
        type: 'text',
        required: true
      },
      {
        name: 'content',
        label: 'Review',
        type: 'textarea',
        required: true
      },
      {
        name: 'images',
        label: 'Photos',
        type: 'file',
        multiple: true,
        accept: 'image/*'
      }
    ]
  }
};

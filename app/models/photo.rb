class Photo < ApplicationRecord
  belongs_to :user, inverse_of: :photos
  
  has_attached_file :profilepic, styles: { thumb: ['32x32#', 'jpg'] }, convert_options: {
      all: '-interlace Plane'
    },
    default_url: '/images/default_:style_photo.png'

  validates_attachment_presence :profilepic
  validates_attachment_file_name :profilepic, matches: [/png\Z/, /jpe?g\Z/, /gif\Z/]

end

// TỰ ĐỘNG GENERATE BẰNG SCRIPT - KHÔNG SỬA THỦ CÔNG
const movies = [
  {
    "id": "m_1",
    "title": "Bleach: Huyết Chiến Ngàn Năm",
    "posterVertical": "/DanhMuc/Hoạt hình/Anime dài tập/Bleach-Huyết Chiến Ngàn Năm.jpg",
    "posterHorizontal": "/DanhMuc/Hoạt hình/Anime dài tập/Bleach-Huyết Chiến Ngàn Năm _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Hoạt hình/Anime dài tập/Bleach-Huyết Chiến Ngàn Năm _ ngang.jpg",
    "year": "2020",
    "duration": "Tập 21",
    "age": "T16",
    "quality": "Full HD",
    "rating": "4.4/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại hoạt hình, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Lãng mạn"
    ],
    "category": "hoat-hinh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_2",
    "title": "Hunter X Hunter",
    "posterVertical": "/DanhMuc/Hoạt hình/Anime dài tập/Hunter X Hunter.jpg",
    "posterHorizontal": "/DanhMuc/Hoạt hình/Anime dài tập/Hunter X Hunter _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Hoạt hình/Anime dài tập/Hunter X Hunter _ ngang.jpg",
    "year": "2010",
    "duration": "Tập 100",
    "age": "T16",
    "quality": "2K",
    "rating": "4.6/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại hoạt hình, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Hoạt hình",
      "Hành động",
      "Bí ẩn"
    ],
    "category": "hoat-hinh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_3",
    "title": "Naruto Shippuden",
    "posterVertical": "/DanhMuc/Hoạt hình/Poster/Naruto Shippuden.jpg",
    "posterHorizontal": "/DanhMuc/Hoạt hình/Poster/Naruto Shippuden _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Hoạt hình/Poster/Naruto Shippuden _ ngang.jpg",
    "year": "2015",
    "duration": "Tập 60",
    "age": "T18",
    "quality": "2K",
    "rating": "3.5/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại hoạt hình, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Hành động",
      "Viễn tưởng",
      "Lịch sử"
    ],
    "category": "hoat-hinh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_4",
    "title": "One Piece",
    "posterVertical": "/DanhMuc/Trang chủ/Tiếp tục xem/One Piece.jpg",
    "posterHorizontal": "/DanhMuc/Trang chủ/Tiếp tục xem/One Piece _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Trang chủ/Tiếp tục xem/One Piece _ ngang.jpg",
    "year": "2011",
    "duration": "Tập 47",
    "age": "K",
    "quality": "2K",
    "rating": "4.4/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại hoạt hình, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Tài liệu",
      "Hành động",
      "Lịch sử"
    ],
    "category": "hoat-hinh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_5",
    "title": "Thanh Gươm Diệt Quỷ",
    "posterVertical": "/DanhMuc/Hoạt hình/Anime dài tập/Thanh Gươm Diệt Quỷ.jpg",
    "posterHorizontal": "/DanhMuc/Hoạt hình/Anime dài tập/Thanh Gươm Diệt Quỷ _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Hoạt hình/Anime dài tập/Thanh Gươm Diệt Quỷ _ ngang.jpg",
    "year": "2010",
    "duration": "Tập 34",
    "age": "T18",
    "quality": "2K",
    "rating": "4.1/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại hoạt hình, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Tài liệu",
      "Hành động"
    ],
    "category": "hoat-hinh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_6",
    "title": "Thám Tử Lừng Danh Conan",
    "posterVertical": "/DanhMuc/Hoạt hình/Anime dài tập/Thám Tử Lừng Danh Conan.jpg",
    "posterHorizontal": "/DanhMuc/Hoạt hình/Anime dài tập/Thám Tử Lừng Danh Conan _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Hoạt hình/Anime dài tập/Thám Tử Lừng Danh Conan _ ngang.jpg",
    "year": "2022",
    "duration": "Tập 32",
    "age": "P",
    "quality": "2K",
    "rating": "4.0/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại hoạt hình, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Tài liệu",
      "Lãng mạn"
    ],
    "category": "hoat-hinh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_7",
    "title": "Conan Movie 28: Dư Ảnh Của Độc Nhãn",
    "posterVertical": "/DanhMuc/Hoạt hình/Poster/Conan Movie 28-Dư Ảnh Của Độc Nhãn.jpg",
    "posterHorizontal": "/DanhMuc/Hoạt hình/Poster/Conan Movie 28-Dư Ảnh Của Độc Nhãn _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Hoạt hình/Poster/Conan Movie 28-Dư Ảnh Của Độc Nhãn _ ngang.jpg",
    "year": "2015",
    "duration": "Tập 74",
    "age": "P",
    "quality": "Full HD",
    "rating": "4.4/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại hoạt hình, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Tài liệu",
      "Hành động",
      "Lịch sử"
    ],
    "category": "hoat-hinh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_8",
    "title": "Elemental",
    "posterVertical": "/DanhMuc/Hoạt hình/Cơn sốt phòng vé/Elemental.jpg",
    "posterHorizontal": "/DanhMuc/Hoạt hình/Cơn sốt phòng vé/Elemental _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Hoạt hình/Cơn sốt phòng vé/Elemental _ ngang.jpg",
    "year": "2011",
    "duration": "Tập 82",
    "age": "P",
    "quality": "Full HD",
    "rating": "4.0/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại hoạt hình, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Gia đình",
      "Hành động",
      "Bí ẩn"
    ],
    "category": "hoat-hinh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_9",
    "title": "Inside Out 2",
    "posterVertical": "/DanhMuc/Trang chủ/Thịnh hành/Inside Out 2.jpg",
    "posterHorizontal": "/DanhMuc/Trang chủ/Thịnh hành/Inside Out 2 _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Trang chủ/Thịnh hành/Inside Out 2 _ ngang.jpg",
    "year": "2015",
    "duration": "Tập 46",
    "age": "K",
    "quality": "Full HD",
    "rating": "4.2/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại hoạt hình, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Tài liệu",
      "Kinh dị"
    ],
    "category": "hoat-hinh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_10",
    "title": "Jujutsu No Kaisen: Oh Movie",
    "posterVertical": "/DanhMuc/Hoạt hình/Cơn sốt phòng vé/Jujutsu No Kaisen-Oh Movie.jpg",
    "posterHorizontal": "/DanhMuc/Hoạt hình/Cơn sốt phòng vé/Jujutsu No Kaisen-Oh Movie _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Hoạt hình/Cơn sốt phòng vé/Jujutsu No Kaisen-Oh Movie _ ngang.jpg",
    "year": "2014",
    "duration": "Tập 66",
    "age": "P",
    "quality": "2K",
    "rating": "4.1/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại hoạt hình, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Bí ẩn",
      "Lịch sử"
    ],
    "category": "hoat-hinh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_11",
    "title": "Thanh Gươm Diệt Quỷ: Chuyến Tàu Vô Tận",
    "posterVertical": "/DanhMuc/Hoạt hình/Cơn sốt phòng vé/Thanh Gươm Diệt Quỷ-Chuyến Tàu Vô Tận.jpg",
    "posterHorizontal": "/DanhMuc/Hoạt hình/Cơn sốt phòng vé/Thanh Gươm Diệt Quỷ-Chuyến Tàu Vô Tận _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Hoạt hình/Cơn sốt phòng vé/Thanh Gươm Diệt Quỷ-Chuyến Tàu Vô Tận _ ngang.jpg",
    "year": "2023",
    "duration": "Tập 74",
    "age": "T18",
    "quality": "2K",
    "rating": "4.8/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại hoạt hình, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Viễn tưởng",
      "Hành động"
    ],
    "category": "hoat-hinh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_12",
    "title": "Zootopia",
    "posterVertical": "/DanhMuc/Trang chủ/Top 5/Zootopia.jpg",
    "posterHorizontal": "/DanhMuc/Trang chủ/Top 5/Zootopia _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Trang chủ/Top 5/Zootopia _ ngang.jpg",
    "year": "2022",
    "duration": "Tập 85",
    "age": "P",
    "quality": "Full HD",
    "rating": "4.3/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại hoạt hình, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Lãng mạn",
      "Gia đình"
    ],
    "category": "hoat-hinh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_13",
    "title": "Doraemon",
    "posterVertical": "/DanhMuc/Hoạt hình/Những người bạn nhỏ/Doraemon.jpg",
    "posterHorizontal": "/DanhMuc/Hoạt hình/Những người bạn nhỏ/Doraemon _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Hoạt hình/Những người bạn nhỏ/Doraemon _ ngang.jpg",
    "year": "2015",
    "duration": "Tập 53",
    "age": "P",
    "quality": "Full HD",
    "rating": "3.8/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại hoạt hình, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Viễn tưởng",
      "Kinh dị",
      "Hoạt hình"
    ],
    "category": "hoat-hinh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_14",
    "title": "Gia Đình Heo Peppa",
    "posterVertical": "/DanhMuc/Hoạt hình/Poster/Gia Đình Heo Peppa.jpg",
    "posterHorizontal": "/DanhMuc/Hoạt hình/Poster/Gia Đình Heo Peppa _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Hoạt hình/Poster/Gia Đình Heo Peppa _ ngang.jpg",
    "year": "2017",
    "duration": "Tập 54",
    "age": "T13",
    "quality": "Full HD",
    "rating": "4.7/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại hoạt hình, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Hành động",
      "Gia đình"
    ],
    "category": "hoat-hinh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_15",
    "title": "Nông Trại Cừu Vui Vẻ",
    "posterVertical": "/DanhMuc/Hoạt hình/Những người bạn nhỏ/Nông Trại Cừu Vui Vẻ.jpg",
    "posterHorizontal": "/DanhMuc/Hoạt hình/Những người bạn nhỏ/Nông Trại Cừu Vui Vẻ _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Hoạt hình/Những người bạn nhỏ/Nông Trại Cừu Vui Vẻ _ ngang.jpg",
    "year": "2012",
    "duration": "Tập 82",
    "age": "K",
    "quality": "Full HD",
    "rating": "3.6/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại hoạt hình, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Hài hước",
      "Viễn tưởng"
    ],
    "category": "hoat-hinh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_16",
    "title": "Oggy",
    "posterVertical": "/DanhMuc/Hoạt hình/Những người bạn nhỏ/Oggy.jpg",
    "posterHorizontal": "/DanhMuc/Hoạt hình/Những người bạn nhỏ/Oggy _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Hoạt hình/Những người bạn nhỏ/Oggy _ ngang.jpg",
    "year": "2010",
    "duration": "Tập 78",
    "age": "P",
    "quality": "Full HD",
    "rating": "4.6/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại hoạt hình, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Bí ẩn",
      "Hành động"
    ],
    "category": "hoat-hinh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_17",
    "title": "Phineas And Ferb",
    "posterVertical": "/DanhMuc/Hoạt hình/Những người bạn nhỏ/Phineas And Ferb.jpg",
    "posterHorizontal": "/DanhMuc/Hoạt hình/Những người bạn nhỏ/Phineas And Ferb _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Hoạt hình/Những người bạn nhỏ/Phineas And Ferb _ ngang.jpg",
    "year": "2022",
    "duration": "Tập 93",
    "age": "K",
    "quality": "Full HD",
    "rating": "4.7/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại hoạt hình, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Gia đình"
    ],
    "category": "hoat-hinh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_18",
    "title": "Pink Panther",
    "posterVertical": "/DanhMuc/Hoạt hình/Những người bạn nhỏ/Pink Panther.jpg",
    "posterHorizontal": "/DanhMuc/Hoạt hình/Những người bạn nhỏ/Pink Panther _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Hoạt hình/Những người bạn nhỏ/Pink Panther _ ngang.jpg",
    "year": "2015",
    "duration": "Tập 81",
    "age": "T13",
    "quality": "Full HD",
    "rating": "4.7/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại hoạt hình, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Lãng mạn",
      "Bí ẩn",
      "Hài hước"
    ],
    "category": "hoat-hinh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_19",
    "title": "Arcane",
    "posterVertical": "/DanhMuc/Hoạt hình/Phiêu lưu kì thú/Arcane.jpg",
    "posterHorizontal": "/DanhMuc/Hoạt hình/Phiêu lưu kì thú/Arcane _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Hoạt hình/Phiêu lưu kì thú/Arcane _ ngang.jpg",
    "year": "2018",
    "duration": "Tập 47",
    "age": "T18",
    "quality": "2K",
    "rating": "4.9/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại hoạt hình, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Lãng mạn"
    ],
    "category": "hoat-hinh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_20",
    "title": "Bí Kiếp Luyện Rồng",
    "posterVertical": "/DanhMuc/Hoạt hình/Phiêu lưu kì thú/Bí Kiếp Luyện Rồng.jpg",
    "posterHorizontal": "/DanhMuc/Hoạt hình/Phiêu lưu kì thú/Bí Kiếp Luyện Rồng _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Hoạt hình/Phiêu lưu kì thú/Bí Kiếp Luyện Rồng _ ngang.jpg",
    "year": "2014",
    "duration": "Tập 55",
    "age": "T16",
    "quality": "2K",
    "rating": "4.0/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại hoạt hình, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Gia đình",
      "Kinh dị"
    ],
    "category": "hoat-hinh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_21",
    "title": "Chú Chó Nhút Nhát",
    "posterVertical": "/DanhMuc/Hoạt hình/Phiêu lưu kì thú/Chú Chó Nhút Nhát.jpg",
    "posterHorizontal": "/DanhMuc/Hoạt hình/Phiêu lưu kì thú/Chú Chó Nhút Nhát _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Hoạt hình/Phiêu lưu kì thú/Chú Chó Nhút Nhát _ ngang.jpg",
    "year": "2023",
    "duration": "Tập 24",
    "age": "T18",
    "quality": "2K",
    "rating": "4.2/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại hoạt hình, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Viễn tưởng"
    ],
    "category": "hoat-hinh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_22",
    "title": "Dr.Stone: Thế Giới Đá",
    "posterVertical": "/DanhMuc/Hoạt hình/Phiêu lưu kì thú/Dr.Stone-Thế Giới Đá.jpg",
    "posterHorizontal": "/DanhMuc/Hoạt hình/Phiêu lưu kì thú/Dr.Stone-Thế Giới Đá _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Hoạt hình/Phiêu lưu kì thú/Dr.Stone-Thế Giới Đá _ ngang.jpg",
    "year": "2012",
    "duration": "Tập 42",
    "age": "T16",
    "quality": "2K",
    "rating": "4.9/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại hoạt hình, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Hoạt hình"
    ],
    "category": "hoat-hinh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_23",
    "title": "Gravity Fall",
    "posterVertical": "/DanhMuc/Hoạt hình/Phiêu lưu kì thú/Gravity Fall.jpg",
    "posterHorizontal": "/DanhMuc/Hoạt hình/Phiêu lưu kì thú/Gravity Fall _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Hoạt hình/Phiêu lưu kì thú/Gravity Fall _ ngang.jpg",
    "year": "2011",
    "duration": "Tập 89",
    "age": "T18",
    "quality": "Full HD",
    "rating": "3.6/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại hoạt hình, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Hành động",
      "Gia đình"
    ],
    "category": "hoat-hinh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_24",
    "title": "Scooby Doo",
    "posterVertical": "/DanhMuc/Hoạt hình/Phiêu lưu kì thú/Scooby Doo.jpg",
    "posterHorizontal": "/DanhMuc/Hoạt hình/Phiêu lưu kì thú/Scooby Doo _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Hoạt hình/Phiêu lưu kì thú/Scooby Doo _ ngang.jpg",
    "year": "2011",
    "duration": "Tập 86",
    "age": "T16",
    "quality": "Full HD",
    "rating": "4.6/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại hoạt hình, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Hoạt hình",
      "Bí ẩn"
    ],
    "category": "hoat-hinh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_25",
    "title": "Attack On Titan: Final Season",
    "posterVertical": "/DanhMuc/Hoạt hình/Đang phổ biến/Attack On Titan-Final Season.jpg",
    "posterHorizontal": "/DanhMuc/Hoạt hình/Đang phổ biến/Attack On Titan-Final Season _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Hoạt hình/Đang phổ biến/Attack On Titan-Final Season _ ngang.jpg",
    "year": "2023",
    "duration": "Tập 63",
    "age": "T18",
    "quality": "2K",
    "rating": "4.8/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại hoạt hình, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Lịch sử",
      "Tài liệu",
      "Lãng mạn"
    ],
    "category": "hoat-hinh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_26",
    "title": "Thanh Gươm Diệt Quỷ: Vô Hạn Thành",
    "posterVertical": "/DanhMuc/Hoạt hình/Đang phổ biến/Thanh Gươm Diệt Quỷ-Vô Hạn Thành.jpg",
    "posterHorizontal": "/DanhMuc/Hoạt hình/Poster/Thanh Gươm Diệt Quỷ-Vô Hạn Thành _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Hoạt hình/Poster/Thanh Gươm Diệt Quỷ-Vô Hạn Thành _ ngang.jpg",
    "year": "2021",
    "duration": "Tập 12",
    "age": "T18",
    "quality": "2K",
    "rating": "4.9/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại hoạt hình, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Hoạt hình"
    ],
    "category": "hoat-hinh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_27",
    "title": "Ao Ashi",
    "posterVertical": "/DanhMuc/Hoạt hình/Thể thao cực hạn/Ao Ashi.jpg",
    "posterHorizontal": "/DanhMuc/Hoạt hình/Thể thao cực hạn/Ao Ashi _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Hoạt hình/Thể thao cực hạn/Ao Ashi _ ngang.jpg",
    "year": "2010",
    "duration": "Tập 34",
    "age": "K",
    "quality": "2K",
    "rating": "4.3/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại hoạt hình, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Tài liệu",
      "Kinh dị",
      "Lãng mạn"
    ],
    "category": "hoat-hinh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_28",
    "title": "Blue Lock",
    "posterVertical": "/DanhMuc/Hoạt hình/Thể thao cực hạn/Blue Lock.jpg",
    "posterHorizontal": "/DanhMuc/Hoạt hình/Thể thao cực hạn/Blue Lock _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Hoạt hình/Thể thao cực hạn/Blue Lock _ ngang.jpg",
    "year": "2015",
    "duration": "Tập 52",
    "age": "P",
    "quality": "2K",
    "rating": "4.1/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại hoạt hình, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Kinh dị",
      "Hoạt hình"
    ],
    "category": "hoat-hinh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_29",
    "title": "Captain Tsubasa",
    "posterVertical": "/DanhMuc/Hoạt hình/Thể thao cực hạn/Captain Tsubasa.jpg",
    "posterHorizontal": "/DanhMuc/Hoạt hình/Thể thao cực hạn/Captain Tsubasa _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Hoạt hình/Thể thao cực hạn/Captain Tsubasa _ ngang.jpg",
    "year": "2023",
    "duration": "Tập 12",
    "age": "P",
    "quality": "Full HD",
    "rating": "4.6/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại hoạt hình, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Hành động",
      "Viễn tưởng"
    ],
    "category": "hoat-hinh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_30",
    "title": "Haikyuu",
    "posterVertical": "/DanhMuc/Hoạt hình/Thể thao cực hạn/Haikyuu.jpg",
    "posterHorizontal": "/DanhMuc/Hoạt hình/Thể thao cực hạn/Haikyuu _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Hoạt hình/Thể thao cực hạn/Haikyuu _ ngang.jpg",
    "year": "2010",
    "duration": "Tập 36",
    "age": "T16",
    "quality": "2K",
    "rating": "3.6/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại hoạt hình, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Viễn tưởng",
      "Tài liệu",
      "Hành động"
    ],
    "category": "hoat-hinh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_31",
    "title": "Hajime No Ippo",
    "posterVertical": "/DanhMuc/Hoạt hình/Thể thao cực hạn/Hajime No Ippo.jpg",
    "posterHorizontal": "/DanhMuc/Hoạt hình/Thể thao cực hạn/Hajime No Ippo _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Hoạt hình/Thể thao cực hạn/Hajime No Ippo _ ngang.jpg",
    "year": "2018",
    "duration": "Tập 82",
    "age": "T18",
    "quality": "Full HD",
    "rating": "4.9/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại hoạt hình, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Hành động",
      "Viễn tưởng"
    ],
    "category": "hoat-hinh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_32",
    "title": "Kuroko No Basket: Last Game",
    "posterVertical": "/DanhMuc/Hoạt hình/Thể thao cực hạn/Kuroko No Basket-Last Game.jpg",
    "posterHorizontal": "/DanhMuc/Hoạt hình/Thể thao cực hạn/Kuroko No Basket-Last Game _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Hoạt hình/Thể thao cực hạn/Kuroko No Basket-Last Game _ ngang.jpg",
    "year": "2020",
    "duration": "Tập 62",
    "age": "P",
    "quality": "2K",
    "rating": "4.0/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại hoạt hình, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Hành động"
    ],
    "category": "hoat-hinh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_33",
    "title": "SpiderMan: Beyond The Spider Verse",
    "posterVertical": "/DanhMuc/Trang chủ/Top 5/SpiderMan-Beyond The Spider Verse.jpg",
    "posterHorizontal": "/DanhMuc/Trang chủ/Top 5/SpiderMan-Beyond The Spider Verse _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Trang chủ/Top 5/SpiderMan-Beyond The Spider Verse _ ngang.jpg",
    "year": "2018",
    "duration": "Tập 39",
    "age": "P",
    "quality": "2K",
    "rating": "3.5/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại hoạt hình, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Kinh dị",
      "Lãng mạn"
    ],
    "category": "hoat-hinh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_34",
    "title": "Thanh Gươm Diệt Quỷ : Vô Hạn Thành",
    "posterVertical": "/DanhMuc/Hoạt hình/Đang phổ biến/Thanh Gươm Diệt Quỷ -Vô Hạn Thành _ ngang.jpg",
    "posterHorizontal": "/DanhMuc/Hoạt hình/Đang phổ biến/Thanh Gươm Diệt Quỷ -Vô Hạn Thành _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Hoạt hình/Đang phổ biến/Thanh Gươm Diệt Quỷ -Vô Hạn Thành _ ngang.jpg",
    "year": "2021",
    "duration": "Tập 85",
    "age": "T13",
    "quality": "2K",
    "rating": "4.6/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại hoạt hình, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Hành động",
      "Viễn tưởng"
    ],
    "category": "hoat-hinh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_35",
    "title": "The Super Mario Galaxy",
    "posterVertical": "/DanhMuc/Trang chủ/Thịnh hành/The Super Mario Galaxy.jpg",
    "posterHorizontal": "/DanhMuc/Trang chủ/Thịnh hành/The Super Mario Galaxy _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Trang chủ/Thịnh hành/The Super Mario Galaxy _ ngang.jpg",
    "year": "2013",
    "duration": "Tập 76",
    "age": "P",
    "quality": "Full HD",
    "rating": "4.5/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại hoạt hình, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Hoạt hình",
      "Hành động"
    ],
    "category": "hoat-hinh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_36",
    "title": "Toy Story 5",
    "posterVertical": "/DanhMuc/Hoạt hình/Đang phổ biến/Toy Story 5.jpg",
    "posterHorizontal": "/DanhMuc/Hoạt hình/Đang phổ biến/Toy Story 5 _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Hoạt hình/Đang phổ biến/Toy Story 5 _ ngang.jpg",
    "year": "2017",
    "duration": "Tập 90",
    "age": "T16",
    "quality": "2K",
    "rating": "3.6/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại hoạt hình, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Hài hước"
    ],
    "category": "hoat-hinh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_37",
    "title": "Alice In BorderLand: Thế Giới Không Lối Thoát",
    "posterVertical": "/DanhMuc/Phim truyền hình/Bạn không nên bỏ lỡ/Alice In BorderLand-Thế Giới Không Lối Thoát.jpg",
    "posterHorizontal": "/DanhMuc/Phim truyền hình/Bạn không nên bỏ lỡ/Alice In BorderLand-Thế Giới Không Lối Thoát _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Phim truyền hình/Bạn không nên bỏ lỡ/Alice In BorderLand-Thế Giới Không Lối Thoát _ ngang.jpg",
    "year": "2019",
    "duration": "Tập 69",
    "age": "P",
    "quality": "2K",
    "rating": "3.9/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim truyền hình, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Lãng mạn",
      "Gia đình",
      "Hành động"
    ],
    "category": "phim-truyen-hinh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_38",
    "title": "Harry Potter",
    "posterVertical": "/DanhMuc/Phim truyền hình/Series đi cùng năm tháng/Harry Potter.jpg",
    "posterHorizontal": "/DanhMuc/Phim truyền hình/Series đi cùng năm tháng/Harry Potter _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Phim truyền hình/Series đi cùng năm tháng/Harry Potter _ ngang.jpg",
    "year": "2010",
    "duration": "Tập 21",
    "age": "T18",
    "quality": "Full HD",
    "rating": "3.7/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim truyền hình, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Tài liệu",
      "Hài hước"
    ],
    "category": "phim-truyen-hinh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_39",
    "title": "Peaky Blinders",
    "posterVertical": "/DanhMuc/Phim truyền hình/Bạn không nên bỏ lỡ/Peaky Blinders.jpg",
    "posterHorizontal": "/DanhMuc/Phim truyền hình/Bạn không nên bỏ lỡ/Peaky Blinders _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Phim truyền hình/Bạn không nên bỏ lỡ/Peaky Blinders _ ngang.jpg",
    "year": "2016",
    "duration": "Tập 42",
    "age": "T18",
    "quality": "Full HD",
    "rating": "3.6/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim truyền hình, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Kinh dị",
      "Lãng mạn",
      "Bí ẩn"
    ],
    "category": "phim-truyen-hinh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_40",
    "title": "Squid Game",
    "posterVertical": "/DanhMuc/Phim truyền hình/Bạn không nên bỏ lỡ/Squid Game.jpg",
    "posterHorizontal": "/DanhMuc/Phim truyền hình/Bạn không nên bỏ lỡ/Squid Game _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Phim truyền hình/Bạn không nên bỏ lỡ/Squid Game _ ngang.jpg",
    "year": "2014",
    "duration": "Tập 90",
    "age": "T18",
    "quality": "Full HD",
    "rating": "4.8/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim truyền hình, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Lãng mạn",
      "Bí ẩn",
      "Hài hước"
    ],
    "category": "phim-truyen-hinh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_41",
    "title": "Sweet Home",
    "posterVertical": "/DanhMuc/Phim truyền hình/Bạn không nên bỏ lỡ/Sweet Home.jpg",
    "posterHorizontal": "/DanhMuc/Phim truyền hình/Bạn không nên bỏ lỡ/Sweet Home _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Phim truyền hình/Bạn không nên bỏ lỡ/Sweet Home _ ngang.jpg",
    "year": "2014",
    "duration": "Tập 70",
    "age": "T18",
    "quality": "2K",
    "rating": "4.0/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim truyền hình, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Kinh dị",
      "Lãng mạn",
      "Gia đình"
    ],
    "category": "phim-truyen-hinh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_42",
    "title": "The Boys",
    "posterVertical": "/DanhMuc/Trang chủ/Top 5/The Boys.jpg",
    "posterHorizontal": "/DanhMuc/Trang chủ/Top 5/The Boys _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Trang chủ/Top 5/The Boys _ ngang.jpg",
    "year": "2010",
    "duration": "Tập 18",
    "age": "K",
    "quality": "Full HD",
    "rating": "3.9/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim truyền hình, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Lãng mạn"
    ],
    "category": "phim-truyen-hinh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_43",
    "title": "Better Call Saul",
    "posterVertical": "/DanhMuc/Phim truyền hình/Phim bất hủ/Better Call Saul.jpg",
    "posterHorizontal": "/DanhMuc/Phim truyền hình/Phim bất hủ/Better Call Saul _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Phim truyền hình/Phim bất hủ/Better Call Saul _ ngang.jpg",
    "year": "2013",
    "duration": "Tập 98",
    "age": "T16",
    "quality": "Full HD",
    "rating": "4.8/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim truyền hình, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Hành động"
    ],
    "category": "phim-truyen-hinh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_44",
    "title": "Sopranos",
    "posterVertical": "/DanhMuc/Phim truyền hình/Phim bất hủ/Sopranos.jpg",
    "posterHorizontal": "/DanhMuc/Phim truyền hình/Phim bất hủ/Sopranos _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Phim truyền hình/Phim bất hủ/Sopranos _ ngang.jpg",
    "year": "2015",
    "duration": "Tập 93",
    "age": "T13",
    "quality": "Full HD",
    "rating": "4.9/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim truyền hình, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Hành động",
      "Hài hước",
      "Lịch sử"
    ],
    "category": "phim-truyen-hinh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_45",
    "title": "Spider Man",
    "posterVertical": "/DanhMuc/Phim truyền hình/Phim bất hủ/Spider Man.jpg",
    "posterHorizontal": "/DanhMuc/Phim truyền hình/Phim bất hủ/Spider Man _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Phim truyền hình/Phim bất hủ/Spider Man _ ngang.jpg",
    "year": "2017",
    "duration": "Tập 15",
    "age": "T18",
    "quality": "2K",
    "rating": "4.5/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim truyền hình, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Hoạt hình",
      "Lãng mạn",
      "Hài hước"
    ],
    "category": "phim-truyen-hinh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_46",
    "title": "Sự Im Lặng Của Bầy Cừu",
    "posterVertical": "/DanhMuc/Phim truyền hình/Phim bất hủ/Sự Im Lặng Của Bầy Cừu.jpg",
    "posterHorizontal": "/DanhMuc/Phim truyền hình/Phim bất hủ/Sự Im Lặng Của Bầy Cừu _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Phim truyền hình/Phim bất hủ/Sự Im Lặng Của Bầy Cừu _ ngang.jpg",
    "year": "2016",
    "duration": "Tập 81",
    "age": "P",
    "quality": "Full HD",
    "rating": "4.1/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim truyền hình, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Hành động",
      "Lịch sử"
    ],
    "category": "phim-truyen-hinh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_47",
    "title": "The Green Mile",
    "posterVertical": "/DanhMuc/Trang chủ/Phim dành giải thưởng/The Green Mile.jpg",
    "posterHorizontal": "/DanhMuc/Trang chủ/Phim dành giải thưởng/The Green Mile _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Trang chủ/Phim dành giải thưởng/The Green Mile _ ngang.jpg",
    "year": "2017",
    "duration": "Tập 21",
    "age": "T16",
    "quality": "2K",
    "rating": "3.6/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim truyền hình, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Hài hước",
      "Viễn tưởng"
    ],
    "category": "phim-truyen-hinh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_48",
    "title": "The Truman Show",
    "posterVertical": "/DanhMuc/Trang chủ/Phim cũ mà chất/The Truman Show.jpg",
    "posterHorizontal": "/DanhMuc/Trang chủ/Phim cũ mà chất/The Truman Show _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Trang chủ/Phim cũ mà chất/The Truman Show _ ngang.jpg",
    "year": "2017",
    "duration": "Tập 57",
    "age": "K",
    "quality": "2K",
    "rating": "3.8/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim truyền hình, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Lãng mạn",
      "Hành động"
    ],
    "category": "phim-truyen-hinh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_49",
    "title": "Breaking Bad",
    "posterVertical": "/DanhMuc/Phim truyền hình/Series đi cùng năm tháng/Breaking Bad.jpg",
    "posterHorizontal": "/DanhMuc/Phim truyền hình/Series đi cùng năm tháng/Breaking Bad _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Phim truyền hình/Series đi cùng năm tháng/Breaking Bad _ ngang.jpg",
    "year": "2012",
    "duration": "Tập 76",
    "age": "K",
    "quality": "Full HD",
    "rating": "4.7/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim truyền hình, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Tài liệu"
    ],
    "category": "phim-truyen-hinh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_50",
    "title": "The Walking Dead 9",
    "posterVertical": "/DanhMuc/Phim truyền hình/Series đi cùng năm tháng/The Walking Dead 9.jpg",
    "posterHorizontal": "/DanhMuc/Phim truyền hình/Series đi cùng năm tháng/The Walking Dead 9_ngang.jpg",
    "backdropUrl": "/DanhMuc/Phim truyền hình/Series đi cùng năm tháng/The Walking Dead 9_ngang.jpg",
    "year": "2019",
    "duration": "Tập 58",
    "age": "T13",
    "quality": "Full HD",
    "rating": "3.9/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim truyền hình, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Hoạt hình"
    ],
    "category": "phim-truyen-hinh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_51",
    "title": "Đồ Tể Dexter",
    "posterVertical": "/DanhMuc/Phim truyền hình/Poster/Đồ Tể Dexter.jpg",
    "posterHorizontal": "/DanhMuc/Phim truyền hình/Poster/Đồ Tể Dexter _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Phim truyền hình/Poster/Đồ Tể Dexter _ ngang.jpg",
    "year": "2010",
    "duration": "Tập 55",
    "age": "T13",
    "quality": "Full HD",
    "rating": "4.1/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim truyền hình, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Hành động"
    ],
    "category": "phim-truyen-hinh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_52",
    "title": "Game Of Thrones: Trò Chơi Vương Quyền",
    "posterVertical": "/DanhMuc/Phim truyền hình/Series đi cùng năm tháng/Game Of Thrones-Trò Chơi Vương Quyền.jpg",
    "posterHorizontal": "/DanhMuc/Phim truyền hình/Series đi cùng năm tháng/Game Of Thrones-Trò Chơi Vương Quyền _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Phim truyền hình/Series đi cùng năm tháng/Game Of Thrones-Trò Chơi Vương Quyền _ ngang.jpg",
    "year": "2019",
    "duration": "Tập 31",
    "age": "P",
    "quality": "Full HD",
    "rating": "4.0/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim truyền hình, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Lãng mạn"
    ],
    "category": "phim-truyen-hinh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_53",
    "title": "Stranger Things _ Cậu Bé Mất Tích",
    "posterVertical": "/DanhMuc/Phim truyền hình/Series đi cùng năm tháng/Stranger Things _ Cậu Bé Mất Tích.jpg",
    "posterHorizontal": "/DanhMuc/Phim truyền hình/Series đi cùng năm tháng/Stranger Things _ Cậu Bé Mất Tích.jpg",
    "backdropUrl": "/DanhMuc/Phim truyền hình/Series đi cùng năm tháng/Stranger Things _ Cậu Bé Mất Tích.jpg",
    "year": "2018",
    "duration": "Tập 26",
    "age": "T18",
    "quality": "2K",
    "rating": "4.4/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim truyền hình, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Gia đình"
    ],
    "category": "phim-truyen-hinh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_54",
    "title": "Stranger Things: Cậu Bé Mất Tích",
    "posterVertical": "/DanhMuc/Trang chủ/Top 5/Stranger Things-Cậu Bé Mất Tích _ ngang.jpg",
    "posterHorizontal": "/DanhMuc/Trang chủ/Top 5/Stranger Things-Cậu Bé Mất Tích _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Trang chủ/Top 5/Stranger Things-Cậu Bé Mất Tích _ ngang.jpg",
    "year": "2018",
    "duration": "Tập 42",
    "age": "P",
    "quality": "2K",
    "rating": "4.0/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim truyền hình, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Gia đình"
    ],
    "category": "phim-truyen-hinh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_55",
    "title": "The Walking Dead 1",
    "posterVertical": "/DanhMuc/Phim truyền hình/Series đi cùng năm tháng/The Walking Dead 1.jpg",
    "posterHorizontal": "/DanhMuc/Phim truyền hình/Series đi cùng năm tháng/The Walking Dead 1 _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Phim truyền hình/Series đi cùng năm tháng/The Walking Dead 1 _ ngang.jpg",
    "year": "2021",
    "duration": "Tập 68",
    "age": "T16",
    "quality": "Full HD",
    "rating": "4.5/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim truyền hình, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Tài liệu",
      "Gia đình"
    ],
    "category": "phim-truyen-hinh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_56",
    "title": "1899",
    "posterVertical": "/DanhMuc/Phim tài liệu/Bí ẩn chưa giải mã/1899.jpg",
    "posterHorizontal": "/DanhMuc/Phim tài liệu/Bí ẩn chưa giải mã/1899 _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Phim tài liệu/Bí ẩn chưa giải mã/1899 _ ngang.jpg",
    "year": "2022",
    "duration": "1h 19m",
    "age": "K",
    "quality": "Full HD",
    "rating": "3.7/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim tài liệu, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Bí ẩn",
      "Hành động",
      "Viễn tưởng"
    ],
    "category": "phim-tai-lieu",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_57",
    "title": "MH370: The Plane That Disappeared",
    "posterVertical": "/DanhMuc/Phim tài liệu/Bí ẩn chưa giải mã/MH370-The Plane That Disappeared.jpg",
    "posterHorizontal": "/DanhMuc/Phim tài liệu/Bí ẩn chưa giải mã/MH370-The Plane That Disappeared _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Phim tài liệu/Bí ẩn chưa giải mã/MH370-The Plane That Disappeared _ ngang.jpg",
    "year": "2017",
    "duration": "1h 16m",
    "age": "T18",
    "quality": "2K",
    "rating": "4.2/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim tài liệu, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Hành động",
      "Lịch sử"
    ],
    "category": "phim-tai-lieu",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_58",
    "title": "Missing: The Lucie Blackman Case",
    "posterVertical": "/DanhMuc/Phim tài liệu/Bí ẩn chưa giải mã/Missing-The Lucie Blackman Case _ ngang.jpg",
    "posterHorizontal": "/DanhMuc/Phim tài liệu/Bí ẩn chưa giải mã/Missing-The Lucie Blackman Case _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Phim tài liệu/Bí ẩn chưa giải mã/Missing-The Lucie Blackman Case _ ngang.jpg",
    "year": "2021",
    "duration": "2h 48m",
    "age": "T13",
    "quality": "Full HD",
    "rating": "4.6/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim tài liệu, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Hành động",
      "Tài liệu",
      "Viễn tưởng"
    ],
    "category": "phim-tai-lieu",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_59",
    "title": "Missing_The Lucie Blackman Case",
    "posterVertical": "/DanhMuc/Phim tài liệu/Bí ẩn chưa giải mã/Missing_The Lucie Blackman Case.jpg",
    "posterHorizontal": "/DanhMuc/Phim tài liệu/Bí ẩn chưa giải mã/Missing_The Lucie Blackman Case.jpg",
    "backdropUrl": "/DanhMuc/Phim tài liệu/Bí ẩn chưa giải mã/Missing_The Lucie Blackman Case.jpg",
    "year": "2010",
    "duration": "1h 18m",
    "age": "T13",
    "quality": "2K",
    "rating": "4.4/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim tài liệu, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Hoạt hình",
      "Hài hước"
    ],
    "category": "phim-tai-lieu",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_60",
    "title": "The Dinosaurs",
    "posterVertical": "/DanhMuc/Phim tài liệu/Poster/The Dinosaurs.jpg",
    "posterHorizontal": "/DanhMuc/Phim tài liệu/Poster/The Dinosaurs _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Phim tài liệu/Poster/The Dinosaurs _ ngang.jpg",
    "year": "2017",
    "duration": "2h 22m",
    "age": "T18",
    "quality": "Full HD",
    "rating": "4.4/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim tài liệu, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Hoạt hình",
      "Kinh dị"
    ],
    "category": "phim-tai-lieu",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_61",
    "title": "Titan",
    "posterVertical": "/DanhMuc/Phim tài liệu/Bí ẩn chưa giải mã/Titan.jpg",
    "posterHorizontal": "/DanhMuc/Phim tài liệu/Bí ẩn chưa giải mã/Titan _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Phim tài liệu/Bí ẩn chưa giải mã/Titan _ ngang.jpg",
    "year": "2023",
    "duration": "1h 48m",
    "age": "K",
    "quality": "2K",
    "rating": "4.5/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim tài liệu, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Kinh dị"
    ],
    "category": "phim-tai-lieu",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_62",
    "title": "Worst Roomate Ever",
    "posterVertical": "/DanhMuc/Phim tài liệu/Bí ẩn chưa giải mã/Worst Roomate Ever.jpg",
    "posterHorizontal": "/DanhMuc/Phim tài liệu/Bí ẩn chưa giải mã/Worst Roomate Ever _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Phim tài liệu/Bí ẩn chưa giải mã/Worst Roomate Ever _ ngang.jpg",
    "year": "2014",
    "duration": "2h 52m",
    "age": "T13",
    "quality": "2K",
    "rating": "4.8/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim tài liệu, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Hoạt hình",
      "Tài liệu",
      "Kinh dị"
    ],
    "category": "phim-tai-lieu",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_63",
    "title": "Apollo 11",
    "posterVertical": "/DanhMuc/Phim tài liệu/Góc nhìn lịch sử/Apollo 11.jpg",
    "posterHorizontal": "/DanhMuc/Phim tài liệu/Góc nhìn lịch sử/Apollo 11 _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Phim tài liệu/Góc nhìn lịch sử/Apollo 11 _ ngang.jpg",
    "year": "2011",
    "duration": "1h 54m",
    "age": "T18",
    "quality": "Full HD",
    "rating": "4.3/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim tài liệu, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Bí ẩn",
      "Lãng mạn"
    ],
    "category": "phim-tai-lieu",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_64",
    "title": "Cunk On Earth",
    "posterVertical": "/DanhMuc/Phim tài liệu/Góc nhìn lịch sử/Cunk On Earth.jpg",
    "posterHorizontal": "/DanhMuc/Phim tài liệu/Góc nhìn lịch sử/Cunk On Earth _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Phim tài liệu/Góc nhìn lịch sử/Cunk On Earth _ ngang.jpg",
    "year": "2023",
    "duration": "2h 20m",
    "age": "T18",
    "quality": "2K",
    "rating": "4.3/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim tài liệu, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Hành động",
      "Viễn tưởng"
    ],
    "category": "phim-tai-lieu",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_65",
    "title": "The Civil War: Cuộc Nội Chiến",
    "posterVertical": "/DanhMuc/Phim tài liệu/Góc nhìn lịch sử/The Civil War-Cuộc Nội Chiến.jpg",
    "posterHorizontal": "/DanhMuc/Phim tài liệu/Góc nhìn lịch sử/The Civil War-Cuộc Nội Chiến _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Phim tài liệu/Góc nhìn lịch sử/The Civil War-Cuộc Nội Chiến _ ngang.jpg",
    "year": "2017",
    "duration": "2h 46m",
    "age": "P",
    "quality": "Full HD",
    "rating": "3.9/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim tài liệu, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Lãng mạn",
      "Hài hước"
    ],
    "category": "phim-tai-lieu",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_66",
    "title": "They Shall Not Grow Old",
    "posterVertical": "/DanhMuc/Phim tài liệu/Góc nhìn lịch sử/They Shall Not Grow Old.jpg",
    "posterHorizontal": "/DanhMuc/Phim tài liệu/Góc nhìn lịch sử/They Shall Not Grow Old _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Phim tài liệu/Góc nhìn lịch sử/They Shall Not Grow Old _ ngang.jpg",
    "year": "2017",
    "duration": "1h 19m",
    "age": "P",
    "quality": "2K",
    "rating": "4.5/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim tài liệu, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Lãng mạn"
    ],
    "category": "phim-tai-lieu",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_67",
    "title": "Unknown: The Lost Pyramid",
    "posterVertical": "/DanhMuc/Phim tài liệu/Góc nhìn lịch sử/Unknown-The Lost Pyramid.jpg",
    "posterHorizontal": "/DanhMuc/Phim tài liệu/Góc nhìn lịch sử/Unknown-The Lost Pyramid _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Phim tài liệu/Góc nhìn lịch sử/Unknown-The Lost Pyramid _ ngang.jpg",
    "year": "2024",
    "duration": "1h 25m",
    "age": "T13",
    "quality": "2K",
    "rating": "4.4/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim tài liệu, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Lịch sử",
      "Gia đình"
    ],
    "category": "phim-tai-lieu",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_68",
    "title": "WW2 In Colour",
    "posterVertical": "/DanhMuc/Phim tài liệu/Poster/WW2 In Colour.jpg",
    "posterHorizontal": "/DanhMuc/Phim tài liệu/Poster/WW2 In Colour _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Phim tài liệu/Poster/WW2 In Colour _ ngang.jpg",
    "year": "2022",
    "duration": "2h 50m",
    "age": "P",
    "quality": "Full HD",
    "rating": "4.4/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim tài liệu, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Lịch sử",
      "Hành động"
    ],
    "category": "phim-tai-lieu",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_69",
    "title": "Cave Of Bones",
    "posterVertical": "/DanhMuc/Phim tài liệu/Khoa học và tương lai/Cave Of Bones.jpg",
    "posterHorizontal": "/DanhMuc/Phim tài liệu/Khoa học và tương lai/Cave Of Bones _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Phim tài liệu/Khoa học và tương lai/Cave Of Bones _ ngang.jpg",
    "year": "2020",
    "duration": "2h 33m",
    "age": "P",
    "quality": "Full HD",
    "rating": "3.6/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim tài liệu, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Hài hước"
    ],
    "category": "phim-tai-lieu",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_70",
    "title": "Into The Inferno",
    "posterVertical": "/DanhMuc/Phim tài liệu/Khoa học và tương lai/Into The Inferno.jpg",
    "posterHorizontal": "/DanhMuc/Phim tài liệu/Khoa học và tương lai/Into The Inferno _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Phim tài liệu/Khoa học và tương lai/Into The Inferno _ ngang.jpg",
    "year": "2015",
    "duration": "2h 32m",
    "age": "P",
    "quality": "Full HD",
    "rating": "3.9/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim tài liệu, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Lịch sử",
      "Tài liệu",
      "Kinh dị"
    ],
    "category": "phim-tai-lieu",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_71",
    "title": "The Singularity",
    "posterVertical": "/DanhMuc/Phim tài liệu/Poster/The Singularity.jpg",
    "posterHorizontal": "/DanhMuc/Phim tài liệu/Poster/The Singularity _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Phim tài liệu/Poster/The Singularity _ ngang.jpg",
    "year": "2011",
    "duration": "1h 58m",
    "age": "T18",
    "quality": "2K",
    "rating": "4.2/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim tài liệu, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Gia đình",
      "Hành động",
      "Hoạt hình"
    ],
    "category": "phim-tai-lieu",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_72",
    "title": "The Social Dilemma",
    "posterVertical": "/DanhMuc/Phim tài liệu/Khoa học và tương lai/The Social Dilemma.jpg",
    "posterHorizontal": "/DanhMuc/Phim tài liệu/Khoa học và tương lai/The Social Dilemma _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Phim tài liệu/Khoa học và tương lai/The Social Dilemma _ ngang.jpg",
    "year": "2013",
    "duration": "2h 46m",
    "age": "T13",
    "quality": "2K",
    "rating": "3.8/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim tài liệu, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Hành động",
      "Viễn tưởng",
      "Tài liệu"
    ],
    "category": "phim-tai-lieu",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_73",
    "title": "Through The Wormhole",
    "posterVertical": "/DanhMuc/Phim tài liệu/Khoa học và tương lai/Through The Wormhole.jpg",
    "posterHorizontal": "/DanhMuc/Phim tài liệu/Khoa học và tương lai/Through The Wormhole _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Phim tài liệu/Khoa học và tương lai/Through The Wormhole _ ngang.jpg",
    "year": "2015",
    "duration": "1h 11m",
    "age": "P",
    "quality": "Full HD",
    "rating": "4.7/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim tài liệu, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Hành động"
    ],
    "category": "phim-tai-lieu",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_74",
    "title": "Unknown Killer Robots",
    "posterVertical": "/DanhMuc/Phim tài liệu/Khoa học và tương lai/Unknown Killer Robots.jpg",
    "posterHorizontal": "/DanhMuc/Phim tài liệu/Khoa học và tương lai/Unknown Killer Robots _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Phim tài liệu/Khoa học và tương lai/Unknown Killer Robots _ ngang.jpg",
    "year": "2012",
    "duration": "2h 52m",
    "age": "T16",
    "quality": "2K",
    "rating": "4.8/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim tài liệu, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Hành động",
      "Kinh dị"
    ],
    "category": "phim-tai-lieu",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_75",
    "title": "Chasing Coral",
    "posterVertical": "/DanhMuc/Phim tài liệu/Khám phá thế giới/Chasing Coral.jpg",
    "posterHorizontal": "/DanhMuc/Phim tài liệu/Khám phá thế giới/Chasing Coral _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Phim tài liệu/Khám phá thế giới/Chasing Coral _ ngang.jpg",
    "year": "2014",
    "duration": "1h 14m",
    "age": "T16",
    "quality": "2K",
    "rating": "4.6/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim tài liệu, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Gia đình"
    ],
    "category": "phim-tai-lieu",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_76",
    "title": "Chasing Ice",
    "posterVertical": "/DanhMuc/Phim tài liệu/Poster/Chasing Ice.jpg",
    "posterHorizontal": "/DanhMuc/Phim tài liệu/Poster/Chasing Ice _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Phim tài liệu/Poster/Chasing Ice _ ngang.jpg",
    "year": "2013",
    "duration": "2h 46m",
    "age": "T16",
    "quality": "2K",
    "rating": "4.4/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim tài liệu, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Viễn tưởng",
      "Hành động"
    ],
    "category": "phim-tai-lieu",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_77",
    "title": "Life On Our Planet",
    "posterVertical": "/DanhMuc/Phim tài liệu/Khám phá thế giới/Life On Our Planet.jpg",
    "posterHorizontal": "/DanhMuc/Phim tài liệu/Khám phá thế giới/Life On Our Planet _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Phim tài liệu/Khám phá thế giới/Life On Our Planet _ ngang.jpg",
    "year": "2012",
    "duration": "2h 24m",
    "age": "T13",
    "quality": "Full HD",
    "rating": "4.6/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim tài liệu, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Hài hước",
      "Gia đình"
    ],
    "category": "phim-tai-lieu",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_78",
    "title": "Our Planet",
    "posterVertical": "/DanhMuc/Phim tài liệu/Khám phá thế giới/Our Planet.jpg",
    "posterHorizontal": "/DanhMuc/Phim tài liệu/Khám phá thế giới/Our Planet _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Phim tài liệu/Khám phá thế giới/Our Planet _ ngang.jpg",
    "year": "2023",
    "duration": "2h 31m",
    "age": "K",
    "quality": "Full HD",
    "rating": "3.8/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim tài liệu, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Lịch sử",
      "Hoạt hình",
      "Hành động"
    ],
    "category": "phim-tai-lieu",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_79",
    "title": "Planet Earth",
    "posterVertical": "/DanhMuc/Phim tài liệu/Khám phá thế giới/Planet Earth.jpg",
    "posterHorizontal": "/DanhMuc/Phim tài liệu/Khám phá thế giới/Planet Earth _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Phim tài liệu/Khám phá thế giới/Planet Earth _ ngang.jpg",
    "year": "2014",
    "duration": "1h 33m",
    "age": "T18",
    "quality": "Full HD",
    "rating": "4.3/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim tài liệu, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Hài hước"
    ],
    "category": "phim-tai-lieu",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_80",
    "title": "Secret Of The Whales",
    "posterVertical": "/DanhMuc/Phim tài liệu/Khám phá thế giới/Secret Of The Whales.jpg",
    "posterHorizontal": "/DanhMuc/Phim tài liệu/Khám phá thế giới/Secret Of The Whales _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Phim tài liệu/Khám phá thế giới/Secret Of The Whales _ ngang.jpg",
    "year": "2023",
    "duration": "1h 27m",
    "age": "K",
    "quality": "Full HD",
    "rating": "4.5/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim tài liệu, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Lãng mạn"
    ],
    "category": "phim-tai-lieu",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_81",
    "title": "Beckham",
    "posterVertical": "/DanhMuc/Phim tài liệu/Những câu chuyện thực tế/Beckham.jpg",
    "posterHorizontal": "/DanhMuc/Phim tài liệu/Những câu chuyện thực tế/Beckham _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Phim tài liệu/Những câu chuyện thực tế/Beckham _ ngang.jpg",
    "year": "2012",
    "duration": "2h 10m",
    "age": "P",
    "quality": "Full HD",
    "rating": "4.6/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim tài liệu, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Hành động",
      "Viễn tưởng",
      "Hài hước"
    ],
    "category": "phim-tai-lieu",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_82",
    "title": "Diego Maradona",
    "posterVertical": "/DanhMuc/Phim tài liệu/Những câu chuyện thực tế/Diego Maradona.jpg",
    "posterHorizontal": "/DanhMuc/Phim tài liệu/Những câu chuyện thực tế/Diego Maradona _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Phim tài liệu/Những câu chuyện thực tế/Diego Maradona _ ngang.jpg",
    "year": "2024",
    "duration": "1h 33m",
    "age": "T18",
    "quality": "2K",
    "rating": "4.3/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim tài liệu, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Bí ẩn",
      "Kinh dị",
      "Hoạt hình"
    ],
    "category": "phim-tai-lieu",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_83",
    "title": "Forrest Gump",
    "posterVertical": "/DanhMuc/Trang chủ/Phim cũ mà chất/Forrest Gump.jpg",
    "posterHorizontal": "/DanhMuc/Trang chủ/Phim cũ mà chất/Forrest Gump _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Trang chủ/Phim cũ mà chất/Forrest Gump _ ngang.jpg",
    "year": "2014",
    "duration": "1h 57m",
    "age": "T13",
    "quality": "2K",
    "rating": "4.9/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim tài liệu, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Hài hước",
      "Kinh dị",
      "Tài liệu"
    ],
    "category": "phim-tai-lieu",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_84",
    "title": "Pele",
    "posterVertical": "/DanhMuc/Phim tài liệu/Những câu chuyện thực tế/Pele.jpg",
    "posterHorizontal": "/DanhMuc/Phim tài liệu/Những câu chuyện thực tế/Pele _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Phim tài liệu/Những câu chuyện thực tế/Pele _ ngang.jpg",
    "year": "2014",
    "duration": "2h 41m",
    "age": "T16",
    "quality": "2K",
    "rating": "5.0/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim tài liệu, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Kinh dị",
      "Gia đình"
    ],
    "category": "phim-tai-lieu",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_85",
    "title": "The Last Dance",
    "posterVertical": "/DanhMuc/Phim tài liệu/Poster/The Last Dance.jpg",
    "posterHorizontal": "/DanhMuc/Phim tài liệu/Poster/The Last Dance _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Phim tài liệu/Poster/The Last Dance _ ngang.jpg",
    "year": "2012",
    "duration": "1h 38m",
    "age": "T18",
    "quality": "Full HD",
    "rating": "5.0/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim tài liệu, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Bí ẩn"
    ],
    "category": "phim-tai-lieu",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_86",
    "title": "The Pursuit Of Happyness",
    "posterVertical": "/DanhMuc/Phim tài liệu/Những câu chuyện thực tế/The Pursuit Of Happyness.jpg",
    "posterHorizontal": "/DanhMuc/Phim tài liệu/Những câu chuyện thực tế/The Pursuit Of Happyness _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Phim tài liệu/Những câu chuyện thực tế/The Pursuit Of Happyness _ ngang.jpg",
    "year": "2017",
    "duration": "2h 24m",
    "age": "T16",
    "quality": "Full HD",
    "rating": "3.6/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim tài liệu, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Hoạt hình",
      "Gia đình",
      "Lịch sử"
    ],
    "category": "phim-tai-lieu",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_87",
    "title": "American Psycho",
    "posterVertical": "/DanhMuc/Phim điện ảnh/Cổ điển tôn trọng/American Psycho.jpg",
    "posterHorizontal": "/DanhMuc/Phim điện ảnh/Cổ điển tôn trọng/American Psycho _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Phim điện ảnh/Cổ điển tôn trọng/American Psycho _ ngang.jpg",
    "year": "2019",
    "duration": "2h 30m",
    "age": "T16",
    "quality": "Full HD",
    "rating": "4.6/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Hoạt hình"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_88",
    "title": "Dark Knight 2008",
    "posterVertical": "/DanhMuc/Phim điện ảnh/Poster/Dark Knight 2008.jpg",
    "posterHorizontal": "/DanhMuc/Phim điện ảnh/Poster/Dark Knight 2008 _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Phim điện ảnh/Poster/Dark Knight 2008 _ ngang.jpg",
    "year": "2019",
    "duration": "1h 45m",
    "age": "T18",
    "quality": "Full HD",
    "rating": "4.9/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Hành động",
      "Viễn tưởng"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_89",
    "title": "Fight Club",
    "posterVertical": "/DanhMuc/Trang chủ/Tiếp tục xem/Fight Club.jpg",
    "posterHorizontal": "/DanhMuc/Trang chủ/Tiếp tục xem/Fight Club _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Trang chủ/Tiếp tục xem/Fight Club _ ngang.jpg",
    "year": "2018",
    "duration": "1h 10m",
    "age": "T13",
    "quality": "Full HD",
    "rating": "4.4/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Hành động"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_90",
    "title": "Interstellar",
    "posterVertical": "/DanhMuc/Trang chủ/Top 5/Interstellar.jpg",
    "posterHorizontal": "/DanhMuc/Trang chủ/Top 5/Interstellar _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Trang chủ/Top 5/Interstellar _ ngang.jpg",
    "year": "2015",
    "duration": "2h 10m",
    "age": "T18",
    "quality": "2K",
    "rating": "3.8/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Hài hước",
      "Kinh dị",
      "Lịch sử"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_91",
    "title": "The God Father",
    "posterVertical": "/DanhMuc/Trang chủ/Phim cũ mà chất/The God Father.jpg",
    "posterHorizontal": "/DanhMuc/Trang chủ/Phim cũ mà chất/The God Father _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Trang chủ/Phim cũ mà chất/The God Father _ ngang.jpg",
    "year": "2016",
    "duration": "1h 21m",
    "age": "T18",
    "quality": "2K",
    "rating": "4.7/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Viễn tưởng",
      "Tài liệu"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_92",
    "title": "Titannic",
    "posterVertical": "/DanhMuc/Phim điện ảnh/Cổ điển tôn trọng/Titannic.jpg",
    "posterHorizontal": "/DanhMuc/Phim điện ảnh/Cổ điển tôn trọng/Titannic _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Phim điện ảnh/Cổ điển tôn trọng/Titannic _ ngang.jpg",
    "year": "2016",
    "duration": "1h 20m",
    "age": "T13",
    "quality": "2K",
    "rating": "4.6/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Viễn tưởng"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_93",
    "title": "Avatar",
    "posterVertical": "/DanhMuc/Phim điện ảnh/Poster/Avatar.jpg",
    "posterHorizontal": "/DanhMuc/Phim điện ảnh/Poster/Avatar _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Phim điện ảnh/Poster/Avatar _ ngang.jpg",
    "year": "2013",
    "duration": "1h 11m",
    "age": "K",
    "quality": "2K",
    "rating": "5.0/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Lãng mạn",
      "Viễn tưởng",
      "Tài liệu"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_94",
    "title": "Avengers Doomdays",
    "posterVertical": "/DanhMuc/Phim điện ảnh/Hot Hit/Avengers Doomdays.jpg",
    "posterHorizontal": "/DanhMuc/Phim điện ảnh/Hot Hit/Avengers Doomdays _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Phim điện ảnh/Hot Hit/Avengers Doomdays _ ngang.jpg",
    "year": "2012",
    "duration": "2h 14m",
    "age": "T18",
    "quality": "Full HD",
    "rating": "4.1/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Gia đình",
      "Hành động",
      "Hoạt hình"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_95",
    "title": "Deadpool & Wolverine",
    "posterVertical": "/DanhMuc/Phim điện ảnh/Hot Hit/Deadpool & Wolverine.jpg",
    "posterHorizontal": "/DanhMuc/Phim điện ảnh/Hot Hit/Deadpool & Wolverine _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Phim điện ảnh/Hot Hit/Deadpool & Wolverine _ ngang.jpg",
    "year": "2014",
    "duration": "2h 26m",
    "age": "K",
    "quality": "2K",
    "rating": "4.9/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Hoạt hình",
      "Gia đình"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_96",
    "title": "Dune 2",
    "posterVertical": "/DanhMuc/Trang chủ/Đề xuất cho bạn/Dune 2.jpg",
    "posterHorizontal": "/DanhMuc/Trang chủ/Đề xuất cho bạn/Dune 2 _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Trang chủ/Đề xuất cho bạn/Dune 2 _ ngang.jpg",
    "year": "2014",
    "duration": "2h 25m",
    "age": "P",
    "quality": "2K",
    "rating": "4.2/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Hành động"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_97",
    "title": "Nhiệm Vụ Bất Khả Thi",
    "posterVertical": "/DanhMuc/Trang chủ/Hành động và phiêu lưu/Nhiệm Vụ Bất Khả Thi.jpg",
    "posterHorizontal": "/DanhMuc/Trang chủ/Hành động và phiêu lưu/Nhiệm Vụ Bất Khả Thi _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Trang chủ/Hành động và phiêu lưu/Nhiệm Vụ Bất Khả Thi _ ngang.jpg",
    "year": "2010",
    "duration": "2h 58m",
    "age": "P",
    "quality": "Full HD",
    "rating": "4.2/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Kinh dị",
      "Hoạt hình",
      "Hành động"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_98",
    "title": "Bố Già",
    "posterVertical": "/DanhMuc/Trang chủ/Phim chiếu rạp Việt Nam/Bố Già.jpg",
    "posterHorizontal": "/DanhMuc/Trang chủ/Phim chiếu rạp Việt Nam/Bố Già _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Trang chủ/Phim chiếu rạp Việt Nam/Bố Già _ ngang.jpg",
    "year": "2013",
    "duration": "1h 30m",
    "age": "K",
    "quality": "Full HD",
    "rating": "3.7/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Hành động"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_99",
    "title": "Frankenstein",
    "posterVertical": "/DanhMuc/Phim điện ảnh/Tuyệt tác Oscar/Frankenstein.jpg",
    "posterHorizontal": "/DanhMuc/Phim điện ảnh/Tuyệt tác Oscar/Frankenstein _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Phim điện ảnh/Tuyệt tác Oscar/Frankenstein _ ngang.jpg",
    "year": "2017",
    "duration": "1h 36m",
    "age": "T13",
    "quality": "Full HD",
    "rating": "4.7/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Hoạt hình",
      "Hành động",
      "Viễn tưởng"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_100",
    "title": "Joker",
    "posterVertical": "/DanhMuc/Phim điện ảnh/Tinh hoa hollywood/Joker.jpg",
    "posterHorizontal": "/DanhMuc/Phim điện ảnh/Tinh hoa hollywood/Joker _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Phim điện ảnh/Tinh hoa hollywood/Joker _ ngang.jpg",
    "year": "2019",
    "duration": "2h 10m",
    "age": "K",
    "quality": "2K",
    "rating": "3.5/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Gia đình"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_101",
    "title": "3 Chàng Ngốc",
    "posterVertical": "/DanhMuc/Phim điện ảnh/Thư giãn cuối tuần/3 Chàng Ngốc.jpg",
    "posterHorizontal": "/DanhMuc/Phim điện ảnh/Thư giãn cuối tuần/3 Chàng Ngốc _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Phim điện ảnh/Thư giãn cuối tuần/3 Chàng Ngốc _ ngang.jpg",
    "year": "2014",
    "duration": "1h 36m",
    "age": "P",
    "quality": "Full HD",
    "rating": "4.2/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Hành động"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_102",
    "title": "Jumanji: Welcome To The Jungle",
    "posterVertical": "/DanhMuc/Phim điện ảnh/Thư giãn cuối tuần/Jumanji-Welcome To The Jungle.jpg",
    "posterHorizontal": "/DanhMuc/Phim điện ảnh/Thư giãn cuối tuần/Jumanji-Welcome To The Jungle _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Phim điện ảnh/Thư giãn cuối tuần/Jumanji-Welcome To The Jungle _ ngang.jpg",
    "year": "2019",
    "duration": "1h 21m",
    "age": "P",
    "quality": "2K",
    "rating": "4.6/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Gia đình"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_103",
    "title": "Nghề Siêu Khó",
    "posterVertical": "/DanhMuc/Phim điện ảnh/Thư giãn cuối tuần/Nghề Siêu Khó.jpg",
    "posterHorizontal": "/DanhMuc/Phim điện ảnh/Thư giãn cuối tuần/Nghề Siêu Khó _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Phim điện ảnh/Thư giãn cuối tuần/Nghề Siêu Khó _ ngang.jpg",
    "year": "2024",
    "duration": "2h 54m",
    "age": "T13",
    "quality": "Full HD",
    "rating": "3.9/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Hành động"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_104",
    "title": "Vua Cờ Bạc: Đỗ Thánh 2",
    "posterVertical": "/DanhMuc/Phim điện ảnh/Thư giãn cuối tuần/Vua Cờ Bạc-Đỗ Thánh 2.jpg",
    "posterHorizontal": "/DanhMuc/Phim điện ảnh/Thư giãn cuối tuần/Vua Cờ Bạc-Đỗ Thánh 2 _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Phim điện ảnh/Thư giãn cuối tuần/Vua Cờ Bạc-Đỗ Thánh 2 _ ngang.jpg",
    "year": "2010",
    "duration": "1h 15m",
    "age": "T18",
    "quality": "2K",
    "rating": "4.1/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Viễn tưởng",
      "Hoạt hình"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_105",
    "title": "Ở Nhà Một Mình",
    "posterVertical": "/DanhMuc/Phim điện ảnh/Thư giãn cuối tuần/Ở Nhà Một Mình.jpg",
    "posterHorizontal": "/DanhMuc/Phim điện ảnh/Thư giãn cuối tuần/Ở Nhà Một Mình _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Phim điện ảnh/Thư giãn cuối tuần/Ở Nhà Một Mình _ ngang.jpg",
    "year": "2013",
    "duration": "2h 53m",
    "age": "T16",
    "quality": "2K",
    "rating": "3.5/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Hành động",
      "Lãng mạn",
      "Bí ẩn"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_106",
    "title": "Avenger: Trận Chiến Vô Cực",
    "posterVertical": "/DanhMuc/Phim điện ảnh/Tinh hoa hollywood/Avenger-Trận Chiến Vô Cực.jpg",
    "posterHorizontal": "/DanhMuc/Phim điện ảnh/Tinh hoa hollywood/Avenger-Trận Chiến Vô Cực _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Phim điện ảnh/Tinh hoa hollywood/Avenger-Trận Chiến Vô Cực _ ngang.jpg",
    "year": "2019",
    "duration": "2h 25m",
    "age": "T16",
    "quality": "2K",
    "rating": "3.6/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Hành động"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_107",
    "title": "Avengers: Trận Chiến Cuối Cùng",
    "posterVertical": "/DanhMuc/Phim điện ảnh/Tinh hoa hollywood/Avengers-Trận Chiến Cuối Cùng.jpg",
    "posterHorizontal": "/DanhMuc/Phim điện ảnh/Tinh hoa hollywood/Avengers-Trận Chiến Cuối Cùng _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Phim điện ảnh/Tinh hoa hollywood/Avengers-Trận Chiến Cuối Cùng _ ngang.jpg",
    "year": "2023",
    "duration": "2h 33m",
    "age": "T16",
    "quality": "Full HD",
    "rating": "4.0/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Kinh dị",
      "Viễn tưởng"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_108",
    "title": "Chúa Tế Những Chiếc Nhẫn",
    "posterVertical": "/DanhMuc/Phim điện ảnh/Tinh hoa hollywood/Chúa Tế Những Chiếc Nhẫn.jpg",
    "posterHorizontal": "/DanhMuc/Phim điện ảnh/Tinh hoa hollywood/Chúa Tế Những Chiếc Nhẫn _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Phim điện ảnh/Tinh hoa hollywood/Chúa Tế Những Chiếc Nhẫn _ ngang.jpg",
    "year": "2015",
    "duration": "2h 59m",
    "age": "T16",
    "quality": "Full HD",
    "rating": "4.8/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Hài hước"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_109",
    "title": "Fast & Furious: The Fast Saga",
    "posterVertical": "/DanhMuc/Phim điện ảnh/Tinh hoa hollywood/Fast & Furious-The Fast Saga.jpg",
    "posterHorizontal": "/DanhMuc/Phim điện ảnh/Tinh hoa hollywood/Fast & Furious-The Fast Saga _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Phim điện ảnh/Tinh hoa hollywood/Fast & Furious-The Fast Saga _ ngang.jpg",
    "year": "2018",
    "duration": "2h 57m",
    "age": "T13",
    "quality": "Full HD",
    "rating": "3.6/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Tài liệu"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_110",
    "title": "Star Wars 3",
    "posterVertical": "/DanhMuc/Phim điện ảnh/Tinh hoa hollywood/Star Wars 3.jpg",
    "posterHorizontal": "/DanhMuc/Phim điện ảnh/Tinh hoa hollywood/Star Wars 3 _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Phim điện ảnh/Tinh hoa hollywood/Star Wars 3 _ ngang.jpg",
    "year": "2020",
    "duration": "2h 10m",
    "age": "T16",
    "quality": "Full HD",
    "rating": "4.7/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Tài liệu"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_111",
    "title": "Everything Every Where All At Once",
    "posterVertical": "/DanhMuc/Phim điện ảnh/Tuyệt tác Oscar/Everything Every Where All At Once.jpg",
    "posterHorizontal": "/DanhMuc/Phim điện ảnh/Tuyệt tác Oscar/Everything Every Where All At Once _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Phim điện ảnh/Tuyệt tác Oscar/Everything Every Where All At Once _ ngang.jpg",
    "year": "2018",
    "duration": "2h 11m",
    "age": "P",
    "quality": "Full HD",
    "rating": "4.4/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Kinh dị"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_112",
    "title": "F1 The Movie",
    "posterVertical": "/DanhMuc/Trang chủ/Đề xuất cho bạn/F1 The Movie.jpg",
    "posterHorizontal": "/DanhMuc/Trang chủ/Đề xuất cho bạn/F1 The Movie _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Trang chủ/Đề xuất cho bạn/F1 The Movie _ ngang.jpg",
    "year": "2010",
    "duration": "2h 47m",
    "age": "K",
    "quality": "Full HD",
    "rating": "4.8/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Hành động",
      "Viễn tưởng",
      "Lịch sử"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_113",
    "title": "Oppenheimer",
    "posterVertical": "/DanhMuc/Trang chủ/Tiếp tục xem/Oppenheimer.jpg",
    "posterHorizontal": "/DanhMuc/Trang chủ/Tiếp tục xem/Oppenheimer _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Trang chủ/Tiếp tục xem/Oppenheimer _ ngang.jpg",
    "year": "2021",
    "duration": "1h 17m",
    "age": "T16",
    "quality": "Full HD",
    "rating": "4.4/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Gia đình",
      "Lãng mạn"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_114",
    "title": "Parasite",
    "posterVertical": "/DanhMuc/Phim điện ảnh/Tuyệt tác Oscar/Parasite.jpg",
    "posterHorizontal": "/DanhMuc/Phim điện ảnh/Tuyệt tác Oscar/Parasite _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Phim điện ảnh/Tuyệt tác Oscar/Parasite _ ngang.jpg",
    "year": "2015",
    "duration": "2h 59m",
    "age": "P",
    "quality": "2K",
    "rating": "3.7/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Viễn tưởng"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_115",
    "title": "Sinner",
    "posterVertical": "/DanhMuc/Trang chủ/Phim dành giải thưởng/Sinner.jpg",
    "posterHorizontal": "/DanhMuc/Trang chủ/Phim dành giải thưởng/Sinner _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Trang chủ/Phim dành giải thưởng/Sinner _ ngang.jpg",
    "year": "2010",
    "duration": "2h 17m",
    "age": "T13",
    "quality": "Full HD",
    "rating": "3.8/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Kinh dị",
      "Hành động",
      "Viễn tưởng"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_116",
    "title": "Encanto",
    "posterVertical": "/DanhMuc/Trang chủ/Cả nhà cùng xem/Encanto.jpg",
    "posterHorizontal": "/DanhMuc/Trang chủ/Cả nhà cùng xem/Encanto _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Trang chủ/Cả nhà cùng xem/Encanto _ ngang.jpg",
    "year": "2021",
    "duration": "1h 52m",
    "age": "T18",
    "quality": "Full HD",
    "rating": "4.1/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Hành động",
      "Hoạt hình"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_117",
    "title": "Finding Nemo",
    "posterVertical": "/DanhMuc/Trang chủ/Cả nhà cùng xem/Finding Nemo.jpg",
    "posterHorizontal": "/DanhMuc/Trang chủ/Cả nhà cùng xem/Finding Nemo _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Trang chủ/Cả nhà cùng xem/Finding Nemo _ ngang.jpg",
    "year": "2016",
    "duration": "2h 20m",
    "age": "P",
    "quality": "Full HD",
    "rating": "3.7/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Gia đình"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_118",
    "title": "One Piece Live Action",
    "posterVertical": "/DanhMuc/Trang chủ/Cả nhà cùng xem/One Piece Live Action.jpg",
    "posterHorizontal": "/DanhMuc/Trang chủ/Cả nhà cùng xem/One Piece Live Action _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Trang chủ/Cả nhà cùng xem/One Piece Live Action _ ngang.jpg",
    "year": "2013",
    "duration": "2h 28m",
    "age": "T18",
    "quality": "2K",
    "rating": "3.9/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Lịch sử",
      "Kinh dị",
      "Lãng mạn"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_119",
    "title": "Soul",
    "posterVertical": "/DanhMuc/Trang chủ/Cả nhà cùng xem/Soul.jpg",
    "posterHorizontal": "/DanhMuc/Trang chủ/Cả nhà cùng xem/Soul _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Trang chủ/Cả nhà cùng xem/Soul _ ngang.jpg",
    "year": "2011",
    "duration": "2h 17m",
    "age": "T16",
    "quality": "Full HD",
    "rating": "3.7/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Hài hước"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_120",
    "title": "The Lion King",
    "posterVertical": "/DanhMuc/Trang chủ/Cả nhà cùng xem/The Lion King.jpg",
    "posterHorizontal": "/DanhMuc/Trang chủ/Cả nhà cùng xem/The Lion King _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Trang chủ/Cả nhà cùng xem/The Lion King _ ngang.jpg",
    "year": "2023",
    "duration": "2h 57m",
    "age": "T13",
    "quality": "2K",
    "rating": "4.1/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Lãng mạn"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_121",
    "title": "The Parent Trap",
    "posterVertical": "/DanhMuc/Trang chủ/Cả nhà cùng xem/The Parent Trap.jpg",
    "posterHorizontal": "/DanhMuc/Trang chủ/Cả nhà cùng xem/The Parent Trap _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Trang chủ/Cả nhà cùng xem/The Parent Trap _ ngang.jpg",
    "year": "2016",
    "duration": "1h 37m",
    "age": "P",
    "quality": "2K",
    "rating": "3.8/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Hành động",
      "Lãng mạn"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_122",
    "title": "Gladiator",
    "posterVertical": "/DanhMuc/Trang chủ/Hành động và phiêu lưu/Gladiator.jpg",
    "posterHorizontal": "/DanhMuc/Trang chủ/Hành động và phiêu lưu/Gladiator _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Trang chủ/Hành động và phiêu lưu/Gladiator _ ngang.jpg",
    "year": "2019",
    "duration": "2h 14m",
    "age": "T13",
    "quality": "Full HD",
    "rating": "4.9/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Hoạt hình",
      "Bí ẩn",
      "Kinh dị"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_123",
    "title": "Indiana Jones",
    "posterVertical": "/DanhMuc/Trang chủ/Hành động và phiêu lưu/Indiana Jones.jpg",
    "posterHorizontal": "/DanhMuc/Trang chủ/Hành động và phiêu lưu/Indiana Jones _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Trang chủ/Hành động và phiêu lưu/Indiana Jones _ ngang.jpg",
    "year": "2018",
    "duration": "2h 58m",
    "age": "T18",
    "quality": "Full HD",
    "rating": "4.6/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Hành động",
      "Viễn tưởng"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_124",
    "title": "John Wick 4",
    "posterVertical": "/DanhMuc/Trang chủ/Hành động và phiêu lưu/John Wick 4.jpg",
    "posterHorizontal": "/DanhMuc/Trang chủ/Hành động và phiêu lưu/John Wick 4 _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Trang chủ/Hành động và phiêu lưu/John Wick 4 _ ngang.jpg",
    "year": "2012",
    "duration": "2h 52m",
    "age": "T16",
    "quality": "Full HD",
    "rating": "5.0/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Viễn tưởng"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_125",
    "title": "The Dark Knight",
    "posterVertical": "/DanhMuc/Trang chủ/Hành động và phiêu lưu/The Dark Knight.jpg",
    "posterHorizontal": "/DanhMuc/Trang chủ/Hành động và phiêu lưu/The Dark Knight _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Trang chủ/Hành động và phiêu lưu/The Dark Knight _ ngang.jpg",
    "year": "2020",
    "duration": "2h 30m",
    "age": "T16",
    "quality": "2K",
    "rating": "4.4/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Kinh dị"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_126",
    "title": "TOPGUN: Maverick",
    "posterVertical": "/DanhMuc/Trang chủ/Hành động và phiêu lưu/TOPGUN-Maverick.jpg",
    "posterHorizontal": "/DanhMuc/Trang chủ/Hành động và phiêu lưu/TOPGUN-Maverick _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Trang chủ/Hành động và phiêu lưu/TOPGUN-Maverick _ ngang.jpg",
    "year": "2010",
    "duration": "2h 38m",
    "age": "T13",
    "quality": "2K",
    "rating": "4.5/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Gia đình"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_127",
    "title": "A Quiet Place",
    "posterVertical": "/DanhMuc/Trang chủ/Kinh dị Âu Mỹ/A Quiet Place.jpg",
    "posterHorizontal": "/DanhMuc/Trang chủ/Kinh dị Âu Mỹ/A Quiet Place _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Trang chủ/Kinh dị Âu Mỹ/A Quiet Place _ ngang.jpg",
    "year": "2015",
    "duration": "1h 44m",
    "age": "K",
    "quality": "Full HD",
    "rating": "3.6/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Gia đình",
      "Hành động"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_128",
    "title": "IT: Chapter2",
    "posterVertical": "/DanhMuc/Trang chủ/Kinh dị Âu Mỹ/IT-Chapter2.jpg",
    "posterHorizontal": "/DanhMuc/Trang chủ/Kinh dị Âu Mỹ/IT-Chapter2 _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Trang chủ/Kinh dị Âu Mỹ/IT-Chapter2 _ ngang.jpg",
    "year": "2013",
    "duration": "1h 18m",
    "age": "T18",
    "quality": "Full HD",
    "rating": "4.6/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Hài hước"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_129",
    "title": "Jig Saw",
    "posterVertical": "/DanhMuc/Trang chủ/Kinh dị Âu Mỹ/Jig Saw.jpg",
    "posterHorizontal": "/DanhMuc/Trang chủ/Kinh dị Âu Mỹ/Jig Saw _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Trang chủ/Kinh dị Âu Mỹ/Jig Saw _ ngang.jpg",
    "year": "2023",
    "duration": "2h 15m",
    "age": "T18",
    "quality": "2K",
    "rating": "3.9/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Hoạt hình"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_130",
    "title": "The Cabin In The Woods",
    "posterVertical": "/DanhMuc/Trang chủ/Kinh dị Âu Mỹ/The Cabin In The Woods.jpg",
    "posterHorizontal": "/DanhMuc/Trang chủ/Kinh dị Âu Mỹ/The Cabin In The Woods _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Trang chủ/Kinh dị Âu Mỹ/The Cabin In The Woods _ ngang.jpg",
    "year": "2013",
    "duration": "2h 56m",
    "age": "T18",
    "quality": "2K",
    "rating": "3.7/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Gia đình",
      "Tài liệu",
      "Bí ẩn"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_131",
    "title": "Thứ 6 Ngày 13",
    "posterVertical": "/DanhMuc/Trang chủ/Kinh dị Âu Mỹ/Thứ 6 Ngày 13.jpg",
    "posterHorizontal": "/DanhMuc/Trang chủ/Kinh dị Âu Mỹ/Thứ 6 Ngày 13 _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Trang chủ/Kinh dị Âu Mỹ/Thứ 6 Ngày 13 _ ngang.jpg",
    "year": "2012",
    "duration": "2h 18m",
    "age": "T18",
    "quality": "Full HD",
    "rating": "3.9/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Kinh dị",
      "Hoạt hình",
      "Viễn tưởng"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_132",
    "title": "Weapons",
    "posterVertical": "/DanhMuc/Trang chủ/Kinh dị Âu Mỹ/Weapons.jpg",
    "posterHorizontal": "/DanhMuc/Trang chủ/Kinh dị Âu Mỹ/Weapons _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Trang chủ/Kinh dị Âu Mỹ/Weapons _ ngang.jpg",
    "year": "2019",
    "duration": "2h 31m",
    "age": "T13",
    "quality": "2K",
    "rating": "4.7/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Viễn tưởng",
      "Hài hước",
      "Gia đình"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_133",
    "title": "Hạ Cánh Nơi Anh",
    "posterVertical": "/DanhMuc/Trang chủ/Lãng mạn Hàn Quốc/Hạ Cánh Nơi Anh.jpg",
    "posterHorizontal": "/DanhMuc/Trang chủ/Lãng mạn Hàn Quốc/Hạ Cánh Nơi Anh _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Trang chủ/Lãng mạn Hàn Quốc/Hạ Cánh Nơi Anh _ ngang.jpg",
    "year": "2010",
    "duration": "2h 15m",
    "age": "T18",
    "quality": "2K",
    "rating": "5.0/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Hài hước",
      "Kinh dị",
      "Tài liệu"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_134",
    "title": "Khi Cuộc Đời Cho Bạn Quả Quýt",
    "posterVertical": "/DanhMuc/Trang chủ/Poster/Khi Cuộc Đời Cho Bạn Quả Quýt.jpg",
    "posterHorizontal": "/DanhMuc/Trang chủ/Poster/Khi Cuộc Đời Cho Bạn Quả Quýt _ ngang.png",
    "backdropUrl": "/DanhMuc/Trang chủ/Poster/Khi Cuộc Đời Cho Bạn Quả Quýt _ ngang.png",
    "year": "2010",
    "duration": "1h 16m",
    "age": "T16",
    "quality": "2K",
    "rating": "4.7/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Viễn tưởng"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_135",
    "title": "Love Next Door",
    "posterVertical": "/DanhMuc/Trang chủ/Lãng mạn Hàn Quốc/Love Next Door.jpg",
    "posterHorizontal": "/DanhMuc/Trang chủ/Lãng mạn Hàn Quốc/Love Next Door _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Trang chủ/Lãng mạn Hàn Quốc/Love Next Door _ ngang.jpg",
    "year": "2023",
    "duration": "1h 40m",
    "age": "P",
    "quality": "2K",
    "rating": "3.6/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Viễn tưởng",
      "Hành động"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_136",
    "title": "Lovely Runner",
    "posterVertical": "/DanhMuc/Trang chủ/Lãng mạn Hàn Quốc/Lovely Runner.jpg",
    "posterHorizontal": "/DanhMuc/Trang chủ/Lãng mạn Hàn Quốc/Lovely Runner _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Trang chủ/Lãng mạn Hàn Quốc/Lovely Runner _ ngang.jpg",
    "year": "2024",
    "duration": "1h 47m",
    "age": "T16",
    "quality": "2K",
    "rating": "4.4/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Hài hước"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_137",
    "title": "Queen Of Tears",
    "posterVertical": "/DanhMuc/Trang chủ/Poster/Queen Of Tears.jpg",
    "posterHorizontal": "/DanhMuc/Trang chủ/Poster/Queen Of Tears _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Trang chủ/Poster/Queen Of Tears _ ngang.jpg",
    "year": "2019",
    "duration": "1h 27m",
    "age": "P",
    "quality": "2K",
    "rating": "4.5/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Hoạt hình",
      "Viễn tưởng",
      "Lãng mạn"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_138",
    "title": "True Beauty",
    "posterVertical": "/DanhMuc/Trang chủ/Tiếp tục xem/True Beauty.jpg",
    "posterHorizontal": "/DanhMuc/Trang chủ/Tiếp tục xem/True Beauty _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Trang chủ/Tiếp tục xem/True Beauty _ ngang.jpg",
    "year": "2013",
    "duration": "2h 37m",
    "age": "P",
    "quality": "2K",
    "rating": "4.2/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Tài liệu",
      "Gia đình",
      "Lịch sử"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_139",
    "title": "Mai",
    "posterVertical": "/DanhMuc/Trang chủ/Phim chiếu rạp Việt Nam/Mai.jpg",
    "posterHorizontal": "/DanhMuc/Trang chủ/Phim chiếu rạp Việt Nam/Mai _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Trang chủ/Phim chiếu rạp Việt Nam/Mai _ ngang.jpg",
    "year": "2020",
    "duration": "1h 56m",
    "age": "P",
    "quality": "Full HD",
    "rating": "4.3/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Hành động",
      "Hoạt hình",
      "Lịch sử"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_140",
    "title": "Mưa đỏ",
    "posterVertical": "/DanhMuc/Trang chủ/Poster/Mưa đỏ.jpg",
    "posterHorizontal": "/DanhMuc/Trang chủ/Poster/Mưa đỏ _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Trang chủ/Poster/Mưa đỏ _ ngang.jpg",
    "year": "2024",
    "duration": "2h 39m",
    "age": "K",
    "quality": "2K",
    "rating": "4.9/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Bí ẩn",
      "Hoạt hình",
      "Lãng mạn"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_141",
    "title": "Mắt biếc",
    "posterVertical": "/DanhMuc/Trang chủ/Poster/Mắt biếc.jpg",
    "posterHorizontal": "/DanhMuc/Trang chủ/Poster/Mắt biếc _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Trang chủ/Poster/Mắt biếc _ ngang.jpg",
    "year": "2015",
    "duration": "1h 12m",
    "age": "P",
    "quality": "Full HD",
    "rating": "4.4/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Hành động",
      "Viễn tưởng"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_142",
    "title": "Phí Phông",
    "posterVertical": "/DanhMuc/Trang chủ/Phim chiếu rạp Việt Nam/Phí Phông.jpg",
    "posterHorizontal": "/DanhMuc/Trang chủ/Phim chiếu rạp Việt Nam/Phí Phông _ ngang.jpeg",
    "backdropUrl": "/DanhMuc/Trang chủ/Phim chiếu rạp Việt Nam/Phí Phông _ ngang.jpeg",
    "year": "2019",
    "duration": "2h 45m",
    "age": "T18",
    "quality": "2K",
    "rating": "3.6/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Lãng mạn",
      "Kinh dị"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_143",
    "title": "Thỏ ơi",
    "posterVertical": "/DanhMuc/Trang chủ/Phim chiếu rạp Việt Nam/Thỏ ơi _ ngang.jpeg",
    "posterHorizontal": "/DanhMuc/Trang chủ/Phim chiếu rạp Việt Nam/Thỏ ơi _ ngang.jpeg",
    "backdropUrl": "/DanhMuc/Trang chủ/Phim chiếu rạp Việt Nam/Thỏ ơi _ ngang.jpeg",
    "year": "2016",
    "duration": "2h 14m",
    "age": "P",
    "quality": "2K",
    "rating": "4.4/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Lịch sử",
      "Kinh dị"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_144",
    "title": "Thỏ Ơi",
    "posterVertical": "/DanhMuc/Trang chủ/Phim chiếu rạp Việt Nam/Thỏ Ơi.jpg",
    "posterHorizontal": "/DanhMuc/Trang chủ/Phim chiếu rạp Việt Nam/Thỏ Ơi.jpg",
    "backdropUrl": "/DanhMuc/Trang chủ/Phim chiếu rạp Việt Nam/Thỏ Ơi.jpg",
    "year": "2023",
    "duration": "2h 40m",
    "age": "P",
    "quality": "2K",
    "rating": "4.5/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Kinh dị",
      "Bí ẩn"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_145",
    "title": "The Hachiko",
    "posterVertical": "/DanhMuc/Trang chủ/Phim cũ mà chất/The Hachiko.jpg",
    "posterHorizontal": "/DanhMuc/Trang chủ/Phim cũ mà chất/The Hachiko _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Trang chủ/Phim cũ mà chất/The Hachiko _ ngang.jpg",
    "year": "2013",
    "duration": "2h 27m",
    "age": "T18",
    "quality": "2K",
    "rating": "5.0/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Hành động"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_146",
    "title": "The Shawshank Redemption",
    "posterVertical": "/DanhMuc/Trang chủ/Phim cũ mà chất/The Shawshank Redemption.jpg",
    "posterHorizontal": "/DanhMuc/Trang chủ/Phim cũ mà chất/The Shawshank Redemption _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Trang chủ/Phim cũ mà chất/The Shawshank Redemption _ ngang.jpg",
    "year": "2021",
    "duration": "1h 26m",
    "age": "P",
    "quality": "Full HD",
    "rating": "4.7/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Hành động",
      "Tài liệu"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_147",
    "title": "Catch Me If You Can",
    "posterVertical": "/DanhMuc/Trang chủ/Phim dành giải thưởng/Catch Me If You Can.jpg",
    "posterHorizontal": "/DanhMuc/Trang chủ/Phim dành giải thưởng/Catch Me If You Can _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Trang chủ/Phim dành giải thưởng/Catch Me If You Can _ ngang.jpg",
    "year": "2017",
    "duration": "2h 15m",
    "age": "T16",
    "quality": "Full HD",
    "rating": "4.0/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Hài hước",
      "Lãng mạn",
      "Lịch sử"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_148",
    "title": "Spider Man: Into The Spider Verse",
    "posterVertical": "/DanhMuc/Trang chủ/Phim dành giải thưởng/Spider Man-Into The Spider Verse _ ngang.jpg",
    "posterHorizontal": "/DanhMuc/Trang chủ/Phim dành giải thưởng/Spider Man-Into The Spider Verse _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Trang chủ/Phim dành giải thưởng/Spider Man-Into The Spider Verse _ ngang.jpg",
    "year": "2015",
    "duration": "2h 18m",
    "age": "T18",
    "quality": "Full HD",
    "rating": "4.8/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Gia đình",
      "Hành động"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_149",
    "title": "Spider Man: InTo The Spider Verse",
    "posterVertical": "/DanhMuc/Trang chủ/Phim dành giải thưởng/Spider Man-InTo The Spider Verse.jpg",
    "posterHorizontal": "/DanhMuc/Trang chủ/Phim dành giải thưởng/Spider Man-InTo The Spider Verse.jpg",
    "backdropUrl": "/DanhMuc/Trang chủ/Phim dành giải thưởng/Spider Man-InTo The Spider Verse.jpg",
    "year": "2013",
    "duration": "1h 10m",
    "age": "T18",
    "quality": "Full HD",
    "rating": "3.9/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Hoạt hình",
      "Hành động"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_150",
    "title": "The First Slam Dunk",
    "posterVertical": "/DanhMuc/Trang chủ/Phim dành giải thưởng/The First Slam Dunk.jpg",
    "posterHorizontal": "/DanhMuc/Trang chủ/Phim dành giải thưởng/The First Slam Dunk _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Trang chủ/Phim dành giải thưởng/The First Slam Dunk _ ngang.jpg",
    "year": "2023",
    "duration": "2h 51m",
    "age": "K",
    "quality": "Full HD",
    "rating": "4.5/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Viễn tưởng"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_151",
    "title": "Kingdom Of The Planet Of The Apes",
    "posterVertical": "/DanhMuc/Trang chủ/Phim mới cập nhật/Kingdom Of The Planet Of The Apes.jpg",
    "posterHorizontal": "/DanhMuc/Trang chủ/Phim mới cập nhật/Kingdom Of The Planet Of The Apes _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Trang chủ/Phim mới cập nhật/Kingdom Of The Planet Of The Apes _ ngang.jpg",
    "year": "2014",
    "duration": "2h 36m",
    "age": "T16",
    "quality": "2K",
    "rating": "5.0/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Lãng mạn"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_152",
    "title": "The Final Destination: Bloodline",
    "posterVertical": "/DanhMuc/Trang chủ/Phim mới cập nhật/The Final Destination-Bloodline.jpg",
    "posterHorizontal": "/DanhMuc/Trang chủ/Phim mới cập nhật/The Final Destination-Bloodline _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Trang chủ/Phim mới cập nhật/The Final Destination-Bloodline _ ngang.jpg",
    "year": "2021",
    "duration": "1h 19m",
    "age": "T13",
    "quality": "2K",
    "rating": "4.3/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Hài hước",
      "Gia đình"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_153",
    "title": "The Last Of Us",
    "posterVertical": "/DanhMuc/Trang chủ/Phim mới cập nhật/The Last Of Us.jpg",
    "posterHorizontal": "/DanhMuc/Trang chủ/Phim mới cập nhật/The Last Of Us _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Trang chủ/Phim mới cập nhật/The Last Of Us _ ngang.jpg",
    "year": "2023",
    "duration": "1h 10m",
    "age": "T13",
    "quality": "2K",
    "rating": "4.9/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Viễn tưởng",
      "Lịch sử"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_154",
    "title": "From",
    "posterVertical": "/DanhMuc/Trang chủ/Thịnh hành/From.jpg",
    "posterHorizontal": "/DanhMuc/Trang chủ/Thịnh hành/From _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Trang chủ/Thịnh hành/From _ ngang.jpg",
    "year": "2023",
    "duration": "1h 42m",
    "age": "K",
    "quality": "2K",
    "rating": "4.0/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Bí ẩn",
      "Hài hước",
      "Kinh dị"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_155",
    "title": "Quật Mộ Trùng Ma",
    "posterVertical": "/DanhMuc/Trang chủ/Thịnh hành/Quật Mộ Trùng Ma.jpg",
    "posterHorizontal": "/DanhMuc/Trang chủ/Thịnh hành/Quật Mộ Trùng Ma _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Trang chủ/Thịnh hành/Quật Mộ Trùng Ma _ ngang.jpg",
    "year": "2021",
    "duration": "1h 47m",
    "age": "K",
    "quality": "Full HD",
    "rating": "4.4/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Hành động"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_156",
    "title": "The House Maid",
    "posterVertical": "/DanhMuc/Trang chủ/Thịnh hành/The House Maid.jpg",
    "posterHorizontal": "/DanhMuc/Trang chủ/Thịnh hành/The House Maid _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Trang chủ/Thịnh hành/The House Maid _ ngang.jpg",
    "year": "2016",
    "duration": "1h 35m",
    "age": "P",
    "quality": "2K",
    "rating": "3.9/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Hài hước"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_157",
    "title": "The Mummy",
    "posterVertical": "/DanhMuc/Trang chủ/Thịnh hành/The Mummy.jpg",
    "posterHorizontal": "/DanhMuc/Trang chủ/Thịnh hành/The Mummy _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Trang chủ/Thịnh hành/The Mummy _ ngang.jpg",
    "year": "2011",
    "duration": "2h 40m",
    "age": "T16",
    "quality": "Full HD",
    "rating": "4.7/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Bí ẩn",
      "Viễn tưởng"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_158",
    "title": "Game Of Thrones",
    "posterVertical": "/DanhMuc/Trang chủ/Tiếp tục xem/Game Of Thrones.jpg",
    "posterHorizontal": "/DanhMuc/Trang chủ/Tiếp tục xem/Game Of Thrones _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Trang chủ/Tiếp tục xem/Game Of Thrones _ ngang.jpg",
    "year": "2013",
    "duration": "2h 21m",
    "age": "P",
    "quality": "Full HD",
    "rating": "4.5/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Lãng mạn",
      "Hoạt hình",
      "Tài liệu"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_159",
    "title": "La La Land",
    "posterVertical": "/DanhMuc/Trang chủ/Tiếp tục xem/La La Land.jpg",
    "posterHorizontal": "/DanhMuc/Trang chủ/Tiếp tục xem/La La Land _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Trang chủ/Tiếp tục xem/La La Land _ ngang.jpg",
    "year": "2023",
    "duration": "2h 13m",
    "age": "T16",
    "quality": "2K",
    "rating": "4.2/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Kinh dị"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_160",
    "title": "Phineas & Ferb",
    "posterVertical": "/DanhMuc/Trang chủ/Tiếp tục xem/Phineas & Ferb.jpg",
    "posterHorizontal": "/DanhMuc/Trang chủ/Tiếp tục xem/Phineas & Ferb _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Trang chủ/Tiếp tục xem/Phineas & Ferb _ ngang.jpg",
    "year": "2016",
    "duration": "1h 19m",
    "age": "P",
    "quality": "2K",
    "rating": "4.2/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Hành động",
      "Hoạt hình",
      "Viễn tưởng"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_161",
    "title": "Stranger Things: Cậu Bé Mất Tích",
    "posterVertical": "/DanhMuc/Trang chủ/Tiếp tục xem/Stranger Thing-Cậu Bé Mất Tích.jpg",
    "posterHorizontal": "/DanhMuc/Trang chủ/Tiếp tục xem/Stranger Thing-Cậu Bé Mất Tích _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Trang chủ/Tiếp tục xem/Stranger Thing-Cậu Bé Mất Tích _ ngang.jpg",
    "year": "2020",
    "duration": "2h 12m",
    "age": "K",
    "quality": "2K",
    "rating": "4.5/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Tài liệu"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_162",
    "title": "The Walking Dead",
    "posterVertical": "/DanhMuc/Trang chủ/Tiếp tục xem/The Walking Dead.jpg",
    "posterHorizontal": "/DanhMuc/Trang chủ/Tiếp tục xem/The Walking Dead _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Trang chủ/Tiếp tục xem/The Walking Dead _ ngang.jpg",
    "year": "2022",
    "duration": "1h 26m",
    "age": "T18",
    "quality": "2K",
    "rating": "4.3/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Hành động"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_163",
    "title": "Stranger Things 5: Cậu Bé Mất Tích",
    "posterVertical": "/DanhMuc/Trang chủ/Top 5/Stranger Things 5-Cậu Bé Mất Tích.jpg",
    "posterHorizontal": "/DanhMuc/Trang chủ/Top 5/Stranger Things 5-Cậu Bé Mất Tích.jpg",
    "backdropUrl": "/DanhMuc/Trang chủ/Top 5/Stranger Things 5-Cậu Bé Mất Tích.jpg",
    "year": "2010",
    "duration": "1h 57m",
    "age": "T16",
    "quality": "2K",
    "rating": "4.4/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Viễn tưởng",
      "Gia đình"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_164",
    "title": "Avenger: Trận Chiến Cuối Cùng",
    "posterVertical": "/DanhMuc/Trang chủ/Đề xuất cho bạn/Avenger-Trận Chiến Cuối Cùng.jpg",
    "posterHorizontal": "/DanhMuc/Trang chủ/Đề xuất cho bạn/Avenger-Trận Chiến Cuối Cùng _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Trang chủ/Đề xuất cho bạn/Avenger-Trận Chiến Cuối Cùng _ ngang.jpg",
    "year": "2011",
    "duration": "1h 36m",
    "age": "P",
    "quality": "Full HD",
    "rating": "3.6/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Kinh dị",
      "Lãng mạn"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_165",
    "title": "Call Me By Your Name",
    "posterVertical": "/DanhMuc/Trang chủ/Đề xuất cho bạn/Call Me By Your Name.jpg",
    "posterHorizontal": "/DanhMuc/Trang chủ/Đề xuất cho bạn/Call Me By Your Name _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Trang chủ/Đề xuất cho bạn/Call Me By Your Name _ ngang.jpg",
    "year": "2023",
    "duration": "2h 57m",
    "age": "T13",
    "quality": "2K",
    "rating": "3.7/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Gia đình",
      "Bí ẩn",
      "Tài liệu"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_166",
    "title": "Captain America: Civil War",
    "posterVertical": "/DanhMuc/Trang chủ/Đề xuất cho bạn/Captain America-Civil War.jpg",
    "posterHorizontal": "/DanhMuc/Trang chủ/Đề xuất cho bạn/Captain America-Civil War.jpg",
    "backdropUrl": "/DanhMuc/Trang chủ/Đề xuất cho bạn/Captain America-Civil War.jpg",
    "year": "2010",
    "duration": "2h 33m",
    "age": "P",
    "quality": "2K",
    "rating": "3.7/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Kinh dị",
      "Gia đình"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_167",
    "title": "Captain America_Civil War",
    "posterVertical": "/DanhMuc/Trang chủ/Đề xuất cho bạn/Captain America_Civil War _ ngang.jpg",
    "posterHorizontal": "/DanhMuc/Trang chủ/Đề xuất cho bạn/Captain America_Civil War _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Trang chủ/Đề xuất cho bạn/Captain America_Civil War _ ngang.jpg",
    "year": "2020",
    "duration": "2h 26m",
    "age": "T18",
    "quality": "2K",
    "rating": "4.9/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Hài hước",
      "Hoạt hình",
      "Lịch sử"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  },
  {
    "id": "m_168",
    "title": "Fast & Furious: X Movie",
    "posterVertical": "/DanhMuc/Trang chủ/Đề xuất cho bạn/Fast & Furious-X Movie.jpg",
    "posterHorizontal": "/DanhMuc/Trang chủ/Đề xuất cho bạn/Fast & Furious-X Movie _ ngang.jpg",
    "backdropUrl": "/DanhMuc/Trang chủ/Đề xuất cho bạn/Fast & Furious-X Movie _ ngang.jpg",
    "year": "2012",
    "duration": "2h 52m",
    "age": "K",
    "quality": "2K",
    "rating": "4.1/5.0",
    "description": "Một tác phẩm xuất sắc thuộc thể loại phim điện ảnh, mang đến những trải nghiệm không thể quên.",
    "genres": [
      "Hành động",
      "Viễn tưởng",
      "Tài liệu"
    ],
    "category": "phim-dien-anh",
    "country": "Mỹ",
    "badges": [
      {
        "label": "Tập mới",
        "type": "new"
      },
      {
        "label": "Vietsub",
        "type": "glass"
      }
    ]
  }
];

export const getMovies = () => movies;

export const homeRows = [
  {
    "title": "Tiếp tục xem",
    "movies": [
      "m_4",
      "m_42",
      "m_89",
      "m_113",
      "m_138",
      "m_158",
      "m_159",
      "m_160",
      "m_161",
      "m_162"
    ]
  },
  {
    "title": "Đề xuất cho bạn",
    "movies": [
      "m_96",
      "m_112",
      "m_164",
      "m_165",
      "m_166",
      "m_167",
      "m_168"
    ]
  },
  {
    "title": "Cả nhà cùng xem",
    "movies": [
      "m_116",
      "m_117",
      "m_118",
      "m_119",
      "m_120",
      "m_121"
    ]
  },
  {
    "title": "Top 5 Phim Thịnh Hành Hôm Nay",
    "movies": [
      "m_12",
      "m_33",
      "m_42",
      "m_54",
      "m_90",
      "m_163"
    ]
  },
  {
    "title": "Phim mới cập nhật",
    "movies": [
      "m_33",
      "m_96",
      "m_113",
      "m_151",
      "m_152",
      "m_153"
    ]
  },
  {
    "title": "Kinh dị Âu Mỹ",
    "movies": [
      "m_127",
      "m_128",
      "m_129",
      "m_130",
      "m_131",
      "m_132"
    ]
  },
  {
    "title": "Phim chiếu rạp Việt Nam",
    "movies": [
      "m_98",
      "m_139",
      "m_140",
      "m_141",
      "m_142",
      "m_143",
      "m_144"
    ]
  },
  {
    "title": "Hành động và phiêu lưu",
    "movies": [
      "m_97",
      "m_122",
      "m_123",
      "m_124",
      "m_125",
      "m_126"
    ]
  },
  {
    "title": "Phim dành giải thưởng",
    "movies": [
      "m_47",
      "m_113",
      "m_115",
      "m_147",
      "m_148",
      "m_149",
      "m_150"
    ]
  },
  {
    "title": "Phim cũ mà chất",
    "movies": [
      "m_48",
      "m_83",
      "m_89",
      "m_91",
      "m_145",
      "m_146"
    ]
  },
  {
    "title": "Lãng mạn Hàn Quốc",
    "movies": [
      "m_133",
      "m_134",
      "m_135",
      "m_136",
      "m_137",
      "m_138"
    ]
  },
  {
    "title": "Thịnh hành",
    "movies": [
      "m_9",
      "m_35",
      "m_154",
      "m_155",
      "m_156",
      "m_157"
    ]
  }
];
export const movieRows = [
  {
    "title": "Hot Hit",
    "movies": [
      "m_90",
      "m_93",
      "m_94",
      "m_95",
      "m_96",
      "m_97"
    ]
  },
  {
    "title": "Tinh hoa Hollywood",
    "movies": [
      "m_100",
      "m_106",
      "m_107",
      "m_108",
      "m_109",
      "m_110"
    ]
  },
  {
    "title": "Tuyệt tác Oscar",
    "movies": [
      "m_99",
      "m_111",
      "m_112",
      "m_113",
      "m_114",
      "m_115"
    ]
  },
  {
    "title": "Thư giãn cuối tuần",
    "movies": [
      "m_98",
      "m_101",
      "m_102",
      "m_103",
      "m_104",
      "m_105"
    ]
  },
  {
    "title": "Cổ điển tôn trọng",
    "movies": [
      "m_87",
      "m_88",
      "m_89",
      "m_90",
      "m_91",
      "m_92"
    ]
  }
];
export const tvShowRows = [
  {
    "title": "Bạn không nên bỏ lỡ",
    "movies": [
      "m_37",
      "m_38",
      "m_39",
      "m_40",
      "m_41",
      "m_42"
    ]
  },
  {
    "title": "Phim bất hủ",
    "movies": [
      "m_43",
      "m_44",
      "m_45",
      "m_46",
      "m_47",
      "m_48"
    ]
  },
  {
    "title": "Series đi cùng năm tháng",
    "movies": [
      "m_38",
      "m_49",
      "m_50",
      "m_52",
      "m_53",
      "m_54",
      "m_55"
    ]
  }
];
export const animeRows = [
  {
    "title": "Anime dài tập",
    "movies": [
      "m_1",
      "m_2",
      "m_3",
      "m_4",
      "m_5",
      "m_6"
    ]
  },
  {
    "title": "Cơn sốt phòng vé",
    "movies": [
      "m_7",
      "m_8",
      "m_9",
      "m_10",
      "m_11",
      "m_12"
    ]
  },
  {
    "title": "Những người bạn nhỏ",
    "movies": [
      "m_13",
      "m_14",
      "m_15",
      "m_16",
      "m_17",
      "m_18"
    ]
  },
  {
    "title": "Phiêu lưu kì thú",
    "movies": [
      "m_19",
      "m_20",
      "m_21",
      "m_22",
      "m_23",
      "m_24"
    ]
  },
  {
    "title": "Thể thao cực hạn",
    "movies": [
      "m_27",
      "m_28",
      "m_29",
      "m_30",
      "m_31",
      "m_32"
    ]
  },
  {
    "title": "Đang phổ biến",
    "movies": [
      "m_4",
      "m_25",
      "m_26",
      "m_33",
      "m_34",
      "m_35",
      "m_36"
    ]
  }
];
export const docRows = [
  {
    "title": "Bí ẩn chưa giải mã",
    "movies": [
      "m_56",
      "m_57",
      "m_58",
      "m_59",
      "m_60",
      "m_61",
      "m_62"
    ]
  },
  {
    "title": "Góc nhìn lịch sử",
    "movies": [
      "m_63",
      "m_64",
      "m_65",
      "m_66",
      "m_67",
      "m_68"
    ]
  },
  {
    "title": "Khoa học và tương lai",
    "movies": [
      "m_69",
      "m_70",
      "m_71",
      "m_72",
      "m_73",
      "m_74"
    ]
  },
  {
    "title": "Khám phá thế giới",
    "movies": [
      "m_75",
      "m_76",
      "m_77",
      "m_78",
      "m_79",
      "m_80"
    ]
  },
  {
    "title": "Những câu chuyện thực tế",
    "movies": [
      "m_81",
      "m_82",
      "m_83",
      "m_84",
      "m_85",
      "m_86"
    ]
  }
];

export const homeHero = [
  "m_4",
  "m_134",
  "m_137",
  "m_140",
  "m_141"
];
export const movieHero = [
  "m_88",
  "m_93",
  "m_98",
  "m_99",
  "m_100"
];
export const tvHero = [
  "m_38",
  "m_42",
  "m_49",
  "m_50",
  "m_51"
];
export const animeHero = [
  "m_3",
  "m_7",
  "m_14",
  "m_25",
  "m_26"
];
export const docHero = [
  "m_60",
  "m_68",
  "m_71",
  "m_76",
  "m_85"
];

export default movies;

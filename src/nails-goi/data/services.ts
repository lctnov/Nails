export interface Service {
  id: string;
  name: string;
  category: 'nail' | 'hair' | 'combo';
  description: string;
  seoDescription: string;
  price: number;
  originalPrice?: number;
  image: string;
  isPopular?: boolean;
  discount?: number;
}

export const services: Service[] = [
  // Nail Services
  {
    id: 'nail-basic',
    name: 'Làm Móng Cơ Bản',
    category: 'nail',
    description: 'Dịch vụ làm móng với thiết kế cơ bản',
    seoDescription: 'Dịch vụ làm móng cơ bản với chất lượng cao, giá cạnh tranh. Chúng tôi sử dụng những sản phẩm làm móng tốt nhất trên thị trường.',
    price: 150000,
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500&h=500&fit=crop',
    discount: 0,
  },
  {
    id: 'nail-design',
    name: 'Làm Móng Thiết Kế',
    category: 'nail',
    description: 'Dịch vụ làm móng với các thiết kế đẹp mắt',
    seoDescription: 'Làm móng thiết kế với đa dạng mẫu mã, từ cơ bản đến phức tạp. Đội ngũ thợ nail chuyên nghiệp sẽ tạo ra những mẫu thiết kế độc đáo cho bạn.',
    price: 250000,
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500&h=500&fit=crop',
    isPopular: true,
    discount: 0,
  },
  {
    id: 'nail-luxury',
    name: 'Làm Móng Cao Cấp',
    category: 'nail',
    description: 'Dịch vụ làm móng cao cấp với các vật liệu tốt nhất',
    seoDescription: 'Trải nghiệm dịch vụ làm móng cao cấp với vật liệu nhập khẩu chất lượng cao. Chúng tôi cam k承ó sẽ mang lại vẻ đẹp rạng rỡ cho đôi tay bạn.',
    price: 350000,
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500&h=500&fit=crop',
    discount: 0,
  },
  // Hair Washing Services
  {
    id: 'hair-basic',
    name: 'Gội Đầu Cơ Bản',
    category: 'hair',
    description: 'Dịch vụ gội đầu với massage thư giãn',
    seoDescription: 'Dịch vụ gội đầu cơ bản với các sản phẩm chăm sóc tóc chuyên nghiệp, kèm massage đầu thư giãn. Tận hưởng trải nghiệm chăm sóc tóc tuyệt vời.',
    price: 120000,
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500&h=500&fit=crop',
    discount: 0,
  },
  {
    id: 'hair-treatment',
    name: 'Gội Đầu & Ủ Dưỡng',
    category: 'hair',
    description: 'Gội đầu kết hợp ủ dưỡng tóc',
    seoDescription: 'Dịch vụ gội đầu kết hợp ủ dưỡng tóc chuyên sâu, giúp tóc mềm mượt, bóng khỏe. Các sản phẩm dưỡng tóc cao cấp được sử dụng để chăm sóc tốt nhất cho tóc của bạn.',
    price: 200000,
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500&h=500&fit=crop',
    isPopular: true,
    discount: 0,
  },
  {
    id: 'hair-spa',
    name: 'Gội Đầu Spa',
    category: 'hair',
    description: 'Dịch vụ gội đầu spa cao cấp',
    seoDescription: 'Trải nghiệm dịch vụ gội đầu spa cao cấp với aromatherapy, massage chuyên sâu. Thư giãn hoàn toàn và chăm sóc tóc tối ưu trong không gian yên tĩnh.',
    price: 280000,
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500&h=500&fit=crop',
    discount: 0,
  },
  // Combo Services
  {
    id: 'combo-basic',
    name: 'Gói Cơ Bản: Móng + Gội',
    category: 'combo',
    description: 'Gói kết hợp làm móng cơ bản + gội đầu cơ bản',
    seoDescription: 'Gói combo tiết kiệm: Làm móng cơ bản + Gội đầu cơ bản. Giá ưu đãi đặc biệt cho khách hàng chọn gói combo của chúng tôi.',
    price: 240000,
    originalPrice: 270000,
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500&h=500&fit=crop',
    isPopular: false,
    discount: 11,
  },
  {
    id: 'combo-premium',
    name: 'Gói Premium: Móng Thiết Kế + Gội Spa',
    category: 'combo',
    description: 'Gói kết hợp làm móng thiết kế + gội đầu spa',
    seoDescription: 'Gói combo premium: Làm móng thiết kế + Gội đầu spa với giảm giá hấp dẫn. Nâng cao vẻ đẹp toàn diện cho bạn với dịch vụ cao cấp.',
    price: 480000,
    originalPrice: 530000,
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500&h=500&fit=crop',
    isPopular: true,
    discount: 9,
  },
  {
    id: 'combo-deluxe',
    name: 'Gói Deluxe: Móng Cao Cấp + Gội Spa',
    category: 'combo',
    description: 'Gói kết hợp cao cấp nhất với móng luxury + gội spa',
    seoDescription: 'Gói combo deluxe cao cấp: Làm móng cao cấp + Gội đầu spa với ưu đãi giảm giá lớn. Trải nghiệm dịch vụ làm đẹp hàng đầu.',
    price: 580000,
    originalPrice: 630000,
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500&h=500&fit=crop',
    isPopular: false,
    discount: 8,
  },
  {
    id: 'nail-ombre',
    name: 'Làm Móng Ombre Gradient',
    category: 'nail',
    description: 'Dịch vụ làm móng với gradient ombre đẹp mắt',
    seoDescription: 'Làm móng ombre gradient với màu sắc độc đáo, tạo ra hiệu ứng chuyển màu tinh tế. Thiết kế tuyệt vời cho những ai yêu thích nổi bật.',
    price: 280000,
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500&h=500&fit=crop',
    discount: 0,
  },
  {
    id: 'hair-scalp',
    name: 'Gội Đầu & Massage Trị Liệu',
    category: 'hair',
    description: 'Gội đầu kèm massage trị liệu chuyên sâu',
    seoDescription: 'Dịch vụ gội đầu với massage trị liệu giúp giảm căng thẳng, cải thiện tuần hoàn máu. Chăm sóc tóc và sức khỏe đầu toàn diện.',
    price: 220000,
    originalPrice: 250000,
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500&h=500&fit=crop',
    isPopular: true,
    discount: 12,
  },
  {
    id: 'combo-weekend',
    name: 'Gói Cuối Tuần: Tất Cả Combo',
    category: 'combo',
    description: 'Gói combo đặc biệt cho cuối tuần',
    seoDescription: 'Gói combo cuối tuần với ưu đãi đặc biệt. Thư giãn toàn diện với dịch vụ làm móng + gội đầu spa tại các ngày cuối tuần.',
    price: 650000,
    originalPrice: 750000,
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500&h=500&fit=crop',
    isPopular: false,
    discount: 13,
  },
];

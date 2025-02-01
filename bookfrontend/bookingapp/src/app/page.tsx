"use client";
import './globals.css';
import { useEffect, useState } from "react";
interface RoomType {
  roomTypeId: number;
  roomTypeName: string;
}

interface Room {
  roomId: number;
  roomNumber: string;
  roomType: RoomType;
  floor: number;
  status: string;
  pricePerNight: number;
  createdAt: string;
  updatedAt: string;
}
export default function Home() {
  const [products, setProducts] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);
  const feedbacks = [
    { name: "John Doe", feedback: "Great service and friendly staff!" },
    { name: "Jane Smith", feedback: "The rooms were clean and comfortable." },
    { name: "Alice Johnson", feedback: "Amazing experience, will come back again!" },
    { name: "Robert Brown", feedback: "Loved the food and the ambiance." },
    { name: "Emily Davis", feedback: "The spa services were top-notch." },
    { name: "Michael Wilson", feedback: "Perfect location and great amenities." },
    { name: "Sarah Miller", feedback: "The staff was very helpful and courteous." },
    { name: "David Anderson", feedback: "Had a wonderful stay, highly recommend!" },
    { name: "Laura Thomas", feedback: "The pool area was very relaxing." },
    { name: "James Jackson", feedback: "Excellent customer service." },
    { name: "Linda White", feedback: "The hotel was very clean and well-maintained." },
    { name: "Daniel Harris", feedback: "Great value for the price." },
    { name: "Sophia Martin", feedback: "The breakfast buffet was delicious." },
    { name: "Christopher Lee", feedback: "The room had a beautiful view." },
    { name: "Olivia Walker", feedback: "The hotel exceeded my expectations." },
    { name: "Matthew Hall", feedback: "Will definitely stay here again." },
  ];
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:7070/api/rooms", {
          method: "GET",
        });
        const result = await response.json();
        setProducts(result.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  const restaurants = [
    { name: "Restaurant 1", description: "Description 1", image: "/res1.jpg" },
    { name: "Restaurant 2", description: "Description 2", image: "/res2.jpg" },
    { name: "Restaurant 3", description: "Description 3", image: "/res3.jpg" },
    { name: "Bar 4", description: "Description 4", image: "/bar1.jpg" },
    { name: "Bar 5", description: "Description 5", image: "/bar2.jpg" },
    { name: "Bar 6", description: "Description 6", image: "/bar3.jpg" },
  ];
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % Math.ceil(restaurants.length / itemsPerPage));
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + Math.ceil(restaurants.length / itemsPerPage)) % Math.ceil(restaurants.length / itemsPerPage));
  };
  return (
    
    <div>
      <div className="home-container">
      <div className="home-text">
        <h1>Chào mừng đến với khách sạn The Hotel</h1>
        <p>
          Khách sạn The Hotel là nơi lý tưởng cho bạn nghỉ ngơi và thư giãn.
          Với các dịch vụ và tiện nghi cao cấp, chúng tôi sẽ mang đến cho bạn
          một kỳ nghỉ đáng nhớ.
          Với vị trí đắc địa ở ngay trung tâm quận Đống Đa giúp cho việc kết nối thuận tiện hơn 
          với các trung tâm giải trí, khu trung tâm thương mại sầm uất và những nhà hàng nổi tiếng với
          những món ăn ngon và hấp dẫn.Hy vọng sẽ giúp bạn có được những phút giây thư giãn và thoải mái.
        </p>
      </div>
      <div className="home-image">
        <img src="/thehotel.jpg" alt="BoomShakalacka Hotel" className="logo-image" />
      </div>
    </div>
    <div className="special-offers">
    <h1>Ưu đãi đặc biệt</h1>
    <h2>Bất ngờ gì đang chờ đợi bạn?</h2>
    <p>Tọa lạc tại khu vực trung tâm thủ đô, Khách sạn Hà Nội mang đến không gian lưu trú tiện nghi và sang trọng bên hồ Giảng Võ yên bình 
      với nhiều hạng phòng đa dạng, đáp ứng mọi nhu cầu của Quý khách, dù là trong kỳ nghỉ dưỡng hay chuyến công tác dài ngày. 
              Hãy đến và trải nghiệm những dịch vụ hấp dẫn tại khách sạn Hà Nội!</p>
    </div>
    <div className="home-container">
        <div className="home-text">
          <h1>Premium Executive Suite</h1>
          <h3>2 giường đơn</h3>
          <h3>2 người lớn 1 trẻ em</h3>
          <h3>50m3</h3>
          <h3>Hướng hồ</h3>
          <button>
            Xem chi tiết
          </button>
        </div>
        <div className="home-image">
          <img src="/roomsuite.jpg" alt="Room 1" />
        </div>
    </div>
    <div className="special-offers">
      <h1>Ẩm thực</h1>
      <p>Khám phá thế giới ẩm thực phong phú tại khách sạn Hà Nội, nơi những nhà hàng của chúng tôi phục vụ đa 
            dạng các món ăn Quảng Đông, Hồng Kông và đặc biệt là những xửng Dimsum trứ danh. Hãy cùng thưởng 
               thức hương vị độc đáo của những tinh hoa ẩm thực trong không gian tinh tế giữa lòng thủ đô.</p>
    </div>
    <div>
    <section className="restaurants-section">
        <h2>Nhà hàng và Bar</h2>
        <div className="restaurants-container">
          {restaurants.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage).map((restaurant, index) => (
            <div key={index} className="restaurant-card" style={{ backgroundImage: `url(${restaurant.image})` }}>
              <div className="restaurant-content">
                <h3>{restaurant.name}</h3>
                <p>{restaurant.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="pagination">
          <button onClick={handlePrev} className="pagination-button">Previous</button>
          {Array.from({ length: Math.ceil(restaurants.length / itemsPerPage) }).map((_, index) => (
            <span key={index} className={`dot ${index === currentPage ? 'active' : ''}`}></span>
          ))}
          <button onClick={handleNext} className="pagination-button">Next</button>
        </div>
      </section>
    </div>
    <div className="home-image">
      <img src="/diningroom.jpg"/>
    </div>
    <div className="special-offers">
      <h1>Phòng họp & Hội nghị</h1>
      <p>Khách sạn The Hotel cung cấp các phòng họp và hội nghị với sức chứa lên đến 100 khách. Mỗi phòng có những 
        trang thiết bị hiện đại cùng đội ngũ nhân viên chuyên nghiệp, luôn sẵn sàng phục vụ các sự kiện từ những 
                    hội nghị quan trọng đến tiệc cưới hay các buổi liên hoan gia đình ấm cúng.</p>
    </div> 
    <div className="home-container"> 
      <div className="home-image">
        <img src="/pool.jpg"/>
      </div>
      <div className="special-offers">
          <h1>Các tiện nghi</h1>
          <p>Khách sạn Hà Nội mang đến những tiện nghi đẳng cấp nhằm tạo nên một kỳ 
            nghỉ đáng nhớ cho Quý khách. Rèn luyện sức khỏe tại phòng gym hiện đại
            ,thư giãn với các liệu pháp spa và tận hưởng ẩm thực tinh tế tại nhà hàng 
            trong khuôn viên khách sạn. Chúng tôi cung cấp không gian linh hoạt cho các 
            sự kiện, dịch vụ hỗ trợ thông tin cùng lễ tân 24/7, Wi-Fi miễn phí và đưa đón 
            sân bay thuận tiện, đảm bảo sự thoải mái và tiện nghi trọn vẹn trong suốt thời 
            gian lưu trú của Quý khách.</p>
      </div> 
      </div>  
      <div className="home-container">
      <section className="feedback-section">
        <h2>Phản hồi của khách hàng</h2>
        <div className="feedback-container">
          {feedbacks.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage).map((feedback, index) => (
            <div key={index} className="feedback-card">
              <h3>{feedback.name}</h3>
              <p>{feedback.feedback}</p>
            </div>
          ))}
        </div>
        <div className="pagination">
          <button onClick={handlePrev} className="pagination-button">Previous</button>
          {Array.from({ length: Math.ceil(feedbacks.length / itemsPerPage) }).map((_, index) => (
            <span key={index} className={`dot ${index === currentPage ? 'active' : ''}`}></span>
          ))}
          <button onClick={handleNext} className="pagination-button">Next</button>
        </div>
      </section>
      </div>
      
    </div>
  );
} 
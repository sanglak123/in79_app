import SEO from "@/components/seo";
import { structuredData_home } from "@/components/seo/structuredData";
import HomeBanners from "@/layouts/homeBanners";

export default function PageHome() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="In Nhanh 79 - Dịch Vụ In Ấn Chuyên Nghiệp Tại TP.HCM"
        description="In Nhanh 79 chuyên in kỹ thuật số, in nhanh lấy liền, in quảng cáo, thiết kế và in tem nhãn tại TP.HCM."
        structuredData={structuredData_home}
      />
      <main className="flex-grow">
        <HomeBanners />
        {/* <ServicesSection /> */}
        {/* <HomeBestseller /> */}
        {/* <HomePartners /> */}
        {/* <HomeRatings /> */}
      </main>
    </div>
  )
}
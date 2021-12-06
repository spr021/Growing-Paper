import "./CardDetile.scss"
import { getCard } from "../../mock-data/grow"
import Button from "../../components/button/button"
import Leaves from "../../assets/Leaves.png"
import Link from "../../Link"
import { useState } from "react"
import BuyModal from "../../components/buy-modal/BuyModal"

function CardDetile({ setPoint, point }) {
  const id = new URL(window.location.href).searchParams.get("id")
  const content = getCard(id)

  const clcDeadline = new Date(new Date(content.deadline) - new Date())
  const clc = !isNaN(clcDeadline) ? (clcDeadline > 0 ? true : false) : "invalid"

  const [openModal, setOpenModal] = useState(false)

  const buy = () => {
    if (clc && point >= content.point) {
      setOpenModal(true)
      setPoint((total) => total - content.point)
    }
  }

  return (
    <>
      <div className="detail">
        <div className="detail-header">
          <Link className="back" href="/Growing-Paper/rooyesh">
            &rarr; جزئیات جایزه
          </Link>
          <Button
            color="#283b1c"
            text={point}
            className="leaves-point"
            icon={Leaves}
          />
        </div>
        <div className="content">
          <div>
            <img className="cover-deatil" src={content.img} alt="cover" />
            <div className="cover-buuton">
              <Button
                onClick={buy}
                color={clc && point >= content.point ? "#00a2a4" : "#939495"}
                text="دریافت"
              />
              <span className="point-card">
                <span>برگ مورد نیاز : {content.point}</span>
                <img width="30px" height="30px" src={Leaves} alt="leave" />
              </span>
            </div>
          </div>
          <div className="content-rule">
            <h3>{content.title}</h3>
            <span>
              <h4>قوانین استفاده</h4>
              <ol>
                <li>
                  این تخفیف روی تمام مدت زمان‌های عضویت در طاقچه بی‌نهایت قابل
                  استفاده است.
                </li>
                <li>مهلت استفاده از تخفیف ۳۰ روز پس از دریافت آن است.</li>
                <li>
                  بخشی از کتاب‌ها و مجله‌های متنی طاقچه در کتابخانه بی‌نهایت
                  قرار دارد.
                </li>
                <li>در حال حاضر کتاب‌های صوتی در این کتابخانه قرار ندارند.</li>
                <li>
                  پیوسته کتاب‌ها و مجلات متنوعی به طاقچه بی‌نهایت اضافه می‌شود.
                </li>
                <li>
                  در حالت آفلاین، فقط به آخرین کتابی که در «در حال خواندن» است،
                  دسترسی داری. برای خواندن کتاب‌های دیگر، باید به اینترنت وصل
                  شوی و کتاب را دانلود کنی.
                </li>
                <li>
                  در هر ۲۴ ساعت، می‌توانی تا ۳۰ کتاب از کتابخانه بی‌نهایت قرض
                  بگیری.
                </li>
                <li>
                  پس از تمام شدن عضویت، به کتاب‌هایی که قرض گرفته‌ای دسترسی
                  رایگان نداری، اما این کتاب‌ها از کتابخانه‌تان حذف نمی‌شود.
                </li>
                <li>حداکثر زمان عضویت در طاقچه بی‌نهایت ۲ سال است.</li>
              </ol>
              <h4>راهنمای استفاده</h4>
              <ol>
                <li>
                  تعداد برگ‌های لازم برای دریافت تخفیف را جمع‌آوری کن. سپس دکمه
                  دریافت جایزه را بزن.
                </li>
                <li>
                  پس از کلیک کردن روی «دریافت جایزه» کد تخفیف فعال می‌شود. دکمه
                  «کپی کن» را فشار بده تا کد را کپی کنی.
                </li>
                <li>
                  بعد از کپی کردن کد به قسمت«بی‌نهایت» برو. دکمهٔ «خرید اشتراک»
                  یا «تمدید اشتراک» را انتخاب کن.
                </li>
                <li>
                  در قسمت «کد تخفیف یا هدیه دارم» کد تخفیفی که کپی کرده‌ای وارد
                  کن و دکمه ثبت را بزن.
                </li>
                <li>
                  پس از ثبتِ کد تخفیف، اشتراک مورد نظرت را با تخفیف خریداری کن.
                </li>
                <li>هنگام «دریافت جایزه» به مهلت استفاده از کد دقت کن.</li>
              </ol>
            </span>
          </div>
        </div>
      </div>
      <BuyModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        content={content}
      />
    </>
  )
}

export default CardDetile

# Bài 3 — Bóc tách và chuẩn hóa lịch khám

Chương trình dùng `split("-")` để tách bác sĩ, chuyên khoa, giờ khám và phòng. Tên bác sĩ bỏ tiền tố `BS.`, đổi `_` thành khoảng trắng, chuyển về chữ thường rồi viết hoa ký tự đầu mỗi từ. Chuyên khoa được đổi `_` thành khoảng trắng và chuẩn hóa tương tự; phòng được đổi từ `PHONG_###` sang `Phòng ###`. Kết quả được in thành bảng bằng template literal.

Chuỗi mẫu ghi tên bác sĩ và chuyên khoa không dấu (`nguyen_van_hai`, `TIM_MACH`), nên không thể suy ra đầy đủ dấu tiếng Việt chỉ bằng viết hoa. Để khớp chính xác kết quả mẫu yêu cầu, mã xử lý tường minh hai giá trị đã biết (`Nguyễn Văn Hải`, `Khoa Tim Mạch`). Các chuỗi kiểm thử còn lại có sẵn dấu tiếng Việt và được giữ nguyên qua bước đổi hoa/thường.

## Dữ liệu kiểm thử

| Dữ liệu đầu vào | Bác sĩ mong đợi | Chuyên khoa mong đợi | Giờ khám | Phòng khám |
|---|---|---|---|---|
| `BS.nguyen_van_hai-KHOA_TIM_MACH-08:30-PHONG_302` | Nguyễn Văn Hải | Khoa Tim Mạch | 08:30 | Phòng 302 |
| `BS.trần_thị_bình-KHOA_NHI-09:15-PHONG_105` | Trần Thị Bình | Khoa Nhi | 09:15 | Phòng 105 |
| `BS.phạm_quốc_bảo-KHOA_DA_LIỄU-10:00-PHONG_210` | Phạm Quốc Bảo | Khoa Da Liễu | 10:00 | Phòng 210 |

## Chạy

```sh
node solution_ex7.js
```

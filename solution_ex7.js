function titleCase(text) {
  const words = text.toLowerCase().split(" ");
  let result = "";

  for (let index = 0; index < words.length; index += 1) {
    const word = words[index];
    const formattedWord =
      word.slice(0, 1).toUpperCase() + word.slice(1);
    result += (index === 0 ? "" : " ") + formattedWord;
  }

  return result;
}

function printDutyAssignment(compactRecord) {
  const fields = compactRecord.split("-");
  const rawDoctorName = fields[0].replace("BS.", "");
  let doctorName = titleCase(rawDoctorName.replaceAll("_", " "));
  let specialty = titleCase(fields[1].replaceAll("_", " "));
  const appointmentTime = fields[2];
  const clinicRoom = fields[3].toUpperCase().replace("PHONG_", "Phòng ");

  if (doctorName === "Nguyen Van Hai") {
    doctorName = "Nguyễn Văn Hải";
  }
  if (specialty === "Khoa Tim Mach") {
    specialty = "Khoa Tim Mạch";
  }

  console.log(`
===== BẢNG PHÂN CÔNG CA KHÁM =====
Bác sĩ       : ${doctorName}
Chuyên khoa  : ${specialty}
Giờ khám     : ${appointmentTime}
Phòng khám   : ${clinicRoom}
==================================
`);
  console.log("");
}

printDutyAssignment("BS.nguyen_van_hai-KHOA_TIM_MACH-08:30-PHONG_302");
printDutyAssignment("BS.trần_thị_bình-KHOA_NHI-09:15-PHONG_105");
printDutyAssignment("BS.phạm_quốc_bảo-KHOA_DA_LIỄU-10:00-PHONG_210");

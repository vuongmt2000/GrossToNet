import React, {useState} from 'react';
import {View, Text, ScrollView, FlatList} from 'react-native';
import styles from './Styles';
import Home from '../screens/Home';

function GrossToNet({navigation, route}) {
  console.log(route.name + 'vvv');
  const {
    screen,
    date,
    insurance,
    salary_insurance,
    region,
    soNpt,
  } = route.params;
  var bao_hiem_xa_hoi = 0,
    bao_hiem_y_te,
    thu_nhap_truoc_thue,
    giam_tru_nguoi_phu_thuoc,
    thu_nhap_chiu_thue,
    bao_hiem_xa_hoi1 = 0,
    tnld,
    bao_hiem_y_te1 = 0,
    tong_cong = 0,
    thue_thu_nhap_ca_nhan,
    bao_hiem,
    bao_hiem_that_nghiep,
    thue5,
    thue10 = 0,
    thue18 = 0,
    thue32 = 0,
    thue52 = 0,
    thue80 = 0,
    thuet80 = 0;
  if (screen === 5) {
    var {salary} = route.params;
  }
  if (screen === 10) {
    var {net} = route.params;
    var salary = Math.floor(net / 0.895);
  }

  if (salary > 29800000) {
    bao_hiem_xa_hoi = 2384000;
    bao_hiem_y_te = 447000;
    bao_hiem_xa_hoi1 = 5066000;
    tnld = 149000;
    bao_hiem_y_te1 = 894000;
  } else {
    bao_hiem_xa_hoi = Math.floor(salary * 0.08);
    bao_hiem_y_te = Math.floor(salary * 0.015);
    bao_hiem_xa_hoi1 = Math.floor(salary * 0.17);
    tnld = Math.floor(salary * 0.005);
    bao_hiem_y_te1 = Math.floor(salary * 0.03);
  }

  switch (region) {
    case 1:
      {
        if (salary > 88400000) {
          bao_hiem_that_nghiep = 884000;
        } else {
          bao_hiem_that_nghiep = Math.floor(salary * 0.01);
        }
      }
      break;
    case 2:
      {
        if (salary > 78400000) {
          bao_hiem_that_nghiep = 784000;
        } else {
          bao_hiem_that_nghiep = Math.floor(salary * 0.01);
        }
      }
      break;
    case 3:
      {
        if (salary > 68600000) {
          bao_hiem_that_nghiep = 686000;
        } else {
          bao_hiem_that_nghiep = Math.floor(salary * 0.01);
        }
      }
      break;
    case 4:
      {
        if (salary > 61400000) {
          bao_hiem_that_nghiep = 614000;
        } else {
          bao_hiem_that_nghiep = Math.floor(salary * 0.01);
        }
      }
      break;
  }
  bao_hiem = bao_hiem_that_nghiep + bao_hiem_xa_hoi + bao_hiem_y_te;
  thu_nhap_truoc_thue = salary - bao_hiem;
  var giam_tru_ban_than = 110000000;
  if (!data) {
    giam_tru_ban_than = 9000000;
  }
  switch (date) {
    case true:
      giam_tru_nguoi_phu_thuoc = soNpt * 4400000;
      break;
    case false:
      giam_tru_nguoi_phu_thuoc = soNpt * 3600000;
      break;
  }
  thu_nhap_chiu_thue =
    thu_nhap_truoc_thue - giam_tru_ban_than - giam_tru_nguoi_phu_thuoc;
  if (thu_nhap_chiu_thue < 0) {
    thu_nhap_chiu_thue = 0;
  }
  if (thu_nhap_chiu_thue < 5000000) {
    thue_thu_nhap_ca_nhan = Math.floor(thu_nhap_chiu_thue * 0.05);
    thue5 = Math.floor(thu_nhap_chiu_thue * 0.05);
  } else if (thu_nhap_chiu_thue >= 5000000 && thu_nhap_chiu_thue < 10000000) {
    thue_thu_nhap_ca_nhan = Math.floor(thu_nhap_chiu_thue * 0.1);
    thue5 = 250000;
    thue10 = Math.floor((thu_nhap_chiu_thue - 5000000) * 0.1);
  } else if (thu_nhap_chiu_thue >= 10000000 && thu_nhap_chiu_thue < 18000000) {
    thue_thu_nhap_ca_nhan = Math.floor(thu_nhap_chiu_thue * 0.15);
    thue5 = 250000;
    thue10 = 5000000;
    thue18 = Math.floor((thu_nhap_chiu_thue - 10000000) * 0.15);
  } else if (thu_nhap_chiu_thue >= 18000000 && thu_nhap_chiu_thue < 32000000) {
    thue_thu_nhap_ca_nhan = Math.floor(thu_nhap_chiu_thue * 0.2);
    thue5 = 250000;
    thue10 = 500000;
    thue18 = 1200000;
    thue32 = Math.floor((thu_nhap_chiu_thue - 18000000) * 0.2);
  } else if (thu_nhap_chiu_thue >= 32000000 && thu_nhap_chiu_thue < 52000000) {
    thue_thu_nhap_ca_nhan = Math.floor(thu_nhap_chiu_thue * 0.25);
    thue5 = 250000;
    thue10 = 500000;
    thue18 = 1200000;
    thue32 = 2800000;
    thue52 = Math.floor((thu_nhap_chiu_thue - 32000000) * 0.25);
  } else if (thu_nhap_chiu_thue >= 52000000 && thu_nhap_chiu_thue < 80000000) {
    thue_thu_nhap_ca_nhan = Math.floor(thu_nhap_chiu_thue * 0.3);
    thue5 = 250000;
    thue10 = 500000;
    thue18 = 1200000;
    thue32 = 2800000;
    thue52 = 5000000;
    thue80 = Math.floor((thu_nhap_chiu_thue - 52000000) * 0.3);
  } else if (thu_nhap_chiu_thue >= 80000000) {
    thue_thu_nhap_ca_nhan = Math.floor(thu_nhap_chiu_thue * 0.35);
    thue5 = 250000;
    thue10 = 500000;
    thue18 = 1200000;
    thue32 = 2800000;
    thue52 = 5000000;
    thue80 = 8400000;
    thuet80 = Math.floor((thu_nhap_chiu_thue - 80000000) * 0.35);
  }

  if (screen === 5) {
    var net = salary - bao_hiem - thue_thu_nhap_ca_nhan;
  }
  tong_cong =
    salary -
    -bao_hiem_xa_hoi1 -
    -bao_hiem_y_te1 -
    -tnld -
    -bao_hiem_that_nghiep;
  const [data, setData] = useState([
    {title: 'L????ng GROSS', value: salary},
    {title: 'B???o hi???m x?? h???i (8%)', value: - bao_hiem_xa_hoi},
    {title: 'B???o hi???m y t??? (1.5%)', value: - bao_hiem_y_te},
    {title: 'B???o hi???m th???t nghi???p (1%)', value: - bao_hiem_that_nghiep},
    {title: 'Thu nh???p tr?????c thu???', value: - thu_nhap_truoc_thue},
    {title: 'Gi???m tr??? gia c???nh b???n th??n', value: - giam_tru_ban_than},
    {
      title: 'Gi???m tr??? gia c???nh ng?????i ph??? thu???c',
      value: -giam_tru_nguoi_phu_thuoc,
    },
    {title: 'Thu nh???p ch???u thu???', value: thu_nhap_chiu_thue},
    {title: 'Thu??? thu nh???p c?? nh??n(*)', value: thue_thu_nhap_ca_nhan},
    {title: 'L????ng NET', value: net},
  ]);
  const [data_tax, setData_tax] = useState([
    {title: 'M???c ch???u thu???', tax: 'Thu??? su???t', value: 'Ti???n n???p'},
    {title: '?????n 5 tri???u VN??', tax: '5%', value: thue5},
    {title: 'Tr??n 5 tri???u VN?? ?????n 10 tri???u VN??', tax: '10%', value: thue10},
    {title: 'Tr??n 10 tri???u VN?? ?????n 18 tri???u VN??', tax: '15%', value: thue18},
    {title: 'Tr??n 18 tri???u VN?? ?????n 32 tri???u VN??', tax: '20%', value: thue32},
    {title: 'Tr??n 32 tri???u VN?? ?????n 52 tri???u VN??', tax: '25%', value: thue52},
    {title: 'Tr??n 52 tri???u VN?? ?????n 80 tri???u VN??', tax: '30%', value: thue80},
    {title: 'Tr??n 80 tri???u VN??	', tax: '35%', value: thuet80},
  ]);

  const [data_salary, setData_salary] = useState([
    {title: 'L????ng GROSS', value: salary},
    {title: 'B???o hi???m x?? h???i (17%)', value: -bao_hiem_xa_hoi1},
    {
      title: 'B???o hi???m Tai n???n lao ?????ng\n- B???nh ngh??? nghi???p (0.5%)',
      value: tnld,
    },
    {title: 'B???o hi???m y t??? (3%)', value: bao_hiem_y_te1},
    {title: 'B???o hi???m th???t nghi???p (1%)', value: bao_hiem_that_nghiep},
    {title: 'T???ng c???ng	', value: tong_cong},
  ]);
  const renderItem = ({item}) => (
    <View style={styles.view_flat}>
      <Text style={styles.item_txt}>{item.title}</Text>
      <Text>{item.value}</Text>
    </View>
  );

  const renderItem_tax = ({item}) => (
    <View style={styles.view_flat1}>
      <View style={styles.item_txt}>
        <Text style = {styles.item_txt}>{item.title}</Text>
      </View>
      <View style={styles.item_txt1}>
        <Text >{item.tax}</Text>
      </View>
      <View style={styles.item_txt2}>
        <Text>{item.value}</Text>
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container} nestedScrollEnabled={true}>
      {/* view xem luong  */}
      <View style={styles.salary_}>
        <View style={styles.header_salary1}>
          <Text style={styles.txt_salary_}>L????ng Gross</Text>
          <Text style={styles.txt_money}>{salary}</Text>
        </View>
        <View style={styles.header_salary}>
          <Text style={styles.txt_salary_}>B???o hi???m</Text>
          <Text style={styles.txt_money}>- {bao_hiem}</Text>
        </View>
      </View>
      <View style={styles.salary_}>
        <View style={styles.header_salary1}>
          <Text style={styles.txt_salary_}>Thu??? TNCN</Text>
          <Text style={styles.txt_money}>-{thue_thu_nhap_ca_nhan}</Text>
        </View>
        <View style={styles.header_salary}>
          <Text style={styles.txt_salary_}> L????ng Net</Text>
          <Text style={styles.txt_money}>{net}</Text>
        </View>
      </View>

      {/* ????n gi?? chi ti???t */}
      <View style={styles.body}>
        <Text style={styles.title_no}>Di???m gi???i chi ti???t(VND)</Text>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.title}
        />
      </View>
      <View style={styles.body}>
        <Text style={styles.title_no}>
          (*) Chi ti???t thu??? thu nh???p c?? nh??n (VN??)
        </Text>
        <FlatList
          data={data_tax}
          renderItem={renderItem_tax}
          keyExtractor={item => item.title}
        />
      </View>
      <View style={styles.body}>
        <Text style={styles.title_no}>Ng?????i s??? d???ng lao ?????ng tr??? (VN??)</Text>
        <FlatList
          data={data_salary}
          renderItem={renderItem}
          keyExtractor={item => item.title}
        />
      </View>
    </ScrollView>
  );
}

export default GrossToNet;

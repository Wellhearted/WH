<template>

<form>
        <div class="form-group">
            <label>Ledv</label>
            <input v-model="ledv" type="text" class="form-control" placeholder="Ledv" required />
                  </div>
          <div class="form-group">
            <label>Redv</label>
            <input v-model="redv" type="text" class="form-control" placeholder="redv" required />
          </div>
          <div class="form-group">
            <label>Lesv</label>
            <input v-model="lesv" type="text" class="form-control" placeholder="lesv" required />
          </div>
          <div class="form-group">
            <label>Resv</label>
            <input v-model="resv" type="text" class="form-control" placeholder="resv" required />
          </div>
          <div class="form-group">
            <label>Lvef</label>
            <input v-model="lvef" type="text" class="form-control" placeholder="lvef" required />
          </div>
          <div class="form-group">
            <label>Rvef</label>
            <input v-model="rvef" type="text" class="form-control" placeholder="rvef" required />
          </div>
          <div class="form-group">
            <label>Lvmass</label>
            <input v-model="lvmass" type="text" class="form-control" placeholder="lvmass" required />
          </div>
          <div class="form-group">
            <label>Rvmass</label>
            <input v-model="rvmass" type="text" class="form-control" placeholder="rvmass" required />
          </div>
          <div class="form-group">
            <label>Lsv</label>
            <input v-model="lsv" type="text" class="form-control" placeholder="lsv" required />
          </div>
          <div class="form-group">
            <label>Rsv</label>
            <input v-model="rsv" type="text" class="form-control" placeholder="rsv" required />
          </div>
          <div class="form-group">
            <label>scar</label>
<label>
  <input type="radio" v-model="scar" value="0">
  0
</label>
<label>
  <input type="radio" v-model="scar" value="1">
  1
</label>          </div>
          <div class="form-group">
            <label>Gender</label><br>
<label>
  <input type="radio" v-model="gender" value="0">
  0
</label>
<label>
  <input type="radio" v-model="gender" value="1">
  1
</label>          </div>
          <div class="form-group">
            <label>Age</label><br>
            <input v-model="age" type="text" class="form-control" placeholder="age" required />
          </div>
          <div class="form-group">
            <label>Apical</label>
<label>
  <input type="radio" v-model="apical" value="0">
  0
</label>
<label>
  <input type="radio" v-model="apical" value="1">
  1
</label>          </div>
          <div class="form-group">
            <label>Death</label><br>
<label>
  <input type="radio" v-model="death" value="0">
  0
</label>
<label>
  <input type="radio" v-model="death" value="1">
  1
</label>          </div>
          <div class="form-group">
            <label>Hypertension</label><br>
<label>
  <input type="radio" v-model="hypertension" value="0">
  0
</label>
<label>
  <input type="radio" v-model="hypertension" value="1">
  1
</label>          </div>
          <div class="form-group">
            <label>Diabetes</label><br>
<label>
  <input type="radio" v-model="diabetes" value="0">
  0
</label>
<label>
  <input type="radio" v-model="diabetes" value="1">
  1
</label>          </div>
          <div class="form-group">
            <label>Myectomy </label><br>
<label>
  <input type="radio" v-model="myectomy" value="0">
  0
</label>
<label>
  <input type="radio" v-model="myectomy" value="1">
  1
</label>          </div>

          <label>
  <input type="radio" v-model="MYH7" value="1">
  1
</label>
<label>
  <input type="radio" v-model="MYH7" value="0">
  0
</label>
<label>
  <input type="radio" v-model="MYBPC3" value="1">
  1
</label>
<label>
  <input type="radio" v-model="MYBPC3" value="0">
  0
</label>
<label>
  <input type="radio" v-model="TNNT2" value="1">
  1
</label>
<label>
  <input type="radio" v-model="TNNT2" value="0">
  0
</label>
<label>
  <input type="radio" v-model="ACTC" value="1">
  1
</label>
<label>
  <input type="radio" v-model="ACTC" value="0">
  0
</label>
<label>
  <input type="radio" v-model="TPM1" value="1">
  1
</label>
<label>
  <input type="radio" v-model="TPM1" value="0">
  0
</label>
<label>
  <input type="radio" v-model="TNNCI" value="1">
  1
</label>
<label>
  <input type="radio" v-model="TNNCI" value="0">
  0
</label>
<label>
  <input type="radio" v-model="TNNI3" value="1">
  1
</label>
<label>
  <input type="radio" v-model="TNNI3" value="0">
  0
</label>
<label>
  <input type="radio" v-model="MYL2" value="1">
  1
</label>
<label>
  <input type="radio" v-model="MYL2" value="0">
  0
</label>
<label>
  <input type="radio" v-model="TTN" value="1">
  1
</label>
<label>
  <input type="radio" v-model="TTN" value="0">
  0
</label>

<button type="button" class="btn btn-primary" @click="adddata">Submit</button>

    </form>
</template>
<script setup>
import { addDoc,collection,firebaseStore} from '../firebase/database';
import {ref} from 'vue' 
const ledv = ref('')
const redv = ref('')
const lesv = ref('')
const resv = ref('')
const lvef = ref('')
const rvef = ref('')
const lvmass = ref('')
const rvmass = ref('')
const lsv = ref('')
const rsv = ref('')
const scar = ref('')
const gender = ref('')
const age = ref('')
const apical = ref('')
const death = ref('')
const hypertension = ref('')
const diabetes = ref('')
const myectomy = ref('')
const MYH7 = ref('')
const MYBPC3 = ref('')
const TNNT2 = ref('')
const ACTC = ref('')
const TPM1 = ref('')
const TNNCI = ref('')
const TNNI3 = ref('')
const MYL2 = ref('')
const TTN = ref('')

async function adddata(){
    const data ={
        ledv: ledv.value,
        redv: redv.value,
        lesv: lesv.value,
        resv: resv.value,
        lvef: lvef.value,
        rvef: rvef.value,
        lvmass: lvmass.value,
        rvmass: rvmass.value,
        lsv: lsv.value,
        rsv: rsv.value,
        scar: scar.value,
        gender: gender.value,
        age: age.value,
        apical: apical.value,
        death: death.value,
        hypertension: hypertension.value,
        diabetes: diabetes.value,
        myectomy: myectomy.value,
        MYH7: MYH7.value,
        MYBPC3: MYBPC3.value,
        TNNT2: TNNT2.value,
        ACTC: ACTC.value,
        TPM1: TPM1.value,
        TNNCI: TNNCI.value,
        TNNI3: TNNI3.value,
        MYL2: MYL2.value,
        TTN: TTN.value
    };
     const hcmdoc=collection(firebaseStore,'hcms');
     await addDoc (hcmdoc,data)
     console.log("sucess")
}
</script>

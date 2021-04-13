<template>
    <Page actionBarHidden="true">
      <GridLayout @loaded="onViewLoaded" columns="*" rows="*">
        <Image stretch="aspectFill" height="100%" width="100%" row="0" col="0" rowSpan="2" :src="backgroundImage"/>

        <GridLayout class="page" columns="*" rows="auto,*">
          <Toolbar row="0" col="0" :title="title" :leftTap="onHamburgerButtonTapped" :rightTap="onProfileImageTapped">
            <Label slot="left" class="mdi icon" :text="hamburgerUnicode"/>
            <GridLayout rows="*" columns="*,auto" slot="right">
              <Image col="1" class="toolbar-profile-image" 
              :src="(profile != null && profile.image != null) ? profile.image : avatarPlaceholder"/>
            </GridLayout>

          </Toolbar>

          <GridLayout row="1" col="0" columns="*,*" rows="auto,auto,auto,auto">
            <Label marginBottom="4" row="0" col="0" colSpan="2" class="sub-title" :text="subTitle"/>

            <StackLayout marginBottom="8" orientation="vertical" row="1" col="0" colSpan="2">
              <Label :text="nameHouseholdHint" class="hint white"/>
              <TextField v-model="householdName" class="et-primary"/>
            </StackLayout>
            
            <GridLayout @tap="onCopyButtonTapped" marginBottom="8" row="2" col="0" width="100%" rows="auto,auto" columns="auto,auto">
              <Label row="0" col="0" colSpan="2" :text="householdCodeText" class="white"/>
              <Label fontSize="16" :text="inviteCode" row="1" col="0" class="white"/>
              <Label row="1" col="1" :text="copyUnicode" class="mdi small-icon"/>
            </GridLayout>

            <GridLayout @tap="onShareButtonTapped" marginBottom="8" row="2" col="1" width="100%" rows="auto" columns="*,auto,auto">
              <Label fontSize="16" :text="inviteText" row="0" col="1" class="white"/>
              <Label row="0" col="2" :text="shareUnicode" class="mdi small-icon"/>
            </GridLayout>

            <Button row="3" colSpan="2" class="btn-primary" :text="createHouseholdText" @tap="onSubmitButtonTapped"/>
 
          </GridLayout>
        </GridLayout>

      </GridLayout>
    </Page>
</template>

<script lang="ts">
import Toolbar from "../toolbar/Toolbar.vue";
import MDIButton from "../button/MDIButton.vue";
import { EventData } from '@nativescript/core/data/observable';
var dialogs = require("tns-core-modules/ui/dialogs");
import * as SocialShare from "nativescript-social-share";

  export default {
    data() {
      return {
        title: "Huishouden",
        profile: null,
        avatarPlaceholder: "~/assets/images/avatar.png",
        backgroundImage: "~/assets/images/avatar.png",
        inviteCode: "HM-43FGH23",
        invitationText: "Hey ik heb je uitgenodigd om mee te doen aan mijn huishouden. Download de huishouden app en gebruik deze code: ",
        subTitle: "Maak een huishouden aan",
        nameHouseholdHint: "Naam huishouden",
        nameHousehold: "",
        householdCodeText: "Huishoud code:",
        inviteText: "Nodig huisgenoten uit",
        createHouseholdText: "Maak huishouden aan",
        hamburgerUnicode: this.$store.getters.getFontUnicodes.hamburgerUnicode,
        shareUnicode: this.$store.getters.getFontUnicodes.shareUnicode,
      }
    },
    methods: {
      onViewLoaded(evt: EventData) {
        //TODO: Create draft household
      },
      onHamburgerButtonTapped(evt: EventData) {
        //TODO: Open hamburger menu
      },
      onShareButtonTapped(evt: EventData) {
        SocialShare.shareText(`${this.invitationText}${this.inviteCode}`);
      },
      onProfileImageTapped(evt: EventData) {
        console.log("Profile Image tapped");

      },
      onSubmitButtonTapped(evt: EventData) {
        console.log("Create button tapped");
      },
      onCopyButtonTapped(evt: EventData) {
        console.log("Copy button tapped");
      }
    },
    components: {
      Toolbar
    },
    computed: {
    }
  }
</script>

<style scoped lang='scss'>
@import '../../app.scss';
.icon {
  font-size: 32;
  color: $clr-white;
}

.small-icon {
  font-size: 18;
  color: $clr-white;
}

.toolbar-profile-image {
  width: 40;
  height: 40;
  border-radius: 20;
}

.page {
  padding: 8 24 8 24;
}

.sub-title {
  font-size: 24;
  color: $clr-white;
}
</style>

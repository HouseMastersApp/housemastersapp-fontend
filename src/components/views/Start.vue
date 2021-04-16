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

          <GridLayout row="1" col="0" columns="*,*" rows="auto,auto,auto,auto,auto,*,auto,auto">
            <GridLayout col="1" width="100%" row="0" rows="auto" columns="*,auto">
              <Label @tap="onShareButtonTapped" row="0" col="1" :text="shareUnicode" class="mdi icon"/>
            </GridLayout>

            <GridLayout colSpan="2" rowSpan="2"  rows="*,30,30,*" columns="*,auto,*">
              <Label colSpan="3" rowSpan="4" :text="starUnicode" class="mdi icon center" fontSize="156"/>
              <Label height="40" class="center points" fontSize="24" row="1" col="1" :text="points"/>
              <Label height="40" class="center points" fontSize="18" row="2" col="1" :text="pointsText"/>
            </GridLayout>
            
            <GridLayout rows="auto,auto" marginBottom="10" class="tasks" columns="*,30,20,30,*" row="2" colSpan="2">
              <Label :text="taskAmount" class="label" row="0" col="1"/>
              <Label text="/" class="white center" fontSize="24" width="20" row="0" col="2"/>
              <Label :text="maxTaskAmount" class="label" row="0" col="3"/>
              <Label :text="tasksText" row="1" col="1" colSpan="3" width="100%" class="center white"/>
            </GridLayout>

            <MDIButton height="40" :tap="onAddTaskButtonTapped" row="4" col="0" colSpan="2" :text="addTaskText" variant="horizontal" :unicode="plusUnicode" fontSize="18" iconSize="24" iconColor="green"/>

            <MDIButton height="100" marginRight="4" marginBottom="4" :tap="onOverviewButtonTapped" row="6" col="0" :text="overviewText" variant="vertical" :unicode="overviewUnicode" fontSize="16" iconSize="24" />
            <MDIButton height="100" marginLeft="4" marginBottom="4" :tap="onAddTaskButtonTapped" row="6" col="1" :text="addTaskText" variant="vertical" :unicode="plusUnicode" fontSize="16" iconSize="24" />
            <MDIButton height="100" marginRight="4" marginTop="4" :tap="onInviteButtontapped" row="7" col="0" :text="inviteText" variant="vertical" :unicode="inviteUnicode" fontSize="16" iconSize="24" />
            <MDIButton height="100" marginLeft="4" marginTop="4" :tap="onPriceButtonTapped" row="7" col="1" :text="priceText" variant="vertical" :unicode="priceUnicode" fontSize="16" iconSize="24" />
          </GridLayout>
        </GridLayout>

      </GridLayout>
    </Page>
</template>

<script lang="ts">
import Toolbar from "../toolbar/Toolbar.vue";
import MDIButton from "../button/MDIButton.vue";
import CreateHouseholdViewVue from "./CreateHouseholdView.vue";
import { EventData } from '@nativescript/core/data/observable';
var dialogs = require("tns-core-modules/ui/dialogs");
//import * as SocialShare from "nativescript-social-share";
//import { openCamera, openSingleImagePicker } from "../../utils/cameraUtils.js";
import { ImageAsset } from '@nativescript/core';

  export default {
    data() {
      return {
        title: "Start",
        profile: null,
        avatarPlaceholder: "~/assets/images/avatar.png",
        backgroundImage: "~/assets/images/avatar.png",
        pointsText: "Punten",
        addTaskText: "Voeg een taak toe",
        priceText: "Prijs",
        overviewText: "Overzicht",
        inviteText: "Nodig nieuwe House Master uit",
        tasksText: "Taken",
        shareText: "Hey ik heb al ongeloofelijk veel punten gehaald deze week! Punten:",
        taskAmount: 5,
        maxTaskAmount: 10,
        points: 25,

        shareUnicode: '\uf123',//this.$store.getters.getFontUnicodes.shareUnicode,
        plusUnicode: '\uf123',//this.$store.getters.getFontUnicodes.plusUnicode,
        priceUnicode: '\uf123',//this.$store.getters.getFontUnicodes.priceUnicode,
        inviteUnicode: '\uf123',//this.$store.getters.getFontUnicodes.inviteUnicode,
        overviewUnicode: '\uf123',//this.$store.getters.getFontUnicodes.overviewUnicode,
        hamburgerUnicode: '\uf123',//this.$store.getters.getFontUnicodes.hamburgerUnicode,
        starUnicode: '\uf123',//this.$store.getters.getFontUnicodes.starUnicode,
      }
    },
    methods: {
      onViewLoaded(evt: EventData) {
        let message = "Wilt u een household starten of bent u uitgenodigd?";
        let close = "Close app";
        let start = "Starten";
        let invite = "Uitgenodigd";

        dialogs.action(message, close, [start, invite])
        .then(result => {
          console.log(result);
          switch(result) {
            case start:
              this.$navigateTo(CreateHouseholdViewVue);
              break;
            case invite:
              //TODO: Open join household view
              break;
            case close:
              //this.onViewLoaded();
              break;
            default:
              //this.onViewLoaded();
          }
        });
      },
      onHamburgerButtonTapped(evt: EventData) {
        //TODO: Open hamburger menu
      },
      onShareButtonTapped(evt: EventData) {
        ///SocialShare.shareText(`${this.shareText}${this.points}`);
      },
      onProfileImageTapped(evt: EventData) {
        let message = "Hoe wil je foto wijzigen?";
        let close = "Afwijzen";
        let camera = "Camera";
        let gallery = "Gallerij";

        dialogs.action(message, close, [camera, gallery])
        .then(result => {
          console.log(result);
          switch(result) {
            case camera:
              //openCamera(this.onProfileImageCallback);
              break;
            case gallery:
              //openSingleImagePicker(this.onProfileImageCallback);
              break;
            case close:
              this.$navigateBack();
              break;
            default:
              this.$navigateBack();
          }
        });
      },
      onAddTaskButtonTapped(mdibutton) {
        console.log("Add task button tapped");
      },
      onPriceButtonTapped(evt: EventData) {
        console.log("Price button tapped");
      },
      onOverviewButtonTapped(evt: EventData) {
        console.log("Overview button tapped");
      },
      onInviteButtonTapped(evt: EventData) {
        //TODO: Open invite view.
      },
      onProfileImageCallback(imageAsset: ImageAsset) {
        console.log("Received image asset");
      }
    },
    components: {
      Toolbar,
      MDIButton
    },
    computed: {
    }
  }
</script>

<style scoped lang='scss'>
@import '../../app.scss';

.points {
  font-weight: bold;
  color: $clr-orange;
}
.icon {
  font-size: 32;
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

.tasks Label {
  font-size: 18;
}

.tasks .label {
  background-color: $clr-white;
  height: 30;
  width: 30;
  border-radius: 5;
  text-align: center;
  padding: 4 0;
  color: #000;
}
</style>

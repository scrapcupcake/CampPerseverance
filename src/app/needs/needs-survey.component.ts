import {Component} from '@angular/core';
import {NeedsSection} from './needs-section.component';
import {NeedsItem} from './needs-item.component';

@Component({
    directives: [NeedsItem, NeedsSection],
    template: `
    <div>
        <needs-section class="Urgent" title="Campwide Needs" desc="List all the things you can think of that we all use, including:">\
            <needs-item title="Gasoline" desc="To power the generator" usage="3 Gallons/Day"></needs-item>
        </needs-section>
        <needs-section class="Urgent" title="" desc="">
            <textarea cols="90" rows="14"></textarea>
        </needs-section>
        <needs-section class="Basic" title="Campwide Wants" desc="Things that the entire camp likes, especially to eat:">\
            <needs-item title="NutterButters" desc="To power the people" usage="Lots, apparently, who knew?"></needs-item>
        </needs-section>
        <needs-section class="Basic" title="" desc="">
            <textarea cols="90" rows="14"></textarea>
        </needs-section>
        <needs-section class="Urgent" title="Camper Needs" desc="Personal needs, will be put on the final list as a tally:">\
            <needs-item title="Health Care" desc="To heal the people" usage=""></needs-item>
            <needs-item title="Job Placement" desc="To heal the wallets of the people" usage=""></needs-item>
            <needs-item title="Day Labor" desc="Same" usage=""></needs-item>
        </needs-section>
        <needs-section class="Urgent" title="" desc="">
            <textarea cols="90" rows="35"></textarea>
        </needs-section>
    </div>`
    
})
export class NeedsSurvey {

}
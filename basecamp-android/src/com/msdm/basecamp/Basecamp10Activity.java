package com.msdm.basecamp;

import com.phonegap.*;
import android.os.Bundle;

public class Basecamp10Activity extends DroidGap {
    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        super.loadUrl("file:///android_asset/www/index.html");
        super.setIntegerProperty("loadUrlTimeoutValue", 120000);
    }
}

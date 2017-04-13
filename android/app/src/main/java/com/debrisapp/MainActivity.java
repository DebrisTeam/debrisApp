package com.debrisapp;

import android.os.Bundle;

import com.facebook.react.ReactActivity;
import com.cboy.rn.splashscreen.SplashScreen;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "debrisApp";
    }
    
    /*
     * 添加启动屏
     */
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this,true);  // 添加这一句
        super.onCreate(savedInstanceState);
    }
}

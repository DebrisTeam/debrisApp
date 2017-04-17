package com.debrisapp;

import android.app.Application;

import com.facebook.react.ReactApplication;
<<<<<<< HEAD
import com.beefe.picker.PickerViewPackage;
import com.imagepicker.ImagePickerPackage;
=======
import com.cboy.rn.splashscreen.SplashScreenReactPackage;
>>>>>>> f14d995dd779eae9bdea8d31057c42c3138b0bc6
import com.oblador.vectoricons.VectorIconsPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
<<<<<<< HEAD
            new PickerViewPackage(),
            new ImagePickerPackage(),
=======
            new SplashScreenReactPackage(),
>>>>>>> f14d995dd779eae9bdea8d31057c42c3138b0bc6
            new VectorIconsPackage()
      );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}

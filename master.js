!(function (t) {
  var F,
    D,
    U,
    R,
    N,
    G,
    H,
    z,
    q,
    X,
    Q,
    J,
    Y,
    K,
    W,
    Z,
    $,
    ee,
    te,
    ne,
    ie,
    oe,
    de,
    ae,
    se,
    ce,
    le,
    ue,
    re,
    _e,
    me,
    fe,
    he,
    pe,
    ge,
    ve,
    ye,
    we,
    xe,
    be,
    Ae,
    ke,
    Ce,
    Se,
    Ee,
    Pe,
    Ie,
    je,
    Me,
    Be,
    Le,
    Oe,
    Ve,
    Te,
    Fe,
    De,
    Ue,
    Re,
    Ne,
    Ge,
    He,
    ze,
    qe,
    Xe,
    Qe,
    Je,
    Ye,
    Ke,
    We,
    Ze,
    $e,
    et,
    tt,
    nt,
    it,
    ot,
    dt,
    at,
    st,
    ct,
    lt,
    ut,
    rt,
    _t,
    mt,
    ft,
    ht,
    pt,
    gt,
    vt,
    yt,
    wt,
    xt,
    bt,
    At,
    kt,
    Ct,
    St,
    Et,
    Pt,
    It,
    jt,
    Mt,
    Bt,
    Lt,
    Ot,
    Vt,
    Tt,
    Ft,
    Dt,
    Ut,
    Rt,
    Nt,
    Gt,
    Ht,
    zt,
    qt,
    Xt,
    Qt,
    Jt,
    Yt,
    Kt,
    Wt,
    Zt,
    $t,
    en,
    tn,
    nn,
    on,
    dn,
    an,
    sn,
    cn,
    ln,
    un,
    rn,
    _n,
    mn,
    fn,
    hn,
    pn,
    gn,
    vn,
    yn,
    wn,
    xn,
    bn,
    An,
    kn,
    Cn,
    Sn,
    En,
    Pn,
    In,
    jn,
    Mn,
    Bn,
    Ln,
    On,
    Vn,
    Tn,
    Fn,
    Dn,
    Un,
    Rn,
    Nn,
    Gn,
    Hn,
    zn,
    qn,
    Xn,
    Qn,
    Jn,
    Yn,
    Kn,
    Wn,
    Zn,
    $n,
    ei,
    ti,
    ni,
    ii,
    oi,
    di,
    ai,
    si,
    ci,
    li,
    ui,
    ri,
    _i,
    mi,
    fi,
    hi,
    pi,
    gi,
    vi,
    yi,
    wi,
    xi,
    bi,
    Ai,
    ki,
    Ci,
    Si,
    Ei,
    Pi,
    Ii,
    ji,
    Mi,
    Bi,
    Li,
    Oi,
    Vi,
    Ti,
    Fi,
    Di,
    Ui,
    Ri,
    Ni,
    Gi,
    Hi,
    zi,
    qi,
    Xi,
    Qi,
    Ji,
    Yi,
    Ki,
    Wi,
    Zi,
    $i,
    eo,
    to,
    no,
    io,
    oo,
    ao,
    so,
    co,
    lo,
    uo,
    ro,
    _o,
    mo,
    fo,
    ho,
    po,
    go,
    vo,
    yo,
    wo,
    xo,
    bo,
    Ao,
    ko,
    Co,
    So,
    Eo,
    Po,
    Io,
    jo,
    Mo,
    Bo,
    Lo,
    Oo,
    Vo,
    To,
    Fo,
    Do,
    Uo,
    Ro,
    No,
    Go,
    Ho,
    zo,
    qo,
    Xo,
    Qo,
    Jo,
    Yo,
    Ko,
    Wo,
    Zo,
    $o,
    ed,
    td,
    nd,
    id,
    od,
    dd,
    ad,
    sd,
    cd,
    ld,
    ud,
    rd,
    _d,
    md,
    fd,
    hd,
    pd,
    gd,
    vd,
    yd,
    wd,
    xd,
    bd,
    Ad,
    kd,
    Cd,
    Sd,
    Ed,
    Pd,
    Id,
    jd,
    Md,
    Bd,
    Ld,
    Od,
    Vd,
    Td,
    Fd,
    Dd,
    e = "object" == typeof global && global,
    Ud =
      ((e.global !== e && e.window !== e && e.self !== e) || (t = e),
      '<div id="body_container" style="margin:0px auto;"><div id="scene1" class="screen_size" style="background-color:rgba(0, 0, 0, 1);"><div id="dialog_loading" class="screens dialogs hide" style="z-index:98;margin-top:50vh;overflow:visible;"><div class="loading"><div></div><div></div><div></div><div></div></div></div><div id="main_remove_dialog" class="screens hide" style="z-index:100;background:rgba(0, 0, 0, 0.75);"><div class="dialog_exit" style="width:75%;margin-left:12.5%;"><div id="main_dialog_remove" class="exit_text"></div><div style="text-align:center;margin-bottom:4%;"><div id="remove_cancel" class="button_dialog_focused button_dialog" style="margin-left:0%;"></div><div id="remove_yes" class="button_dialog"></div></div></div></div><div id="main_dialog_user" class="screens hide" style="z-index:100;background:rgba(0, 0, 0, 0.75);"><div class="dialog_exit" style="width:80%;margin-left:10%;"><div id="main_dialog_user_text" class="exit_text"></div><div style="text-align:center;margin-bottom:4%;"><div id="main_dialog_user_first" class="button_dialog_focused button_dialog" style="margin-left:0%;"></div><div id="main_dialog_user_key" class="button_dialog" style="width:35%;"></div><div id="main_dialog_user_remove" class="button_dialog" style="width:22%;"></div></div></div></div><div id="main_dialog_exit" class="screens hide" style="z-index:100;background:rgba(0, 0, 0, 0.75);"><div class="dialog_exit"><div id="main_dialog_exit_text" class="exit_text"></div><div style="text-align:center;margin-bottom:4%;"><div id="exit_app_cancel" class="button_dialog_focused button_dialog" style="margin-left:0%;"></div><div id="exit_app_minimize" class="button_dialog"></div><div id="exit_app_close" class="button_dialog"></div></div></div></div><div id="dialog_period" class="screens hide" style="z-index:100;background:rgba(0, 0, 0, 0.75);"><div class="dialog_period"><div id="dialog_period_text" class="exit_text"></div><div style="text-align:center;margin-bottom:4%;"><div id="dialog_period_1" class="button_dialog" style="margin-left:0%;"></div><div id="dialog_period_2" class="button_dialog"></div><div id="dialog_period_3" class="button_dialog"></div><div id="dialog_period_4" class="button_dialog"></div></div></div></div><div id="dialog_OffSet" class="screens hide" style="z-index:100;background:rgba(0, 0, 0, 0.75);"><div class="dialog_period"><div id="dialog_OffSet_text" class="exit_text"></div><div id="dialog_OffSet_text_summary" class="exit_text"></div><div style="text-align:center;margin-bottom:4%;color:#FFFFFF;font-size:200%;"><div class="settings_arraw_div"><div id="dialog_OffSet_left" class="left" style="opacity:1;"></div></div><div id="dialog_OffSet_val" class="strokedeline settings_value settings_value_focus"></div><div class="settings_arraw_div"><div id="dialog_OffSet_right" class="right" style="opacity:1;"></div></div></div></div></div><div id="dialog_warning" class="strokedeline dialogs hide" style="z-index:100;margin-top:31%;width:80%;margin-left:10%;"><div id="dialog_warning_text" class="strokedeline" style="font-size:150%;"></div></div><div id="dialog_about" class="screens hide" style="z-index:200;background:rgba(0, 0, 0, 0.75);"><div class="about_dialogs" style="width:95%;margin-left:2.5%;"><div id="dialog_about_text" class="about_text"></div></div></div><div id="dialog_controls" class="screens hide" style="z-index:200;background:rgba(0, 0, 0, 0.75);"><div class="about_dialogs" style="width:85%;margin-left:7.5%;"><div id="dialog_controls_text" class="controls_text"></div></div></div><div id="dialog_counter" style="position:absolute;z-index:101;width:100%;bottom:0;"><div style="float:right;width:auto;height:auto;background:linear-gradient(to top, black, rgba(0, 0, 0, 0.75));"><div id="dialog_counter_text" class="counter_class"></div></div></div><div id="dialog_settings" class="screens hide" style="z-index:99;background:rgba(0, 0, 0, 0.75);"><div class="about_dialogs" style="width:98%;margin-left:1%;"><div id="dialog_settings_text" class="about_text" style="font-size:90%;"></div></div></div><div id="screens_holder" class="screens"><div id="UserChannels_scroll" class="screen_holder_channel hide"><div id="stream_table_user_channels" class="streams_div" style="margin-left:6.5%;"></div></div><div id="SearchChannels_scroll" class="screen_holder_channel hide"><div id="stream_table_search_channel" class="streams_div"></div></div><div id="channel_content_scroll" class="screen_holder_switch hide"><div id="stream_table_channel_content" class="streams_div"><div><div id="channel_content_celly_0" class="stream_cell_period"><div id="channel_content_thumbdivy_0" class="stream_thumbnail_channel_vod"><div id="channel_content_titley_0" class="stream_channel_follow_game"></div></div></div><div id="channel_content_celly_1" class="stream_cell_period"><div id="channel_content_thumbdivy_1" class="stream_thumbnail_channel_vod"><div id="channel_content_titley_1" class="stream_channel_follow_game"></div></div></div><div id="channel_content_celly_2" class="stream_cell_period"><div id="channel_content_thumbdivy_2" class="stream_thumbnail_channel_vod"><div id="channel_content_titley_2" class="stream_channel_follow_game"></div></div></div></div><div id="channel_content_row0"><div class="stream_thumbnail_live_holder"><div class="stream_thumbnail_live"><div id="channel_content_thumbdiv0_1" class="stream_thumbnail_live_img"></div></div></div><div id="channel_content_cell0_1" class="stream_thumbnail_live_holder"><div id="channel_content_thumbdiv0_0" class="stream_thumbnail_live"></div></div><div class="stream_thumbnail_live_holder" style="padding-right:0;padding-left:0;"><div class="stream_thumbnail_live"><div id="channel_content_infodiv0_1" class="stream_thumbnail_live_text_holder channel_about"></div></div></div></div><div id="channel_content_img0_1"></div></div></div><div id="Clip_scroll" class="screen_holder_switch hide"><div id="stream_table_clip" class="streams_div"></div></div><div id="ChannelClip_scroll" class="screen_holder_switch hide"><div id="stream_table_channel_clip" class="streams_div"></div></div><div id="AGameClip_scroll" class="screen_holder_switch hide"><div id="stream_table_a_game_clip" class="streams_div"></div></div><div id="user_scroll" class="screen_holder_user hide"><div id="stream_table_user" class="streams_div"></div></div><div id="settings_holder" class="settings_holder hide"><div id="settings_scroll" class="screen_holder_settings"><div id="settings_main" class="settings_main"></div><div id="settings_lang" class="settings_main hide"></div></div></div><div id="Game_scroll" class="screen_holder_games hide"><div id="stream_table_games" class="streams_game_div"></div></div><div id="UserGames_scroll" class="screen_holder_games hide"><div id="stream_table_user_games" class="streams_game_div"></div></div><div id="SearchGames_scroll" class="screen_holder_games hide"><div id="stream_table_search_game" class="streams_game_div"></div></div><div id="add_user_scroll" class="screen_holder hide"><div id="add_user" class="input_text_box"><input id="user_input" class="input_class" type="text" placeholder="" /></div></div><div id="oauth_scroll" class="screen_holder hide"><div id="oauth" class="input_text_box" style="margin-top:0;"><div id="oauth_text" class="class_bold" style="color:#FFFFFF;font-size:88%;"></div><input id="oauth_input" class="input_class" type="text" placeholder="" /></div></div><div id="search_scroll" class="screen_holder hide"><div id="search" class="input_text_box" style="margin-top:10%;"><input id="search_input" class="input_class" type="text" placeholder="" /><div id="chanel_button" class="button_search"></div><div id="game_button" class="button_search"></div><div id="live_button" class="button_search"></div></div></div><div id="Live_scroll" class="screen_holder hide"><div id="stream_table_live" class="streams_div"></div></div><div id="Featured_scroll" class="screen_holder hide"><div id="stream_table_featured" class="streams_div"></div></div><div id="UserLive_scroll" class="screen_holder hide"><div id="stream_table_user_live" class="streams_div"></div></div><div id="AGame_scroll" class="screen_holder_switch hide"><div id="stream_table_a_game" class="streams_div"></div></div><div id="SearchLive_scroll" class="screen_holder hide"><div id="stream_table_search_live" class="streams_div"></div></div><div id="Vod_scroll" class="screen_holder_switch hide"><div id="stream_table_vod" class="streams_div"></div></div><div id="AGameVod_scroll" class="screen_holder_switch hide"><div id="stream_table_a_game_vod" class="streams_div"></div></div><div id="ChannelVod_scroll" class="screen_holder_switch hide"><div id="stream_table_channel_vod" class="streams_div"></div></div><div id="UserVod_scroll" class="screen_holder_switch hide"><div id="stream_table_user_vod" class="streams_div"></div></div></div><div id="topbar" class="topbar hide"><div class="top_clock"><div id="label_clock" class="icon_top_label" style="text-align:right;"></div></div><div id="controls_div" class="controls_div"><div id="label_update" class="icon_top_label hide"></div><div id="label_refresh" class="icon_top_label"></div><div id="label_side_panel" class="icon_top_label hide"></div></div><div id="top_lable" class="top_lable"></div></div><div id="side_panel_new_holder" class="hide"><div id="side_panel_movel" class="side_panel_movel side_panel_border side_panel_background_color"><div class="side_panel_fix_top"><div class="side_panel_movel_top_text"><div class="side_panel_icons"><i class="icon icon-arrow-left"></i></div>&nbsp;<span id="side_panel_movel_top_text"></span></div><div class="side_panel_new_icons_text_holder"></div><div id="side_panel_movel_new_0" class="side_panel_new_icons_text_holder" style="height:1.9em;"></div><div class="side_panel_new_icons_text_holder"></div></div><div class="side_panel_fix_top_2"><div class="side_panel_new_icons_text_holder"></div><div id="side_panel_movel_new_1" class="side_panel_new_icons_text_holder"></div><div class="side_panel_new_icons_text_holder"></div></div><div id="side_panel_movel_center" class="side_panel_fix_center"><div id="side_panel_movel_user_text_holder" class="side_panel_movel_user_text hide"><span id="side_panel_movel_user_text"></span></div><div id="side_panel_movel_new_2" class="side_panel_new_icons_text_holder"></div><div id="side_panel_movel_new_3" class="side_panel_new_icons_text_holder"></div><div id="side_panel_movel_new_4" class="side_panel_new_icons_text_holder"></div><div id="side_panel_movel_new_5" class="side_panel_new_icons_text_holder"></div><div id="side_panel_movel_new_6" class="side_panel_new_icons_text_holder"></div><div id="side_panel_movel_new_7" class="side_panel_new_icons_text_holder"></div></div><div id="side_panel_movel_bottom" class="side_panel_fix_bottom"><div class="side_panel_movel_bottom_holder"><div class="side_panel_movel_bottom_text"><div id="side_panel_movel_new_8"></div></div><div class="side_panel_movel_bottom_text"><div id="side_panel_movel_new_9"></div></div><div class="side_panel_movel_bottom_text"><div id="side_panel_movel_new_10"></div></div><div class="side_panel_movel_bottom_text"><div id="side_panel_movel_new_11"></div></div></div></div></div><div id="side_panel_fix" class="side_panel_fix"><div class="side_panel_fix_top" style="background-color:#000000;"><div class="side_panel_new_icons"></div><div id="side_panel_new_0" class="side_panel_new_icons"><div id="side_panel_new_0_img"></div></div><div class="side_panel_new_icons"></div></div><div class="side_panel_fix_top_2"><div class="side_panel_new_icons"></div><div id="side_panel_new_1" class="side_panel_new_icons"><i class="icon icon-search side_panel_new_icons_pad"></i></div><div class="side_panel_new_icons"></div></div><div id="side_panel_fix_center" class="side_panel_fix_center" style="background-color:#000000;"><div id="side_panel_new_2" class="side_panel_new_icons"><i class="icon icon-arrow-left side_panel_new_icons_pad"></i></div><div id="side_panel_new_3" class="side_panel_new_icons"><i class="icon icon-play side_panel_new_icons_pad"></i></div><div id="side_panel_new_4" class="side_panel_new_icons"><i class="icon icon-star side_panel_new_icons_pad"></i></div><div id="side_panel_new_5" class="side_panel_new_icons"><i class="icon icon-gamepad side_panel_new_icons_pad"></i></div><div id="side_panel_new_6" class="side_panel_new_icons"><i class="icon icon-movie-play side_panel_new_icons_pad"></i></div><div id="side_panel_new_7" class="side_panel_new_icons"><i class="icon icon-movie side_panel_new_icons_pad"></i></div></div><div id="side_panel_fix_botton" class="side_panel_fix_bottom" style="width:30%;background-color:#000000;"></div></div></div></div><div id="scene2" class="screen_size hide"><div id="chat_container0" class="chat_container hide"><div id="chat_inner_container" class="chat_size"><div id="chat_loggedin0" class="chat_loggedin hide"></div><div id="chat_box_holder0" class="chat_box_holder"><div style="transform:rotate(180deg);"><div id="chat_box0"></div></div></div><div id="play_chat_dialog" style="position:absolute;text-align:center;width:100%;margin-top:50%;"><div id="play_chat_dialog_text" class="strokedeline" style="display:inline-block;font-size:4vh;color:#FFFFFF;"></div></div></div></div><div id="chat_container_name0" class="chat_container_name hide"><div class="chat_container_name_text"><i class="icon-arrow-left strokicon"></i></div><div id="chat_container_name_text0" class="strokedeline chat_container_name_text" style="transform:translateY(-7%);"></div><div id="chat_container_sound_icon0" class="chat_container_name_text"><i class="icon-volume strokicon"></i></div></div><div id="scene_channel_panel" class="screen_size scene_channel_panel"><div class="playerinfo"><img id="stream_info_icon" style="padding-left:1%;padding-top:1%;padding-bottom:1%;display:inline-block;width:9.5%;" alt="" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="><div id="stream_clock" class="playclock"></div><div class="playmaininfo"><div id="stream_info_name" class="class_bold" style="font-size:160%;margin-bottom:0.2em;"></div><div id="stream_info_title"></div><div id="stream_info_game"></div><div id="stream_live_time" style="display:inline-block;width:auto;"></div><div id="stream_live_viewers" style="display:inline-block;width:auto;"></div><div id="stream_watching_time" class="playsideinfotext"></div></div></div><div id="controls_holder" class="controls_holder"></div><div id="progress_pause_holder" class="progress_pause_holder"><div id="progress_bar_div" class="progress_bar_div"><div id="progress_bar_jump_to" class="progress_bar_jump strokedeline" style="transform:translateY(-25%);"></div><div><div style="width:100%;position:relative;transform:translateY(-50%);"><div id="progress_bar_current_time" class="progress_bar_timer strokedeline"></div><div id="progress_bar" class="progress_bar_holder"><div class="progress_bar"><div id="inner_progress_bar" class="inner_progress_bar"></div></div></div><div id="progress_bar_duration" class="progress_bar_timer strokedeline"></div></div></div><div id="progress_bar_steps" class="progress_bar_jump strokedeline" style="position:relative;top:35%;transform:translateY(-110%);"></div></div><div id="pause_next_div" class="pause_next_div"><div style="width:44%;display:inline-block;text-align:right;"><div id="back_button" class="next_button" style="opacity:0;"><div id="back_button_text" class="next_text"><div id="back_button_text_name" class="next_channel strokedeline" style="text-align:right;"></div><div id="back_button_text_title" class="next_info strokedeline" style="text-align:right;"></div></div><i class="pause_button3d icon-back"></i></div></div><div style="width:5%;display:inline-block;text-align:center;margin-left:0.5ch;margin-right:0.5ch;"><div id="pause_button" class="pause_button" style="width:90%;padding-top:0.375em;padding-bottom:0.375em;"><div><i class="pause_button3d icon-pause"></i></div></div></div><div style="width:44%;display:inline-block;text-align:left;"><div id="next_button" class="next_button" style="opacity:0;"><i class="pause_button3d icon-next"></i><div id="next_button_text" class="next_text"><div id="next_button_text_name" class="next_channel strokedeline"></div><div id="next_button_text_title" class="next_info strokedeline"></div></div></div></div></div></div></div><div id="chat_send" class="chat_send screen_holder hide"><div id="dialog_warning_chat" class="dialogs hide" style="z-index:7;margin-top:1%;"><div id="dialog_warning_chat_text" class="strokedelinebig dialog_text" style="font-size:3vh;background-color:rgba(0, 0, 0, 0.7);"></div></div><div class="chat_input_text_box"><div id="chat_send_button0" class="button_chat" style="margin-top:1%;margin-left:0;"></div><div id="chat_send_button1" class="button_chat"></div><div id="chat_send_button2" class="button_chat"></div><div id="chat_send_button3" class="button_chat"></div><div id="chat_send_button4" class="button_chat"></div><div id="chat_send_button5" class="button_chat"></div><div id="chat_send_button6" class="button_chat" style="margin-left:0;"></div><div id="chat_send_button7" class="button_chat"></div><div id="chat_send_button8" class="button_chat"></div><div id="chat_send_button9" class="button_chat"></div><div id="chat_send_button10" class="button_chat"></div><div id="chat_send_button11" class="button_chat"></div><input id="chat_send_input" class="chat_input_class" onfocus="this.value = this.value;" type="text" placeholder="" /><div id="chat_result" class="chat_result"></div><div class="chat_result_holder"><div class="chat_result_holder_inner"><div id="chat_result_text" class="chat_result_text"></div></div></div><div id="chat_state" class="chat_result"></div></div></div><div id="chat_options" class="screens hide" style="z-index:99;"><div class="about_dialogs" style="width:96%;margin-left:2%;"><div id="chat_options_text" class="about_text" style="font-size:98%;"></div></div></div><div id="chat_emotes_holder" class="chat_emotes_holder hide"><div id="chat_emotes_text" class="chat_emotes_text"></div><div id="chat_emotes_div" class="chat_emotes_div"><div id="chat_emotes" class="chat_emotes"></div></div><div id="chat_emotes_counter" class="chat_emotes_counter"></div></div><div id="playsideinfo" class="playsideinfo hide"><div id="stream_quality" class="playsideinfostatus"></div><div id="stream_status" class="playsideinfostatus"></div></div><div id="scene2_dialogs" style="display:flex;position:absolute;width:100%;height:100%;z-index:2;"><div id="dialog_vod_start" class="dialogs hide" style="z-index:3;font-size:150%;height:75%;margin-top:25%;"><div id="dialog_vod_text" class="strokedeline" style="font-size:140%;padding-bottom:2%;"></div><div id="dialog_vod_0" class="dialog_end_icons_start dialog_end_icons_focus"><i class="icon-history strokicon" style="font-size:225%;"></i><div id="dialog_vod_saved_text" class="strokedeline"></div></div><div id="dialog_vod_1" class="dialog_end_icons_start"><i class="icon-play strokicon" style="font-size:225%;"></i><div id="dialog_vod_start_text" class="strokedeline"></div></div></div><div id="dialog_end_stream" class="dialogs hide" style="z-index:4;font-size:150%;height:100%;background-color:rgba(0, 0, 0, 0.8);"><div id="dialog_end_stream_text" class="strokedeline" style="margin-top:15%;font-size:145%;padding-bottom:1%;"></div><div id="dialog_end_-1" class="dialog_end_icons hide"><i class="icon-next strokicon icon_end"></i><div id="dialog_end_next_text" class="strokedeline"></div><div class="end_texts_holder"><div id="end_next_button_text_name" class="end_text next_channel strokedeline"></div><div id="end_next_button_text_title" class="next_info_dialog strokedeline"></div></div></div><div id="dialog_end_0" class="dialog_end_icons dialog_end_icons_focus"><i class="icon-refresh strokicon icon_end"></i><div id="dialog_end_replay_text" class="strokedeline"></div><div class="end_texts_holder"><div id="end_replay_name_text" class="end_text next_channel strokedeline"></div><div id="end_replay_title_text" class="next_info_dialog strokedeline"></div></div></div><div id="dialog_end_1" class="dialog_end_icons"><i class="icon-play strokicon icon_end"></i><div id="dialog_end_vod_text" class="strokedeline"></div><div class="end_texts_holder"><div id="end_vod_name_text" class="end_text next_channel strokedeline"></div><div id="end_vod_title_text" class="next_info_dialog strokedeline"></div></div></div><div id="dialog_end_2" class="dialog_end_icons"><i class="icon-filmstrip strokicon icon_end"></i><div id="dialog_end_channel_text" class="end_text strokedeline"></div><div id="end_channel_name_text" class="strokedeline" style="font-size:85%;overflow:hidden;text-overflow:ellipsis;"></div></div><div id="dialog_end_3" class="dialog_end_icons"><i class="icon-gamepad strokicon" style="font-size:6.75vh;"></i><div id="dialog_end_game_text" class="strokedeline"></div><div class="end_texts_holder"><div id="end_game_name_text" class="end_text next_channel strokedeline" style="text-align:center;"></div></div></div></div><div id="dialog_loading_play" class="screen_size dialogs hide" style="z-index:98;margin-top:50vh;overflow:visible;"><div class="loading"><div></div><div></div><div></div><div></div></div></div><div id="play_dialog_exit" class="dialogs hide" style="z-index:6;margin-top:11%;"><div id="play_dialog_exit_text" class="strokedelinebig" style="font-size:230%;"></div></div><div id="dialog_warning_play" class="dialogs hide" style="z-index:7;margin-top:10%;"><div id="dialog_warning_play_text" class="strokedelinebig" style="font-size:140%;"></div></div><div id="dialog_warning_play_middle" class="dialogs hide" style="z-index:101;margin-top:50vh;"><div id="dialog_warning_play_middle_text" class="strokedelinebig dialog_text" style="font-size:140%;"></div></div></div></div><div id="scenefeed" class="feed_screen"><div id="user_feed_notify" class="user_feed_notify user_feed_notify_hide" style="margin-top:-20%;"><div id="user_feed_notify_content" class="side_panel_not"><div id="user_feed_notify_main" class="class_bold" style="text-align:center;"></div><div><div id="user_feed_notify_img_holder" class="side_panel_iner_div1"></div><div class="notification_holder"><div id="user_feed_notify_name" class="notification_name"></div><div id="user_feed_notify_title" class="notification_title"></div><div id="user_feed_notify_game" class="notification_game"></div></div></div></div></div><div id="user_feed" class="user_feed user_feed_hide"><div id="icon_feed_refresh" class="icon_feed_refresh"></div><div id="dialog_loading_feed" class="dialogs_feed hide" style="margin-top:5.5%;overflow:visible;"><div class="loading"><div></div><div></div><div></div><div></div></div></div><div id="user_feed_scroll" class="user_feed_scroll user_feed_scroll_ani"></div></div><div id="side_panel_feed_thumb" class="side_panel_feed_thumb hide"><div class="stream_thumbnail_clip"><img id="feed_thumb_img" class="stream_img_side" alt="" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="></div><div class="side_panel_feed_thumb_text_holder"><div class="stream_text_holder"><div id="feed_thum_name" class="side_panel_feed_thumb_text class_bold" style="width:75%;display:inline-block;font-size:110%;"></div><div id="feed_thum_quality" class="side_panel_feed_thumb_text" style="width:24%;float:right;text-align:right;"></div><div id="feed_thum_title" class="side_panel_feed_thumb_title_text"></div><div id="feed_thum_game" class="side_panel_feed_thumb_text"></div><div id="feed_thum_views" class="side_panel_feed_thumb_text"></div></div></div></div><div id="side_panel" class="side_panel side_panel_border side_panel_background_color side_panel_hide" style="margin-left:-31.5%;"><div id="side_panel_new" style="width:100%;position:absolute;"><div id="side_panel_feed_holder" style="width:94%;margin-left:6%;"><div id="dialog_loading_side_feed" class="side_panel_dialog hide"><div class="loading"><div></div><div></div><div></div><div></div></div></div><div id="side_panel_row_0"><div id="side_panel_cell0_0" style="width:100%;display:inline-block;padding:1%;"><div id="side_panel_thumbdiv0_0" class="side_panel_div"><div id="side_panel_feed_1" class="side_panel_feed_top"><div class="side_panel_icons"><i class="icon icon-arrow-right"></i></div>&nbsp;<span id="side_panel_feed_settings"></span></div><div id="side_panel_feed_2" class="side_panel_feed_top"><div class="side_panel_icons"><i class="icon icon-arrow-left"></i></div>&nbsp;<span id="side_panel_feed_refresh"></span></div></div></div></div><div id="side_panel_new_row_1" style="overflow:hidden;width:94%;position:absolute;"><div id="side_panel_holder" class="side_panel_holder_ani"></div><div id="side_panel_warn" class="side_panel_feed_top" style="display:none;"><span id="side_panel_warn_text"></span></div></div></div></div></div><div id="rest_warning" class="strokedeline dialogs hide" style="top:45vh;font-size:6vh;background:#000000;height:auto;"></div><div id="dialog_warning_extra" class="screens hide" style="z-index:9999;background:rgba(0, 0, 0, 0.75);"><div class="about_dialogs" style="width:96%;margin-left:2%;"><div id="dialog_warning_extra_text" class="about_text class_bold" style="font-size:3vh;"></div></div></div></div></div>'),
    Rd = "fglfgl27@gmail.com",
    h = "<br>",
    o =
      '<i  class="icon-circle class_bold" style="font-size: 50%; vertical-align: middle;"></i>  ',
    Nd = '<div class="about_text_title">',
    Gd = '<div class="about_text_title" style="text-align: left;">',
    Hd = '<div style="text-align: left;">',
    zd = "",
    qd = "",
    Xd = "",
    Qd = "",
    g = "&nbsp;",
    Jd = "1DuhCT6L3VfBtFcS8FNfVXgBzE2rwCPx3x",
    Yd =
      '<div style="text-align: center; width: 100%; display: inline-block; color: #0366d6;">';
  var Kd,
    Wd =
      '[{"unicode":"😀","code":"grin","id":"0_grin","4x":"https://twemoji.maxcdn.com/2/72x72/1f600.png"},{"unicode":"😃","code":"smile","id":"1_smile","4x":"https://twemoji.maxcdn.com/2/72x72/1f603.png"},{"unicode":"😄","code":"smile2","id":"2_smile2","4x":"https://twemoji.maxcdn.com/2/72x72/1f604.png"},{"unicode":"😁","code":"smile3","id":"3_smile3","4x":"https://twemoji.maxcdn.com/2/72x72/1f601.png"},{"unicode":"😆","code":"satisfied","id":"4_satisfied","4x":"https://twemoji.maxcdn.com/2/72x72/1f606.png"},{"unicode":"😅","code":"sweat","id":"5_sweat","4x":"https://twemoji.maxcdn.com/2/72x72/1f605.png"},{"unicode":"🤣","code":"rolling","id":"6_rolling","4x":"https://twemoji.maxcdn.com/2/72x72/1f923.png"},{"unicode":"😂","code":"tear","id":"7_tear","4x":"https://twemoji.maxcdn.com/2/72x72/1f602.png"},{"unicode":"🙂","code":"smile4","id":"8_smile4","4x":"https://twemoji.maxcdn.com/2/72x72/1f642.png"},{"unicode":"🙃","code":"smile-upside-down","id":"9_smile-upside-down","4x":"https://twemoji.maxcdn.com/2/72x72/1f643.png"},{"unicode":"😉","code":"wink","id":"10_wink","4x":"https://twemoji.maxcdn.com/2/72x72/1f609.png"},{"unicode":"😊","code":"smile-blush","id":"11_smile-blush","4x":"https://twemoji.maxcdn.com/2/72x72/1f60a.png"},{"unicode":"😇","code":"angel","id":"12_angel","4x":"https://twemoji.maxcdn.com/2/72x72/1f607.png"},{"unicode":"🥰","code":"adore","id":"13_adore","4x":"https://twemoji.maxcdn.com/2/72x72/1f970.png"},{"unicode":"😍","code":"smile-love","id":"14_smile-love","4x":"https://twemoji.maxcdn.com/2/72x72/1f60d.png"},{"unicode":"🤩","code":"smile-star","id":"15_smile-star","4x":"https://twemoji.maxcdn.com/2/72x72/1f929.png"},{"unicode":"😘","code":"kiss","id":"16_kiss","4x":"https://twemoji.maxcdn.com/2/72x72/1f618.png"},{"unicode":"😗","code":"kiss2","id":"17_kiss2","4x":"https://twemoji.maxcdn.com/2/72x72/1f617.png"},{"unicode":"☺️","code":"relaxed","id":"18_relaxed","4x":"https://twemoji.maxcdn.com/2/72x72/263a.png"},{"unicode":"😚","code":"kiss3","id":"19_kiss3","4x":"https://twemoji.maxcdn.com/2/72x72/1f61a.png"},{"unicode":"😙","code":"kis4","id":"20_kis4","4x":"https://twemoji.maxcdn.com/2/72x72/1f619.png"},{"unicode":"😋","code":"delicious","id":"21_delicious","4x":"https://twemoji.maxcdn.com/2/72x72/1f60b.png"},{"unicode":"😛","code":"tongue","id":"22_tongue","4x":"https://twemoji.maxcdn.com/2/72x72/1f61b.png"},{"unicode":"😜","code":"tongue-wink","id":"23_tongue-wink","4x":"https://twemoji.maxcdn.com/2/72x72/1f61c.png"},{"unicode":"🤪","code":"goofy","id":"24_goofy","4x":"https://twemoji.maxcdn.com/2/72x72/1f92a.png"},{"unicode":"😝","code":"tongue-><","id":"25_tongue-><","4x":"https://twemoji.maxcdn.com/2/72x72/1f61d.png"},{"unicode":"🤑","code":"face-money","id":"26_face-money","4x":"https://twemoji.maxcdn.com/2/72x72/1f911.png"},{"unicode":"🤗","code":"hugging","id":"27_hugging","4x":"https://twemoji.maxcdn.com/2/72x72/1f917.png"},{"unicode":"🤭","code":"whoops","id":"28_whoops","4x":"https://twemoji.maxcdn.com/2/72x72/1f92d.png"},{"unicode":"🤫","code":"quiet","id":"29_quiet","4x":"https://twemoji.maxcdn.com/2/72x72/1f92b.png"},{"unicode":"🤔","code":"thinking","id":"30_thinking","4x":"https://twemoji.maxcdn.com/2/72x72/1f914.png"},{"unicode":"🤐","code":"zipper","id":"31_zipper","4x":"https://twemoji.maxcdn.com/2/72x72/1f910.png"},{"unicode":"🤨","code":"skeptic","id":"32_skeptic","4x":"https://twemoji.maxcdn.com/2/72x72/1f928.png"},{"unicode":"😑","code":"unexpressive","id":"33_unexpressive","4x":"https://twemoji.maxcdn.com/2/72x72/1f611.png"},{"unicode":"😶","code":"silent","id":"34_silent","4x":"https://twemoji.maxcdn.com/2/72x72/1f636.png"},{"unicode":"😏","code":"smirk","id":"35_smirk","4x":"https://twemoji.maxcdn.com/2/72x72/1f60f.png"},{"unicode":"😒","code":"unhappy","id":"36_unhappy","4x":"https://twemoji.maxcdn.com/2/72x72/1f612.png"},{"unicode":"🙄","code":"eyeroll","id":"37_eyeroll","4x":"https://twemoji.maxcdn.com/2/72x72/1f644.png"},{"unicode":"😬","code":"grimace","id":"38_grimace","4x":"https://twemoji.maxcdn.com/2/72x72/1f62c.png"},{"unicode":"🤥","code":"pinocchio","id":"39_pinocchio","4x":"https://twemoji.maxcdn.com/2/72x72/1f925.png"},{"unicode":"😌","code":"relieved","id":"40_relieved","4x":"https://twemoji.maxcdn.com/2/72x72/1f60c.png"},{"unicode":"😔","code":"pensive","id":"41_pensive","4x":"https://twemoji.maxcdn.com/2/72x72/1f614.png"},{"unicode":"😪","code":"sleep","id":"42_sleep","4x":"https://twemoji.maxcdn.com/2/72x72/1f62a.png"},{"unicode":"🤤","code":"drooling-face","id":"43_drooling-face","4x":"https://twemoji.maxcdn.com/2/72x72/1f924.png"},{"unicode":"😴","code":"sleep-face","id":"44_sleep-face","4x":"https://twemoji.maxcdn.com/2/72x72/1f634.png"},{"unicode":"😷","code":"cold-face","id":"45_cold-face","4x":"https://twemoji.maxcdn.com/2/72x72/1f637.png"},{"unicode":"🤒","code":"sick-face","id":"46_sick-face","4x":"https://twemoji.maxcdn.com/2/72x72/1f912.png"},{"unicode":"🤕","code":"bandage-face","id":"47_bandage-face","4x":"https://twemoji.maxcdn.com/2/72x72/1f915.png"},{"unicode":"🤢","code":"nauseated-face","id":"48_nauseated-face","4x":"https://twemoji.maxcdn.com/2/72x72/1f922.png"},{"unicode":"🤮","code":"sick-face","id":"49_sick-face","4x":"https://twemoji.maxcdn.com/2/72x72/1f92e.png"},{"unicode":"🤧","code":"sneeze","id":"50_sneeze","4x":"https://twemoji.maxcdn.com/2/72x72/1f927.png"},{"unicode":"🥵","code":"feverish","id":"51_feverish","4x":"https://twemoji.maxcdn.com/2/72x72/1f975.png"},{"unicode":"🥶","code":"blue-faced","id":"52_blue-faced","4x":"https://twemoji.maxcdn.com/2/72x72/1f976.png"},{"unicode":"🥴","code":"intoxicated","id":"53_intoxicated","4x":"https://twemoji.maxcdn.com/2/72x72/1f974.png"},{"unicode":"😵","code":"dizzy","id":"54_dizzy","4x":"https://twemoji.maxcdn.com/2/72x72/1f635.png"},{"unicode":"🤯","code":"mind blown","id":"55_mind blown","4x":"https://twemoji.maxcdn.com/2/72x72/1f92f.png"},{"unicode":"🤠","code":"cowboy","id":"56_cowboy","4x":"https://twemoji.maxcdn.com/2/72x72/1f920.png"},{"unicode":"🥳","code":"celebration","id":"57_celebration","4x":"https://twemoji.maxcdn.com/2/72x72/1f973.png"},{"unicode":"😎","code":"cool-face","id":"58_cool-face","4x":"https://twemoji.maxcdn.com/2/72x72/1f60e.png"},{"unicode":"🤓","code":"cool","id":"59_cool","4x":"https://twemoji.maxcdn.com/2/72x72/1f913.png"},{"unicode":"🧐","code":"stuffy","id":"60_stuffy","4x":"https://twemoji.maxcdn.com/2/72x72/1f9d0.png"},{"unicode":"😕","code":"confused","id":"61_confused","4x":"https://twemoji.maxcdn.com/2/72x72/1f615.png"},{"unicode":"😟","code":"worried","id":"62_worried","4x":"https://twemoji.maxcdn.com/2/72x72/1f61f.png"},{"unicode":"🙁","code":"frown","id":"63_frown","4x":"https://twemoji.maxcdn.com/2/72x72/1f641.png"},{"unicode":"☹️","code":"frown","id":"64_frown","4x":"https://twemoji.maxcdn.com/2/72x72/2639.png"},{"unicode":"😮","code":"mouth-open","id":"65_mouth-open","4x":"https://twemoji.maxcdn.com/2/72x72/1f62e.png"},{"unicode":"😯","code":"surprised","id":"66_surprised","4x":"https://twemoji.maxcdn.com/2/72x72/1f62f.png"},{"unicode":"😲","code":"astonished","id":"67_astonished","4x":"https://twemoji.maxcdn.com/2/72x72/1f632.png"},{"unicode":"😳","code":"dazed","id":"68_dazed","4x":"https://twemoji.maxcdn.com/2/72x72/1f633.png"},{"unicode":"🥺","code":"puppy eyes","id":"69_puppy eyes","4x":"https://twemoji.maxcdn.com/2/72x72/1f97a.png"},{"unicode":"😦","code":"frown","id":"70_frown","4x":"https://twemoji.maxcdn.com/2/72x72/1f626.png"},{"unicode":"😧","code":"anguished","id":"71_anguished","4x":"https://twemoji.maxcdn.com/2/72x72/1f627.png"},{"unicode":"😨","code":"fearful","id":"72_fearful","4x":"https://twemoji.maxcdn.com/2/72x72/1f628.png"},{"unicode":"😰","code":"fearful2","id":"73_fearful2","4x":"https://twemoji.maxcdn.com/2/72x72/1f630.png"},{"unicode":"😥","code":"disappointed","id":"74_disappointed","4x":"https://twemoji.maxcdn.com/2/72x72/1f625.png"},{"unicode":"😢","code":"cry-face","id":"75_cry-face","4x":"https://twemoji.maxcdn.com/2/72x72/1f622.png"},{"unicode":"😭","code":"cry-face2","id":"76_cry-face2","4x":"https://twemoji.maxcdn.com/2/72x72/1f62d.png"},{"unicode":"😱","code":"fear-face","id":"77_fear-face","4x":"https://twemoji.maxcdn.com/2/72x72/1f631.png"},{"unicode":"😖","code":"confounded","id":"78_confounded","4x":"https://twemoji.maxcdn.com/2/72x72/1f616.png"},{"unicode":"😣","code":"persevere","id":"79_persevere","4x":"https://twemoji.maxcdn.com/2/72x72/1f623.png"},{"unicode":"😞","code":"disappointed","id":"80_disappointed","4x":"https://twemoji.maxcdn.com/2/72x72/1f61e.png"},{"unicode":"😓","code":"cold","id":"81_cold","4x":"https://twemoji.maxcdn.com/2/72x72/1f613.png"},{"unicode":"😩","code":"weary","id":"82_weary","4x":"https://twemoji.maxcdn.com/2/72x72/1f629.png"},{"unicode":"😫","code":"tired","id":"83_tired","4x":"https://twemoji.maxcdn.com/2/72x72/1f62b.png"},{"unicode":"😤","code":"triumph","id":"84_triumph","4x":"https://twemoji.maxcdn.com/2/72x72/1f624.png"},{"unicode":"😡","code":"angry","id":"85_angry","4x":"https://twemoji.maxcdn.com/2/72x72/1f621.png"},{"unicode":"😠","code":"mad","id":"86_mad","4x":"https://twemoji.maxcdn.com/2/72x72/1f620.png"},{"unicode":"🤬","code":"swearing","id":"87_swearing","4x":"https://twemoji.maxcdn.com/2/72x72/1f92c.png"},{"unicode":"😈","code":"devil","id":"88_devil","4x":"https://twemoji.maxcdn.com/2/72x72/1f608.png"},{"unicode":"👿","code":"demon","id":"89_demon","4x":"https://twemoji.maxcdn.com/2/72x72/1f47f.png"},{"unicode":"💀","code":"death","id":"90_death","4x":"https://twemoji.maxcdn.com/2/72x72/1f480.png"},{"unicode":"☠️","code":"crossbones","id":"91_crossbones","4x":"https://twemoji.maxcdn.com/2/72x72/2620.png"},{"unicode":"💩","code":"poop","id":"92_poop","4x":"https://twemoji.maxcdn.com/2/72x72/1f4a9.png"},{"unicode":"🤡","code":"clown","id":"93_clown","4x":"https://twemoji.maxcdn.com/2/72x72/1f921.png"},{"unicode":"👹","code":"creature","id":"94_creature","4x":"https://twemoji.maxcdn.com/2/72x72/1f479.png"},{"unicode":"👺","code":"creature2","id":"95_creature2","4x":"https://twemoji.maxcdn.com/2/72x72/1f47a.png"},{"unicode":"👻","code":"ghost","id":"96_ghost","4x":"https://twemoji.maxcdn.com/2/72x72/1f47b.png"},{"unicode":"👾","code":"alien","id":"97_alien","4x":"https://twemoji.maxcdn.com/2/72x72/1f47e.png"},{"unicode":"🤖","code":"robot","id":"98_robot","4x":"https://twemoji.maxcdn.com/2/72x72/1f916.png"},{"unicode":"😺","code":"cat-face","id":"99_cat-face","4x":"https://twemoji.maxcdn.com/2/72x72/1f63a.png"},{"unicode":"😸","code":"cat-smile","id":"100_cat-smile","4x":"https://twemoji.maxcdn.com/2/72x72/1f638.png"},{"unicode":"😹","code":"cat-tear","id":"101_cat-tear","4x":"https://twemoji.maxcdn.com/2/72x72/1f639.png"},{"unicode":"😻","code":"cat-heart","id":"102_cat-heart","4x":"https://twemoji.maxcdn.com/2/72x72/1f63b.png"},{"unicode":"😼","code":"cat-ironic","id":"103_cat-ironic","4x":"https://twemoji.maxcdn.com/2/72x72/1f63c.png"},{"unicode":"😽","code":"cat-kiss","id":"104_cat-kiss","4x":"https://twemoji.maxcdn.com/2/72x72/1f63d.png"},{"unicode":"🙀","code":"cat-surprised","id":"105_cat-surprised","4x":"https://twemoji.maxcdn.com/2/72x72/1f640.png"},{"unicode":"😿","code":"cat-sad","id":"106_cat-sad","4x":"https://twemoji.maxcdn.com/2/72x72/1f63f.png"},{"unicode":"😾","code":"cat-pouting","id":"107_cat-pouting","4x":"https://twemoji.maxcdn.com/2/72x72/1f63e.png"},{"unicode":"👋","code":"hand-wave","id":"108_hand-wave","4x":"https://twemoji.maxcdn.com/2/72x72/1f44b.png"},{"unicode":"🤚","code":"backhand","id":"109_backhand","4x":"https://twemoji.maxcdn.com/2/72x72/1f91a.png"},{"unicode":"🖐️","code":"hand-open-finger","id":"110_hand-open-finger","4x":"https://twemoji.maxcdn.com/2/72x72/1f590.png"},{"unicode":"✋","code":"hand","id":"111_hand","4x":"https://twemoji.maxcdn.com/2/72x72/270b.png"},{"unicode":"🖖","code":"hand-vulcan","id":"112_hand-vulcan","4x":"https://twemoji.maxcdn.com/2/72x72/1f596.png"},{"unicode":"👌","code":"hand-ok","id":"113_hand-ok","4x":"https://twemoji.maxcdn.com/2/72x72/1f44c.png"},{"unicode":"✌️","code":"hand-v","id":"114_hand-v","4x":"https://twemoji.maxcdn.com/2/72x72/270c.png"},{"unicode":"🤞","code":"hand-cross","id":"115_hand-cross","4x":"https://twemoji.maxcdn.com/2/72x72/1f91e.png"},{"unicode":"🤟","code":"hand-ily","id":"116_hand-ily","4x":"https://twemoji.maxcdn.com/2/72x72/1f91f.png"},{"unicode":"🤘","code":"hand-horns","id":"117_hand-horns","4x":"https://twemoji.maxcdn.com/2/72x72/1f918.png"},{"unicode":"🤙","code":"hand-call","id":"118_hand-call","4x":"https://twemoji.maxcdn.com/2/72x72/1f919.png"},{"unicode":"🖕","code":"hand-finger","id":"119_hand-finger","4x":"https://twemoji.maxcdn.com/2/72x72/1f595.png"},{"unicode":"👈","code":"hand-point","id":"120_hand-point","4x":"https://twemoji.maxcdn.com/2/72x72/1f448.png"},{"unicode":"👇","code":"hand-poin2","id":"121_hand-poin2","4x":"https://twemoji.maxcdn.com/2/72x72/1f447.png"},{"unicode":"☝️","code":"hand-point3","id":"122_hand-point3","4x":"https://twemoji.maxcdn.com/2/72x72/261d.png"},{"unicode":"👍","code":"hand-thumb-up","id":"123_hand-thumb-up","4x":"https://twemoji.maxcdn.com/2/72x72/1f44d.png"},{"unicode":"👎","code":"hand-thumb-down","id":"124_hand-thumb-down","4x":"https://twemoji.maxcdn.com/2/72x72/1f44e.png"},{"unicode":"✊","code":"hand-punch","id":"125_hand-punch","4x":"https://twemoji.maxcdn.com/2/72x72/270a.png"},{"unicode":"👊","code":"hand-punch2","id":"126_hand-punch2","4x":"https://twemoji.maxcdn.com/2/72x72/1f44a.png"},{"unicode":"🤛","code":"hand-punch3","id":"127_hand-punch3","4x":"https://twemoji.maxcdn.com/2/72x72/1f91b.png"},{"unicode":"🤜","code":"hand-punch4","id":"128_hand-punch4","4x":"https://twemoji.maxcdn.com/2/72x72/1f91c.png"},{"unicode":"👏","code":"hand-clap","id":"129_hand-clap","4x":"https://twemoji.maxcdn.com/2/72x72/1f44f.png"},{"unicode":"🙌","code":"hand-celebration","id":"130_hand-celebration","4x":"https://twemoji.maxcdn.com/2/72x72/1f64c.png"},{"unicode":"👐","code":"hand-open","id":"131_hand-open","4x":"https://twemoji.maxcdn.com/2/72x72/1f450.png"},{"unicode":"🤲","code":"hand-prayer","id":"132_hand-prayer","4x":"https://twemoji.maxcdn.com/2/72x72/1f932.png"},{"unicode":"🤝","code":"hand-agreement","id":"133_hand-agreement","4x":"https://twemoji.maxcdn.com/2/72x72/1f91d.png"},{"unicode":"🙏","code":"hand-please","id":"134_hand-please","4x":"https://twemoji.maxcdn.com/2/72x72/1f64f.png"},{"unicode":"✍️","code":"hand-write","id":"135_hand-write","4x":"https://twemoji.maxcdn.com/2/72x72/270d.png"},{"unicode":"💅","code":"cosmetics","id":"136_cosmetics","4x":"https://twemoji.maxcdn.com/2/72x72/1f485.png"},{"unicode":"🤳","code":"self","id":"137_self","4x":"https://twemoji.maxcdn.com/2/72x72/1f933.png"},{"unicode":"💪","code":"muscle","id":"138_muscle","4x":"https://twemoji.maxcdn.com/2/72x72/1f4aa.png"},{"unicode":"🦵","code":"kick","id":"139_kick","4x":"https://twemoji.maxcdn.com/2/72x72/1f9b5.png"},{"unicode":"🦶","code":"kick2","id":"140_kick2","4x":"https://twemoji.maxcdn.com/2/72x72/1f9b6.png"},{"unicode":"👂","code":"ear","id":"141_ear","4x":"https://twemoji.maxcdn.com/2/72x72/1f442.png"},{"unicode":"👃","code":"nose","id":"142_nose","4x":"https://twemoji.maxcdn.com/2/72x72/1f443.png"},{"unicode":"🧠","code":"brain","id":"143_brain","4x":"https://twemoji.maxcdn.com/2/72x72/1f9e0.png"},{"unicode":"🦷","code":"tooth","id":"144_tooth","4x":"https://twemoji.maxcdn.com/2/72x72/1f9b7.png"},{"unicode":"👀","code":"eyes","id":"145_eyes","4x":"https://twemoji.maxcdn.com/2/72x72/1f440.png"},{"unicode":"👁️","code":"eye","id":"146_eye","4x":"https://twemoji.maxcdn.com/2/72x72/1f441.png"},{"unicode":"👅","code":"tongue2","id":"147_tongue2","4x":"https://twemoji.maxcdn.com/2/72x72/1f445.png"},{"unicode":"👄","code":"lips","id":"148_lips","4x":"https://twemoji.maxcdn.com/2/72x72/1f444.png"},{"unicode":"👶","code":"baby","id":"149_baby","4x":"https://twemoji.maxcdn.com/2/72x72/1f476.png"},{"unicode":"👨‍🦲","code":"bald","id":"150_bald","4x":"https://twemoji.maxcdn.com/2/72x72/1f468-200d-1f9b2.png"},{"unicode":"👴","code":"old-man","id":"151_old-man","4x":"https://twemoji.maxcdn.com/2/72x72/1f474.png"},{"unicode":"👵","code":"old-woman","id":"152_old-woman","4x":"https://twemoji.maxcdn.com/2/72x72/1f475.png"},{"unicode":"🔥","code":"fire","id":"153_fire","4x":"https://twemoji.maxcdn.com/2/72x72/1f525.png"},{"unicode":"👨‍🚒","code":"firefighter","id":"154_firefighter","4x":"https://twemoji.maxcdn.com/2/72x72/1f468-200d-1f692.png"},{"unicode":"👩‍🚒","code":"firefighter2","id":"155_firefighter2","4x":"https://twemoji.maxcdn.com/2/72x72/1f469-200d-1f692.png"},{"unicode":"👮‍♂️","code":"police-officer","id":"156_police-officer","4x":"https://twemoji.maxcdn.com/2/72x72/1f46e-200d-2642-fe0f.png"},{"unicode":"👮‍♀️","code":"police-officer-woman","id":"157_police-officer-woman","4x":"https://twemoji.maxcdn.com/2/72x72/1f46e-200d-2640-fe0f.png"},{"unicode":"👨‍👩‍👧‍👦","code":"family","id":"158_family","4x":"https://twemoji.maxcdn.com/2/72x72/1f468-200d-1f469-200d-1f467-200d-1f466.png"},{"unicode":"🙈","code":"monkey-see","id":"159_monkey-see","4x":"https://twemoji.maxcdn.com/2/72x72/1f648.png"},{"unicode":"🙉","code":"monkey-hear","id":"160_monkey-hear","4x":"https://twemoji.maxcdn.com/2/72x72/1f649.png"},{"unicode":"🙊","code":"monkey-speak","id":"161_monkey-speak","4x":"https://twemoji.maxcdn.com/2/72x72/1f64a.png"},{"unicode":"💋","code":"kiss-lips","id":"162_kiss-lips","4x":"https://twemoji.maxcdn.com/2/72x72/1f48b.png"},{"unicode":"💌","code":"heart-letter","id":"163_heart-letter","4x":"https://twemoji.maxcdn.com/2/72x72/1f48c.png"},{"unicode":"💘","code":"arrow-cupid","id":"164_arrow-cupid","4x":"https://twemoji.maxcdn.com/2/72x72/1f498.png"},{"unicode":"💝","code":"valentine","id":"165_valentine","4x":"https://twemoji.maxcdn.com/2/72x72/1f49d.png"},{"unicode":"💖","code":"sparkle-heart","id":"166_sparkle-heart","4x":"https://twemoji.maxcdn.com/2/72x72/1f496.png"},{"unicode":"💗","code":"pulse","id":"167_pulse","4x":"https://twemoji.maxcdn.com/2/72x72/1f497.png"},{"unicode":"💓","code":"beating","id":"168_beating","4x":"https://twemoji.maxcdn.com/2/72x72/1f493.png"},{"unicode":"💞","code":"revolving","id":"169_revolving","4x":"https://twemoji.maxcdn.com/2/72x72/1f49e.png"},{"unicode":"💕","code":"love","id":"170_love","4x":"https://twemoji.maxcdn.com/2/72x72/1f495.png"},{"unicode":"❣️","code":"exclamation","id":"171_exclamation","4x":"https://twemoji.maxcdn.com/2/72x72/2763.png"},{"unicode":"💔","code":"broken-heart","id":"172_broken-heart","4x":"https://twemoji.maxcdn.com/2/72x72/1f494.png"},{"unicode":"💟","code":"heart-Decoration","id":"173_heart-Decoration","4x":"https://twemoji.maxcdn.com/2/72x72/1f49f.png"},{"unicode":"🖤","code":"heart-black","id":"174_heart-black","4x":"https://twemoji.maxcdn.com/2/72x72/1f5a4.png"},{"unicode":"🤎","code":"heart-brown","id":"175_heart-brown","4x":"https://twemoji.maxcdn.com/2/72x72/1f90e.png"},{"unicode":"💙","code":"heart-blue","id":"176_heart-blue","4x":"https://twemoji.maxcdn.com/2/72x72/1f499.png"},{"unicode":"💚","code":"heart-green","id":"177_heart-green","4x":"https://twemoji.maxcdn.com/2/72x72/1f49a.png"},{"unicode":"🧡","code":"heart-orange","id":"178_heart-orange","4x":"https://twemoji.maxcdn.com/2/72x72/1f9e1.png"},{"unicode":"💜","code":"heart-purple","id":"179_heart-purple","4x":"https://twemoji.maxcdn.com/2/72x72/1f49c.png"},{"unicode":"❤️","code":"heart-red","id":"180_heart-red","4x":"https://twemoji.maxcdn.com/2/72x72/2764.png"},{"unicode":"🤍","code":"black-white","id":"181_black-white","4x":"https://twemoji.maxcdn.com/2/72x72/1f90d.png"},{"unicode":"💛","code":"heart-yellow","id":"182_heart-yellow","4x":"https://twemoji.maxcdn.com/2/72x72/1f49b.png"},{"unicode":"💯","code":"hundred","id":"183_hundred","4x":"https://twemoji.maxcdn.com/2/72x72/1f4af.png"},{"unicode":"💢","code":"mad","id":"184_mad","4x":"https://twemoji.maxcdn.com/2/72x72/1f4a2.png"},{"unicode":"💥","code":"boom","id":"185_boom","4x":"https://twemoji.maxcdn.com/2/72x72/1f4a5.png"},{"unicode":"💫","code":"stars","id":"186_stars","4x":"https://twemoji.maxcdn.com/2/72x72/1f4ab.png"},{"unicode":"💦","code":"splashing","id":"187_splashing","4x":"https://twemoji.maxcdn.com/2/72x72/1f4a6.png"},{"unicode":"💨","code":"comic-dash","id":"188_comic-dash","4x":"https://twemoji.maxcdn.com/2/72x72/1f4a8.png"},{"unicode":"🕳️","code":"hole","id":"189_hole","4x":"https://twemoji.maxcdn.com/2/72x72/1f573.png"},{"unicode":"💬","code":"balloon-dialog","id":"190_balloon-dialog","4x":"https://twemoji.maxcdn.com/2/72x72/1f4ac.png"},{"unicode":"🗨️","code":"dialog","id":"191_dialog","4x":"https://twemoji.maxcdn.com/2/72x72/1f5e8.png"},{"unicode":"🗯️","code":"angry-balloon","id":"192_angry-balloon","4x":"https://twemoji.maxcdn.com/2/72x72/1f5ef.png"},{"unicode":"💭","code":"balloon-bubble","id":"193_balloon-bubble","4x":"https://twemoji.maxcdn.com/2/72x72/1f4ad.png"},{"unicode":"💤","code":"comic-sleep","id":"194_comic-sleep","4x":"https://twemoji.maxcdn.com/2/72x72/1f4a4.png"},{"unicode":"🕶️","code":"glasses-dark","id":"195_glasses-dark","4x":"https://twemoji.maxcdn.com/2/72x72/1f576.png"},{"unicode":"🥽","code":"glasses-swimming","id":"196_glasses-swimming","4x":"https://twemoji.maxcdn.com/2/72x72/1f97d.png"},{"unicode":"🥼","code":"scientist","id":"197_scientist","4x":"https://twemoji.maxcdn.com/2/72x72/1f97c.png"},{"unicode":"👔","code":"tie","id":"198_tie","4x":"https://twemoji.maxcdn.com/2/72x72/1f454.png"},{"unicode":"👕","code":"tshirt","id":"199_tshirt","4x":"https://twemoji.maxcdn.com/2/72x72/1f455.png"},{"unicode":"👖","code":"pants","id":"200_pants","4x":"https://twemoji.maxcdn.com/2/72x72/1f456.png"},{"unicode":"🧣","code":"neck","id":"201_neck","4x":"https://twemoji.maxcdn.com/2/72x72/1f9e3.png"},{"unicode":"🧤","code":"hand","id":"202_hand","4x":"https://twemoji.maxcdn.com/2/72x72/1f9e4.png"},{"unicode":"🧥","code":"jacket","id":"203_jacket","4x":"https://twemoji.maxcdn.com/2/72x72/1f9e5.png"},{"unicode":"🧦","code":"stocking","id":"204_stocking","4x":"https://twemoji.maxcdn.com/2/72x72/1f9e6.png"},{"unicode":"👗","code":"clothing","id":"205_clothing","4x":"https://twemoji.maxcdn.com/2/72x72/1f457.png"},{"unicode":"👘","code":"clothing2","id":"206_clothing2","4x":"https://twemoji.maxcdn.com/2/72x72/1f458.png"},{"unicode":"👙","code":"swim-clothing","id":"207_swim-clothing","4x":"https://twemoji.maxcdn.com/2/72x72/1f459.png"},{"unicode":"👚","code":"woman-clothing","id":"208_woman-clothing","4x":"https://twemoji.maxcdn.com/2/72x72/1f45a.png"},{"unicode":"👛","code":"coin-clothing","id":"209_coin-clothing","4x":"https://twemoji.maxcdn.com/2/72x72/1f45b.png"},{"unicode":"👜","code":"purse","id":"210_purse","4x":"https://twemoji.maxcdn.com/2/72x72/1f45c.png"},{"unicode":"👝","code":"pouch","id":"211_pouch","4x":"https://twemoji.maxcdn.com/2/72x72/1f45d.png"},{"unicode":"🛍️","code":"shopping-bag","id":"212_shopping-bag","4x":"https://twemoji.maxcdn.com/2/72x72/1f6cd.png"},{"unicode":"🎒","code":"school-bag","id":"213_school-bag","4x":"https://twemoji.maxcdn.com/2/72x72/1f392.png"},{"unicode":"👞","code":"shoe","id":"214_shoe","4x":"https://twemoji.maxcdn.com/2/72x72/1f45e.png"},{"unicode":"👟","code":"sneaker","id":"215_sneaker","4x":"https://twemoji.maxcdn.com/2/72x72/1f45f.png"},{"unicode":"🥾","code":"hiking-boot","id":"216_hiking-boot","4x":"https://twemoji.maxcdn.com/2/72x72/1f97e.png"},{"unicode":"🥿","code":"ballet flat","id":"217_ballet flat","4x":"https://twemoji.maxcdn.com/2/72x72/1f97f.png"},{"unicode":"👠","code":"woman-shoe","id":"218_woman-shoe","4x":"https://twemoji.maxcdn.com/2/72x72/1f460.png"},{"unicode":"👡","code":"woman-shoe2","id":"219_woman-shoe2","4x":"https://twemoji.maxcdn.com/2/72x72/1f461.png"},{"unicode":"👢","code":"woman-boot","id":"220_woman-boot","4x":"https://twemoji.maxcdn.com/2/72x72/1f462.png"},{"unicode":"👑","code":"king","id":"221_king","4x":"https://twemoji.maxcdn.com/2/72x72/1f451.png"},{"unicode":"👒","code":"hat","id":"222_hat","4x":"https://twemoji.maxcdn.com/2/72x72/1f452.png"},{"unicode":"🎩","code":"tophat","id":"223_tophat","4x":"https://twemoji.maxcdn.com/2/72x72/1f3a9.png"},{"unicode":"🧢","code":"baseball cap","id":"224_baseball cap","4x":"https://twemoji.maxcdn.com/2/72x72/1f9e2.png"},{"unicode":"⛑️","code":"aid","id":"225_aid","4x":"https://twemoji.maxcdn.com/2/72x72/26d1.png"},{"unicode":"📿","code":"beads","id":"226_beads","4x":"https://twemoji.maxcdn.com/2/72x72/1f4ff.png"},{"unicode":"💄","code":"lipstick","id":"227_lipstick","4x":"https://twemoji.maxcdn.com/2/72x72/1f484.png"},{"unicode":"💍","code":"diamond-ring","id":"228_diamond-ring","4x":"https://twemoji.maxcdn.com/2/72x72/1f48d.png"},{"unicode":"💎","code":"diamond","id":"229_diamond","4x":"https://twemoji.maxcdn.com/2/72x72/1f48e.png"},{"unicode":"🔇","code":"mute","id":"230_mute","4x":"https://twemoji.maxcdn.com/2/72x72/1f507.png"},{"unicode":"🔉","code":"medium","id":"231_medium","4x":"https://twemoji.maxcdn.com/2/72x72/1f509.png"},{"unicode":"🔊","code":"loud","id":"232_loud","4x":"https://twemoji.maxcdn.com/2/72x72/1f50a.png"},{"unicode":"📢","code":"loud2","id":"233_loud2","4x":"https://twemoji.maxcdn.com/2/72x72/1f4e2.png"},{"unicode":"📣","code":"cheering","id":"234_cheering","4x":"https://twemoji.maxcdn.com/2/72x72/1f4e3.png"},{"unicode":"📯","code":"horn","id":"235_horn","4x":"https://twemoji.maxcdn.com/2/72x72/1f4ef.png"},{"unicode":"🔔","code":"bell","id":"236_bell","4x":"https://twemoji.maxcdn.com/2/72x72/1f514.png"},{"unicode":"🔕","code":"bell","id":"237_bell","4x":"https://twemoji.maxcdn.com/2/72x72/1f515.png"},{"unicode":"🎼","code":"music-score","id":"238_music-score","4x":"https://twemoji.maxcdn.com/2/72x72/1f3bc.png"},{"unicode":"🎵","code":"music-note","id":"239_music-note","4x":"https://twemoji.maxcdn.com/2/72x72/1f3b5.png"},{"unicode":"🎶","code":"music-notes","id":"240_music-notes","4x":"https://twemoji.maxcdn.com/2/72x72/1f3b6.png"},{"unicode":"🎙️","code":"microphone","id":"241_microphone","4x":"https://twemoji.maxcdn.com/2/72x72/1f399.png"},{"unicode":"🎤","code":"microphone2","id":"242_microphone2","4x":"https://twemoji.maxcdn.com/2/72x72/1f3a4.png"},{"unicode":"🎷","code":"sax","id":"243_sax","4x":"https://twemoji.maxcdn.com/2/72x72/1f3b7.png"},{"unicode":"🎸","code":"guitar","id":"244_guitar","4x":"https://twemoji.maxcdn.com/2/72x72/1f3b8.png"},{"unicode":"🎹","code":"piano-keys","id":"245_piano-keys","4x":"https://twemoji.maxcdn.com/2/72x72/1f3b9.png"},{"unicode":"🎺","code":"trumpet","id":"246_trumpet","4x":"https://twemoji.maxcdn.com/2/72x72/1f3ba.png"},{"unicode":"🎻","code":"violin","id":"247_violin","4x":"https://twemoji.maxcdn.com/2/72x72/1f3bb.png"},{"unicode":"🥁","code":"drumsticks","id":"248_drumsticks","4x":"https://twemoji.maxcdn.com/2/72x72/1f941.png"},{"unicode":"📱","code":"cellphone","id":"249_cellphone","4x":"https://twemoji.maxcdn.com/2/72x72/1f4f1.png"},{"unicode":"☎️","code":"phone","id":"250_phone","4x":"https://twemoji.maxcdn.com/2/72x72/260e.png"},{"unicode":"📞","code":"phone2","id":"251_phone2","4x":"https://twemoji.maxcdn.com/2/72x72/1f4de.png"},{"unicode":"📠","code":"fax","id":"252_fax","4x":"https://twemoji.maxcdn.com/2/72x72/1f4e0.png"},{"unicode":"🔋","code":"battery","id":"253_battery","4x":"https://twemoji.maxcdn.com/2/72x72/1f50b.png"},{"unicode":"🔌","code":"plug","id":"254_plug","4x":"https://twemoji.maxcdn.com/2/72x72/1f50c.png"},{"unicode":"🖥️","code":"computer-desktop","id":"255_computer-desktop","4x":"https://twemoji.maxcdn.com/2/72x72/1f5a5.png"},{"unicode":"🖨️","code":"printer","id":"256_printer","4x":"https://twemoji.maxcdn.com/2/72x72/1f5a8.png"},{"unicode":"⌨️","code":"keyboard","id":"257_keyboard","4x":"https://twemoji.maxcdn.com/2/72x72/2328.png"},{"unicode":"🖱️","code":"mouse-computer","id":"258_mouse-computer","4x":"https://twemoji.maxcdn.com/2/72x72/1f5b1.png"},{"unicode":"💽","code":"computer-disk","id":"259_computer-disk","4x":"https://twemoji.maxcdn.com/2/72x72/1f4bd.png"},{"unicode":"💾","code":"floppy-disk","id":"260_floppy-disk","4x":"https://twemoji.maxcdn.com/2/72x72/1f4be.png"},{"unicode":"📀","code":"blu-ray","id":"261_blu-ray","4x":"https://twemoji.maxcdn.com/2/72x72/1f4c0.png"},{"unicode":"🧮","code":"calculation","id":"262_calculation","4x":"https://twemoji.maxcdn.com/2/72x72/1f9ee.png"},{"unicode":"🎥","code":"camera","id":"263_camera","4x":"https://twemoji.maxcdn.com/2/72x72/1f3a5.png"},{"unicode":"🎞️","code":"cinema","id":"264_cinema","4x":"https://twemoji.maxcdn.com/2/72x72/1f39e.png"},{"unicode":"📽️","code":"cinema2","id":"265_cinema2","4x":"https://twemoji.maxcdn.com/2/72x72/1f4fd.png"},{"unicode":"📸","code":"camera-flash","id":"266_camera-flash","4x":"https://twemoji.maxcdn.com/2/72x72/1f4f8.png"},{"unicode":"📼","code":"vhs-tape","id":"267_vhs-tape","4x":"https://twemoji.maxcdn.com/2/72x72/1f4fc.png"},{"unicode":"🔎","code":"magnifying","id":"268_magnifying","4x":"https://twemoji.maxcdn.com/2/72x72/1f50e.png"},{"unicode":"🕯️","code":"light","id":"269_light","4x":"https://twemoji.maxcdn.com/2/72x72/1f56f.png"},{"unicode":"💡","code":"bulb","id":"270_bulb","4x":"https://twemoji.maxcdn.com/2/72x72/1f4a1.png"},{"unicode":"🔦","code":"electric-torch","id":"271_electric-torch","4x":"https://twemoji.maxcdn.com/2/72x72/1f526.png"},{"unicode":"📒","code":"notebook","id":"272_notebook","4x":"https://twemoji.maxcdn.com/2/72x72/1f4d2.png"},{"unicode":"📃","code":"note","id":"273_note","4x":"https://twemoji.maxcdn.com/2/72x72/1f4c3.png"},{"unicode":"📰","code":"newspaper","id":"274_newspaper","4x":"https://twemoji.maxcdn.com/2/72x72/1f4f0.png"},{"unicode":"🗞️","code":"newspaper-rolled","id":"275_newspaper-rolled","4x":"https://twemoji.maxcdn.com/2/72x72/1f5de.png"},{"unicode":"💴","code":"money-rolled","id":"276_money-rolled","4x":"https://twemoji.maxcdn.com/2/72x72/1f4b4.png"},{"unicode":"💲","code":"dollar-sign","id":"277_dollar-sign","4x":"https://twemoji.maxcdn.com/2/72x72/1f4b2.png"},{"unicode":"✉️","code":"email","id":"278_email","4x":"https://twemoji.maxcdn.com/2/72x72/2709.png"},{"unicode":"✏️","code":"pencil","id":"279_pencil","4x":"https://twemoji.maxcdn.com/2/72x72/270f.png"},{"unicode":"✒️","code":"pen","id":"280_pen","4x":"https://twemoji.maxcdn.com/2/72x72/2712.png"},{"unicode":"📝","code":"note-pencil","id":"281_note-pencil","4x":"https://twemoji.maxcdn.com/2/72x72/1f4dd.png"},{"unicode":"💼","code":"briefcase","id":"282_briefcase","4x":"https://twemoji.maxcdn.com/2/72x72/1f4bc.png"},{"unicode":"🗓️","code":"calendar","id":"283_calendar","4x":"https://twemoji.maxcdn.com/2/72x72/1f5d3.png"},{"unicode":"📌","code":"pin","id":"284_pin","4x":"https://twemoji.maxcdn.com/2/72x72/1f4cc.png"},{"unicode":"📍","code":"pin2","id":"285_pin2","4x":"https://twemoji.maxcdn.com/2/72x72/1f4cd.png"},{"unicode":"📎","code":"paperclip","id":"286_paperclip","4x":"https://twemoji.maxcdn.com/2/72x72/1f4ce.png"},{"unicode":"📏","code":"ruler","id":"287_ruler","4x":"https://twemoji.maxcdn.com/2/72x72/1f4cf.png"},{"unicode":"📐","code":"ruler2","id":"288_ruler2","4x":"https://twemoji.maxcdn.com/2/72x72/1f4d0.png"},{"unicode":"✂️","code":"cutting","id":"289_cutting","4x":"https://twemoji.maxcdn.com/2/72x72/2702.png"},{"unicode":"🗑️","code":"wastebasket","id":"290_wastebasket","4x":"https://twemoji.maxcdn.com/2/72x72/1f5d1.png"},{"unicode":"🔑","code":"key","id":"291_key","4x":"https://twemoji.maxcdn.com/2/72x72/1f511.png"},{"unicode":"🗝️","code":"key-old","id":"292_key-old","4x":"https://twemoji.maxcdn.com/2/72x72/1f5dd.png"},{"unicode":"🔨","code":"hammer","id":"293_hammer","4x":"https://twemoji.maxcdn.com/2/72x72/1f528.png"},{"unicode":"⛏️","code":"pickaxe","id":"294_pickaxe","4x":"https://twemoji.maxcdn.com/2/72x72/26cf.png"},{"unicode":"⚒️","code":"hammer2","id":"295_hammer2","4x":"https://twemoji.maxcdn.com/2/72x72/2692.png"},{"unicode":"🛠️","code":"hammer-wrench","id":"296_hammer-wrench","4x":"https://twemoji.maxcdn.com/2/72x72/1f6e0.png"},{"unicode":"🗡️","code":"knife","id":"297_knife","4x":"https://twemoji.maxcdn.com/2/72x72/1f5e1.png"},{"unicode":"⚔️","code":"swords","id":"298_swords","4x":"https://twemoji.maxcdn.com/2/72x72/2694.png"},{"unicode":"🔫","code":"gun-tool","id":"299_gun-tool","4x":"https://twemoji.maxcdn.com/2/72x72/1f52b.png"},{"unicode":"🏹","code":"archer","id":"300_archer","4x":"https://twemoji.maxcdn.com/2/72x72/1f3f9.png"},{"unicode":"🛡️","code":"shield","id":"301_shield","4x":"https://twemoji.maxcdn.com/2/72x72/1f6e1.png"},{"unicode":"🔧","code":"spanner","id":"302_spanner","4x":"https://twemoji.maxcdn.com/2/72x72/1f527.png"},{"unicode":"🔩","code":"bolt","id":"303_bolt","4x":"https://twemoji.maxcdn.com/2/72x72/1f529.png"},{"unicode":"⚙️","code":"cog","id":"304_cog","4x":"https://twemoji.maxcdn.com/2/72x72/2699.png"},{"unicode":"⚖️","code":"balance","id":"305_balance","4x":"https://twemoji.maxcdn.com/2/72x72/2696.png"},{"unicode":"🔗","code":"link","id":"306_link","4x":"https://twemoji.maxcdn.com/2/72x72/1f517.png"},{"unicode":"🧲","code":"magnetic","id":"307_magnetic","4x":"https://twemoji.maxcdn.com/2/72x72/1f9f2.png"},{"unicode":"⚗️","code":"chemistry","id":"308_chemistry","4x":"https://twemoji.maxcdn.com/2/72x72/2697.png"},{"unicode":"🧪","code":"chemist","id":"309_chemist","4x":"https://twemoji.maxcdn.com/2/72x72/1f9ea.png"},{"unicode":"🧬","code":"gene","id":"310_gene","4x":"https://twemoji.maxcdn.com/2/72x72/1f9ec.png"},{"unicode":"🔬","code":"microscope","id":"311_microscope","4x":"https://twemoji.maxcdn.com/2/72x72/1f52c.png"},{"unicode":"🔭","code":"telescope","id":"312_telescope","4x":"https://twemoji.maxcdn.com/2/72x72/1f52d.png"},{"unicode":"📡","code":"antenna-dish","id":"313_antenna-dish","4x":"https://twemoji.maxcdn.com/2/72x72/1f4e1.png"},{"unicode":"💉","code":"medicine","id":"314_medicine","4x":"https://twemoji.maxcdn.com/2/72x72/1f489.png"},{"unicode":"💊","code":"medicine","id":"315_medicine","4x":"https://twemoji.maxcdn.com/2/72x72/1f48a.png"},{"unicode":"🚪","code":"door","id":"316_door","4x":"https://twemoji.maxcdn.com/2/72x72/1f6aa.png"},{"unicode":"🛏️","code":"hotel-bed","id":"317_hotel-bed","4x":"https://twemoji.maxcdn.com/2/72x72/1f6cf.png"},{"unicode":"🚽","code":"toilet","id":"318_toilet","4x":"https://twemoji.maxcdn.com/2/72x72/1f6bd.png"},{"unicode":"🚿","code":"shower","id":"319_shower","4x":"https://twemoji.maxcdn.com/2/72x72/1f6bf.png"},{"unicode":"🛁","code":"bath","id":"320_bath","4x":"https://twemoji.maxcdn.com/2/72x72/1f6c1.png"},{"unicode":"🧴","code":"lotion","id":"321_lotion","4x":"https://twemoji.maxcdn.com/2/72x72/1f9f4.png"},{"unicode":"🧷","code":"diaper","id":"322_diaper","4x":"https://twemoji.maxcdn.com/2/72x72/1f9f7.png"},{"unicode":"🧹","code":"sweeping","id":"323_sweeping","4x":"https://twemoji.maxcdn.com/2/72x72/1f9f9.png"},{"unicode":"🧺","code":"farming","id":"324_farming","4x":"https://twemoji.maxcdn.com/2/72x72/1f9fa.png"},{"unicode":"🧻","code":"toilet paper","id":"325_toilet paper","4x":"https://twemoji.maxcdn.com/2/72x72/1f9fb.png"},{"unicode":"🧯","code":"extinguisher","id":"326_extinguisher","4x":"https://twemoji.maxcdn.com/2/72x72/1f9ef.png"},{"unicode":"🛒","code":"shopping-cart","id":"327_shopping-cart","4x":"https://twemoji.maxcdn.com/2/72x72/1f6d2.png"},{"unicode":"🚬","code":"smoking","id":"328_smoking","4x":"https://twemoji.maxcdn.com/2/72x72/1f6ac.png"},{"unicode":"✔️","code":"check","id":"329_check","4x":"https://twemoji.maxcdn.com/2/72x72/2714.png"},{"unicode":"⚰️","code":"death","id":"330_death","4x":"https://twemoji.maxcdn.com/2/72x72/26b0.png"},{"unicode":"🗿","code":"statue-face","id":"331_statue-face","4x":"https://twemoji.maxcdn.com/2/72x72/1f5ff.png"},{"unicode":"🐵","code":"monkey-face","id":"332_monkey-face","4x":"https://twemoji.maxcdn.com/2/72x72/1f435.png"},{"unicode":"🐒","code":"monkey","id":"333_monkey","4x":"https://twemoji.maxcdn.com/2/72x72/1f412.png"},{"unicode":"🦍","code":"gorilla","id":"334_gorilla","4x":"https://twemoji.maxcdn.com/2/72x72/1f98d.png"},{"unicode":"🐶","code":"dog-face","id":"335_dog-face","4x":"https://twemoji.maxcdn.com/2/72x72/1f436.png"},{"unicode":"🐩","code":"dog","id":"336_dog","4x":"https://twemoji.maxcdn.com/2/72x72/1f429.png"},{"unicode":"🐺","code":"face","id":"337_face","4x":"https://twemoji.maxcdn.com/2/72x72/1f43a.png"},{"unicode":"🦊","code":"face","id":"338_face","4x":"https://twemoji.maxcdn.com/2/72x72/1f98a.png"},{"unicode":"🦝","code":"curious","id":"339_curious","4x":"https://twemoji.maxcdn.com/2/72x72/1f99d.png"},{"unicode":"🐱","code":"cat","id":"340_cat","4x":"https://twemoji.maxcdn.com/2/72x72/1f431.png"},{"unicode":"🦁","code":"lion-face","id":"341_lion-face","4x":"https://twemoji.maxcdn.com/2/72x72/1f981.png"},{"unicode":"🐯","code":"tiger-face","id":"342_tiger-face","4x":"https://twemoji.maxcdn.com/2/72x72/1f42f.png"},{"unicode":"🐅","code":"tiger","id":"343_tiger","4x":"https://twemoji.maxcdn.com/2/72x72/1f405.png"},{"unicode":"🐆","code":"leopard","id":"344_leopard","4x":"https://twemoji.maxcdn.com/2/72x72/1f406.png"},{"unicode":"🐴","code":"horse-face","id":"345_horse-face","4x":"https://twemoji.maxcdn.com/2/72x72/1f434.png"},{"unicode":"🐎","code":"racehorse","id":"346_racehorse","4x":"https://twemoji.maxcdn.com/2/72x72/1f40e.png"},{"unicode":"🦄","code":"unicorn-face","id":"347_unicorn-face","4x":"https://twemoji.maxcdn.com/2/72x72/1f984.png"},{"unicode":"🦓","code":"zebra","id":"348_zebra","4x":"https://twemoji.maxcdn.com/2/72x72/1f993.png"},{"unicode":"🦌","code":"deer","id":"349_deer","4x":"https://twemoji.maxcdn.com/2/72x72/1f98c.png"},{"unicode":"🐮","code":"cow","id":"350_cow","4x":"https://twemoji.maxcdn.com/2/72x72/1f42e.png"},{"unicode":"🐂","code":"bull","id":"351_bull","4x":"https://twemoji.maxcdn.com/2/72x72/1f402.png"},{"unicode":"🐃","code":"buffalo","id":"352_buffalo","4x":"https://twemoji.maxcdn.com/2/72x72/1f403.png"},{"unicode":"🐄","code":"cow","id":"353_cow","4x":"https://twemoji.maxcdn.com/2/72x72/1f404.png"},{"unicode":"🐷","code":"pig-face","id":"354_pig-face","4x":"https://twemoji.maxcdn.com/2/72x72/1f437.png"},{"unicode":"🐖","code":"sow","id":"355_sow","4x":"https://twemoji.maxcdn.com/2/72x72/1f416.png"},{"unicode":"🐗","code":"pig","id":"356_pig","4x":"https://twemoji.maxcdn.com/2/72x72/1f417.png"},{"unicode":"🐽","code":"pig-nose","id":"357_pig-nose","4x":"https://twemoji.maxcdn.com/2/72x72/1f43d.png"},{"unicode":"🐏","code":"aries","id":"358_aries","4x":"https://twemoji.maxcdn.com/2/72x72/1f40f.png"},{"unicode":"🐑","code":"sheep","id":"359_sheep","4x":"https://twemoji.maxcdn.com/2/72x72/1f411.png"},{"unicode":"🐐","code":"capricorn","id":"360_capricorn","4x":"https://twemoji.maxcdn.com/2/72x72/1f410.png"},{"unicode":"🐪","code":"dromedary","id":"361_dromedary","4x":"https://twemoji.maxcdn.com/2/72x72/1f42a.png"},{"unicode":"🐫","code":"camel","id":"362_camel","4x":"https://twemoji.maxcdn.com/2/72x72/1f42b.png"},{"unicode":"🦙","code":"alpaca","id":"363_alpaca","4x":"https://twemoji.maxcdn.com/2/72x72/1f999.png"},{"unicode":"🦒","code":"spots","id":"364_spots","4x":"https://twemoji.maxcdn.com/2/72x72/1f992.png"},{"unicode":"🐘","code":"elephant","id":"365_elephant","4x":"https://twemoji.maxcdn.com/2/72x72/1f418.png"},{"unicode":"🦏","code":"rhinoceros","id":"366_rhinoceros","4x":"https://twemoji.maxcdn.com/2/72x72/1f98f.png"},{"unicode":"🦛","code":"hippo","id":"367_hippo","4x":"https://twemoji.maxcdn.com/2/72x72/1f99b.png"},{"unicode":"🐭","code":"mouse-face","id":"368_mouse-face","4x":"https://twemoji.maxcdn.com/2/72x72/1f42d.png"},{"unicode":"🐁","code":"mouse","id":"369_mouse","4x":"https://twemoji.maxcdn.com/2/72x72/1f401.png"},{"unicode":"🐀","code":"rat","id":"370_rat","4x":"https://twemoji.maxcdn.com/2/72x72/1f400.png"},{"unicode":"🐹","code":"pet-face","id":"371_pet-face","4x":"https://twemoji.maxcdn.com/2/72x72/1f439.png"},{"unicode":"🐰","code":"bunny-face","id":"372_bunny-face","4x":"https://twemoji.maxcdn.com/2/72x72/1f430.png"},{"unicode":"🐇","code":"bunny","id":"373_bunny","4x":"https://twemoji.maxcdn.com/2/72x72/1f407.png"},{"unicode":"🐿️","code":"squirrel","id":"374_squirrel","4x":"https://twemoji.maxcdn.com/2/72x72/1f43f.png"},{"unicode":"🦔","code":"spiny","id":"375_spiny","4x":"https://twemoji.maxcdn.com/2/72x72/1f994.png"},{"unicode":"🦇","code":"vampire","id":"376_vampire","4x":"https://twemoji.maxcdn.com/2/72x72/1f987.png"},{"unicode":"🐻","code":"face","id":"377_face","4x":"https://twemoji.maxcdn.com/2/72x72/1f43b.png"},{"unicode":"🐨","code":"bear","id":"378_bear","4x":"https://twemoji.maxcdn.com/2/72x72/1f428.png"},{"unicode":"🐼","code":"panda-face","id":"379_panda-face","4x":"https://twemoji.maxcdn.com/2/72x72/1f43c.png"},{"unicode":"🦘","code":"marsupial","id":"380_marsupial","4x":"https://twemoji.maxcdn.com/2/72x72/1f998.png"},{"unicode":"🦡","code":"honey badger","id":"381_honey badger","4x":"https://twemoji.maxcdn.com/2/72x72/1f9a1.png"},{"unicode":"🐾","code":"paw","id":"382_paw","4x":"https://twemoji.maxcdn.com/2/72x72/1f43e.png"},{"unicode":"🦃","code":"bird","id":"383_bird","4x":"https://twemoji.maxcdn.com/2/72x72/1f983.png"},{"unicode":"🐔","code":"chicken","id":"384_chicken","4x":"https://twemoji.maxcdn.com/2/72x72/1f414.png"},{"unicode":"🐓","code":"rooster","id":"385_rooster","4x":"https://twemoji.maxcdn.com/2/72x72/1f413.png"},{"unicode":"🐣","code":"baby-bird","id":"386_baby-bird","4x":"https://twemoji.maxcdn.com/2/72x72/1f423.png"},{"unicode":"🐤","code":"baby-chick","id":"387_baby-chick","4x":"https://twemoji.maxcdn.com/2/72x72/1f424.png"},{"unicode":"🐥","code":"baby-chick2","id":"388_baby-chick2","4x":"https://twemoji.maxcdn.com/2/72x72/1f425.png"},{"unicode":"🐧","code":"penguin","id":"389_penguin","4x":"https://twemoji.maxcdn.com/2/72x72/1f427.png"},{"unicode":"🕊️","code":"bird-fly","id":"390_bird-fly","4x":"https://twemoji.maxcdn.com/2/72x72/1f54a.png"},{"unicode":"🦅","code":"eagle","id":"391_eagle","4x":"https://twemoji.maxcdn.com/2/72x72/1f985.png"},{"unicode":"🦆","code":"duck","id":"392_duck","4x":"https://twemoji.maxcdn.com/2/72x72/1f986.png"},{"unicode":"🦢","code":"swan","id":"393_swan","4x":"https://twemoji.maxcdn.com/2/72x72/1f9a2.png"},{"unicode":"🦉","code":"owl","id":"394_owl","4x":"https://twemoji.maxcdn.com/2/72x72/1f989.png"},{"unicode":"🦚","code":"peahen","id":"395_peahen","4x":"https://twemoji.maxcdn.com/2/72x72/1f99a.png"},{"unicode":"🦜","code":"macaw","id":"396_macaw","4x":"https://twemoji.maxcdn.com/2/72x72/1f99c.png"},{"unicode":"🐸","code":"frog-face","id":"397_frog-face","4x":"https://twemoji.maxcdn.com/2/72x72/1f438.png"},{"unicode":"🐊","code":"crocodile","id":"398_crocodile","4x":"https://twemoji.maxcdn.com/2/72x72/1f40a.png"},{"unicode":"🐢","code":"turtle","id":"399_turtle","4x":"https://twemoji.maxcdn.com/2/72x72/1f422.png"},{"unicode":"🦎","code":"reptile","id":"400_reptile","4x":"https://twemoji.maxcdn.com/2/72x72/1f98e.png"},{"unicode":"🐍","code":"snake","id":"401_snake","4x":"https://twemoji.maxcdn.com/2/72x72/1f40d.png"},{"unicode":"🐲","code":"dragon-face","id":"402_dragon-face","4x":"https://twemoji.maxcdn.com/2/72x72/1f432.png"},{"unicode":"🐉","code":"dragon","id":"403_dragon","4x":"https://twemoji.maxcdn.com/2/72x72/1f409.png"},{"unicode":"🦕","code":"brontosaurus","id":"404_brontosaurus","4x":"https://twemoji.maxcdn.com/2/72x72/1f995.png"},{"unicode":"🦖","code":"t-rex","id":"405_t-rex","4x":"https://twemoji.maxcdn.com/2/72x72/1f996.png"},{"unicode":"🐳","code":"whale","id":"406_whale","4x":"https://twemoji.maxcdn.com/2/72x72/1f433.png"},{"unicode":"🐋","code":"whale2","id":"407_whale2","4x":"https://twemoji.maxcdn.com/2/72x72/1f40b.png"},{"unicode":"🐬","code":"flipper","id":"408_flipper","4x":"https://twemoji.maxcdn.com/2/72x72/1f42c.png"},{"unicode":"🐠","code":"tropical-fish","id":"409_tropical-fish","4x":"https://twemoji.maxcdn.com/2/72x72/1f420.png"},{"unicode":"🐡","code":"fish","id":"410_fish","4x":"https://twemoji.maxcdn.com/2/72x72/1f421.png"},{"unicode":"🦈","code":"shark","id":"411_shark","4x":"https://twemoji.maxcdn.com/2/72x72/1f988.png"},{"unicode":"🐙","code":"octopus","id":"412_octopus","4x":"https://twemoji.maxcdn.com/2/72x72/1f419.png"},{"unicode":"🐚","code":"shell","id":"413_shell","4x":"https://twemoji.maxcdn.com/2/72x72/1f41a.png"},{"unicode":"🐌","code":"snail","id":"414_snail","4x":"https://twemoji.maxcdn.com/2/72x72/1f40c.png"},{"unicode":"🦋","code":"butterfly","id":"415_butterfly","4x":"https://twemoji.maxcdn.com/2/72x72/1f98b.png"},{"unicode":"🐛","code":"insect","id":"416_insect","4x":"https://twemoji.maxcdn.com/2/72x72/1f41b.png"},{"unicode":"🐜","code":"insect","id":"417_insect","4x":"https://twemoji.maxcdn.com/2/72x72/1f41c.png"},{"unicode":"🐝","code":"bee","id":"418_bee","4x":"https://twemoji.maxcdn.com/2/72x72/1f41d.png"},{"unicode":"🐞","code":"ladybug","id":"419_ladybug","4x":"https://twemoji.maxcdn.com/2/72x72/1f41e.png"},{"unicode":"🦗","code":"grasshopper","id":"420_grasshopper","4x":"https://twemoji.maxcdn.com/2/72x72/1f997.png"},{"unicode":"🕷️","code":"insect","id":"421_insect","4x":"https://twemoji.maxcdn.com/2/72x72/1f577.png"},{"unicode":"🕸️","code":"spider-web","id":"422_spider-web","4x":"https://twemoji.maxcdn.com/2/72x72/1f578.png"},{"unicode":"🦂","code":"scorpio","id":"423_scorpio","4x":"https://twemoji.maxcdn.com/2/72x72/1f982.png"},{"unicode":"🦟","code":"mosquito","id":"424_mosquito","4x":"https://twemoji.maxcdn.com/2/72x72/1f99f.png"},{"unicode":"🦠","code":"amoeba","id":"425_amoeba","4x":"https://twemoji.maxcdn.com/2/72x72/1f9a0.png"},{"unicode":"💐","code":"flower","id":"426_flower","4x":"https://twemoji.maxcdn.com/2/72x72/1f490.png"},{"unicode":"🌸","code":"blossom","id":"427_blossom","4x":"https://twemoji.maxcdn.com/2/72x72/1f338.png"},{"unicode":"🌹","code":"flower","id":"428_flower","4x":"https://twemoji.maxcdn.com/2/72x72/1f339.png"},{"unicode":"🥀","code":"flower-wilted","id":"429_flower-wilted","4x":"https://twemoji.maxcdn.com/2/72x72/1f940.png"},{"unicode":"🌺","code":"flower2","id":"430_flower2","4x":"https://twemoji.maxcdn.com/2/72x72/1f33a.png"},{"unicode":"🌻","code":"sun-flower","id":"431_sun-flower","4x":"https://twemoji.maxcdn.com/2/72x72/1f33b.png"},{"unicode":"🌼","code":"flower3","id":"432_flower3","4x":"https://twemoji.maxcdn.com/2/72x72/1f33c.png"},{"unicode":"🌷","code":"flower4","id":"433_flower4","4x":"https://twemoji.maxcdn.com/2/72x72/1f337.png"},{"unicode":"🌱","code":"young-tree","id":"434_young-tree","4x":"https://twemoji.maxcdn.com/2/72x72/1f331.png"},{"unicode":"🌲","code":"tree","id":"435_tree","4x":"https://twemoji.maxcdn.com/2/72x72/1f332.png"},{"unicode":"🌳","code":"big-tree","id":"436_big-tree","4x":"https://twemoji.maxcdn.com/2/72x72/1f333.png"},{"unicode":"🌵","code":"plant","id":"437_plant","4x":"https://twemoji.maxcdn.com/2/72x72/1f335.png"},{"unicode":"🌿","code":"leaf","id":"438_leaf","4x":"https://twemoji.maxcdn.com/2/72x72/1f33f.png"},{"unicode":"☘️","code":"three-leaf clover","id":"439_three-leaf clover","4x":"https://twemoji.maxcdn.com/2/72x72/2618.png"},{"unicode":"🍀","code":"four-leaf clover","id":"440_four-leaf clover","4x":"https://twemoji.maxcdn.com/2/72x72/1f340.png"},{"unicode":"🍁","code":"falling-leaf","id":"441_falling-leaf","4x":"https://twemoji.maxcdn.com/2/72x72/1f341.png"},{"unicode":"🏁","code":"checkered","id":"442_checkered","4x":"https://twemoji.maxcdn.com/2/72x72/1f3c1.png"},{"unicode":"🚩","code":"post","id":"443_post","4x":"https://twemoji.maxcdn.com/2/72x72/1f6a9.png"},{"unicode":"🎌","code":"japanese-celebration","id":"444_japanese-celebration","4x":"https://twemoji.maxcdn.com/2/72x72/1f38c.png"},{"unicode":"🏴","code":"flag-black","id":"445_flag-black","4x":"https://twemoji.maxcdn.com/2/72x72/1f3f4.png"},{"unicode":"🏳️","code":"flag-white","id":"446_flag-white","4x":"https://twemoji.maxcdn.com/2/72x72/1f3f3.png"},{"unicode":"🏳️‍🌈","code":"flag-pride","id":"447_flag-pride","4x":"https://twemoji.maxcdn.com/2/72x72/1f3f3-fe0f-200d-1f308.png"},{"unicode":"🏴‍☠️","code":"flag-pirate","id":"448_flag-pirate","4x":"https://twemoji.maxcdn.com/2/72x72/1f3f4-200d-2620-fe0f.png"},{"unicode":"🇦🇷","code":"AR","id":"449_AR","4x":"https://twemoji.maxcdn.com/2/72x72/1f1e6-1f1f7.png"},{"unicode":"🇦🇺","code":"AU","id":"450_AU","4x":"https://twemoji.maxcdn.com/2/72x72/1f1e6-1f1fa.png"},{"unicode":"🇧🇬","code":"BG","id":"451_BG","4x":"https://twemoji.maxcdn.com/2/72x72/1f1e7-1f1ec.png"},{"unicode":"🇧🇷","code":"BR","id":"452_BR","4x":"https://twemoji.maxcdn.com/2/72x72/1f1e7-1f1f7.png"},{"unicode":"🇨🇦","code":"CA","id":"453_CA","4x":"https://twemoji.maxcdn.com/2/72x72/1f1e8-1f1e6.png"},{"unicode":"🇨🇳","code":"CN","id":"454_CN","4x":"https://twemoji.maxcdn.com/2/72x72/1f1e8-1f1f3.png"},{"unicode":"🇨🇿","code":"CZ","id":"455_CZ","4x":"https://twemoji.maxcdn.com/2/72x72/1f1e8-1f1ff.png"},{"unicode":"🇩🇪","code":"DE","id":"456_DE","4x":"https://twemoji.maxcdn.com/2/72x72/1f1e9-1f1ea.png"},{"unicode":"🇩🇰","code":"DK","id":"457_DK","4x":"https://twemoji.maxcdn.com/2/72x72/1f1e9-1f1f0.png"},{"unicode":"🇩🇲","code":"DM","id":"458_DM","4x":"https://twemoji.maxcdn.com/2/72x72/1f1e9-1f1f2.png"},{"unicode":"🇩🇴","code":"DO","id":"459_DO","4x":"https://twemoji.maxcdn.com/2/72x72/1f1e9-1f1f4.png"},{"unicode":"🇩🇿","code":"DZ","id":"460_DZ","4x":"https://twemoji.maxcdn.com/2/72x72/1f1e9-1f1ff.png"},{"unicode":"🇪🇦","code":"EA","id":"461_EA","4x":"https://twemoji.maxcdn.com/2/72x72/1f1ea-1f1e6.png"},{"unicode":"🇪🇨","code":"EC","id":"462_EC","4x":"https://twemoji.maxcdn.com/2/72x72/1f1ea-1f1e8.png"},{"unicode":"🇪🇸","code":"ES","id":"463_ES","4x":"https://twemoji.maxcdn.com/2/72x72/1f1ea-1f1f8.png"},{"unicode":"🇫🇮","code":"FI","id":"464_FI","4x":"https://twemoji.maxcdn.com/2/72x72/1f1eb-1f1ee.png"},{"unicode":"🇫🇷","code":"FR","id":"465_FR","4x":"https://twemoji.maxcdn.com/2/72x72/1f1eb-1f1f7.png"},{"unicode":"🇬🇧","code":"GB","id":"466_GB","4x":"https://twemoji.maxcdn.com/2/72x72/1f1ec-1f1e7.png"},{"unicode":"🇭🇰","code":"HK","id":"467_HK","4x":"https://twemoji.maxcdn.com/2/72x72/1f1ed-1f1f0.png"},{"unicode":"🇮🇱","code":"IL","id":"468_IL","4x":"https://twemoji.maxcdn.com/2/72x72/1f1ee-1f1f1.png"},{"unicode":"🇮🇹","code":"IT","id":"469_IT","4x":"https://twemoji.maxcdn.com/2/72x72/1f1ee-1f1f9.png"},{"unicode":"🇯🇵","code":"JA","id":"470_JA","4x":"https://twemoji.maxcdn.com/2/72x72/1f1ef-1f1f5.png"},{"unicode":"🇰🇵","code":"KP","id":"471_KP","4x":"https://twemoji.maxcdn.com/2/72x72/1f1f0-1f1f5.png"},{"unicode":"🇰🇷","code":"KR","id":"472_KR","4x":"https://twemoji.maxcdn.com/2/72x72/1f1f0-1f1f7.png"},{"unicode":"🇳🇱","code":"NL","id":"473_NL","4x":"https://twemoji.maxcdn.com/2/72x72/1f1f3-1f1f1.png"},{"unicode":"🇳🇴","code":"NO","id":"474_NO","4x":"https://twemoji.maxcdn.com/2/72x72/1f1f3-1f1f4.png"},{"unicode":"🇵🇱","code":"PL","id":"475_PL","4x":"https://twemoji.maxcdn.com/2/72x72/1f1f5-1f1f1.png"},{"unicode":"🇵🇹","code":"PT","id":"476_PT","4x":"https://twemoji.maxcdn.com/2/72x72/1f1f5-1f1f9.png"},{"unicode":"🇷🇴","code":"RO","id":"477_RO","4x":"https://twemoji.maxcdn.com/2/72x72/1f1f7-1f1f4.png"},{"unicode":"🇷🇺","code":"RU","id":"478_RU","4x":"https://twemoji.maxcdn.com/2/72x72/1f1f7-1f1fa.png"},{"unicode":"🇸🇰","code":"SK","id":"479_SK","4x":"https://twemoji.maxcdn.com/2/72x72/1f1f8-1f1f0.png"},{"unicode":"🇸🇻","code":"SV","id":"480_SV","4x":"https://twemoji.maxcdn.com/2/72x72/1f1f8-1f1fb.png"},{"unicode":"🇹🇭","code":"TH","id":"481_TH","4x":"https://twemoji.maxcdn.com/2/72x72/1f1f9-1f1ed.png"},{"unicode":"🇹🇷","code":"TR","id":"482_TR","4x":"https://twemoji.maxcdn.com/2/72x72/1f1f9-1f1f7.png"},{"unicode":"🇻🇮","code":"VI","id":"483_VI","4x":"https://twemoji.maxcdn.com/2/72x72/1f1fb-1f1ee.png"}]',
    Zd =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAABrrFhUAAAASFBMVEVHcEw1NTXb29swMDB9fX1DQ0NeXl5RUVFtbW3m5ubT09Pg4ODKyso7Ozufn5+9vb2urq62traQkJClpaWJiYmYmJjCwsLq6uo9xg8yAAAAF3RSTlMACeoDbBxBLlX54PHUEZnCrbiFonuQyd/Z9QoAAAhdSURBVHgB7MGBAAAAAICg/akXqQIAAAAAYO7qJdtSEIbC8AKREB4icI57/jOtzm1Ur1ZdFRO/GfxxqzdbTFnJex9+eO9pLWZ5fbgpFFwf7cg2MeNvnGw+2uguUDFvfOaFQt+zZfwT27z3QOU9ezDkvtUy/gvb4+vIvCF+RMYvcRyqj7CGLTNO4ryFVWM9uZZwkdQcqatnXIqrnhusP/VX4+YUvAuL3yxuYze/CH/4FTergmdAPWKC2Enk9mkkTJKGF9fvd8ZEvHth+ZhO0AloQr7gE9BgPIQHPZ5fPhYPsp/ybH/IeFgOT66/QYBGD+UvLkEE+1me6PcVYlQ/Pd90hiDczdx+qhCm0sx+lyBOctPy1x0i7eucfh8hVPRT5s8Qi93t+WWDaFu5t58OCHeQ3Ndf/4cgJCiQwl39Dkp8bslfvlDju1zfbwYUGeby/h2q7BdfoDQo08ql/RXq1CK6f4Kj6N+/jA2YBqWa0f/9F/AvGFBsnO/vUK2f7XdQzp3rDwzlOJzpJwv1Ev2+f424EScb83HkaNOf9u5Ex3EQCQPwjznA+D7sev83XWnVGu1oZ9Jp8pcTNP4eIN2xOaqgCK0oyh6F7CJKunPbU/SDMdYaM/iY9u3sPi4cOERFHpO3ACx+Y30as6g4UCSJgnwEg78y4ciiIKFA7IRucgO+MbjpIwZCa3phW8Lbas76AT81CtmU8LQ0Cdn47gEgpzcXH6X3RgCbxw/5Tagajx+wM/v1F0hZmJb3pUCLRxG/vCktsr75jF0Ke7ypE8wfs2XvWuGZ+TOA/k5laq6fCYYsNF3Ai0J3eV44ftL3hw3dxeFQbLXa//urEtqI7y3vX43SW5dbLh0BHUjcheMgMQncQLMJS28ue9inAY2ZriqfGZrr465rY9NmwCM7v7NxpGv2ingPegbZfEnTXN/fAfTfzXrFH0mgS0LSef0GMEHBJCSrfhYUoCCoTwSOPAJ+7DjolIPANkJFbHXDwcSPgclG3TF6+vAGQGwCk8X/i0KyQM0iJEG/fWmwSUhGxTSoN1Bjer2Z0AnJDkW7kLjKhkD+MKj2ySdUTUIStdKAHap2pYTAfnoUyI8GrU6icVqosqeQBJ0ecEDZISSrSg+QBGVJZYE86O89scRWow+s7MdaQTAoq8bsukHdprBu5zshcVDnFBZHk7AkaLMa/+wmLBHqYkvvrybzWxUfv79mw14LkmygzmR6e3XCMuECi7A4elXUjAvM7Jopyy4K0Q8EuBmhb9mPVNcoLK1nl0UduMAhNIl9OniFPv7/OwvNjgvs5PJp29f3AKjJq+/q6wLUyDXIvzsISiAfjxlrewCO/HnXBELkJjuLVJwLEKaBU8ijqjLbC88J2Cw8zQBt1jTCkw11FpT2ohUhZjYQhSlBXRKmiCBMDuqcMCXyAz2g7hCmRH6gE9RN5Ca7C1PnocsOjTDtOIQqQFkQqgOzUO1QtgvVjEnqGgQW9v97ClUb1feFqHr0UlUfSMLVI0tVfWATroxGauoDvhGuBo2QOShyQtaglZr6wCRkLYStDaqpMBtaYZuhZhS2Fp2wtVExCGDr0AjdBiWr0DXIUk0T8I3QZWThG6tpAJLRC1/nwWd9J3w9JlGwKUXBfBNm0ZBAl0TDjFE05AFkQxYNI1ZRMYJsFBUrnOgIGh2Az6l9cj8odAA+hyBKNoUOwJcQW1Gy1nDPXcTQiRYHktCKktZz6wN0VgZiI1oaAyyipokg8FnU9BYYRU/v8TLfi54FwC6K+sj8/nwjf4Ql3wEbe/VbiIKo6tIn3/ObHqy0srSOess9f+3KZFG2WhSxqyjLBgBm0TZFFIiLaFsKSg6KNA4/5hpRdxRkmoWWSHj9dKlgu6FUe3g8zR+tFChdvz/lEt0R8ZR4NHKJbIqS7XLdGPGtOHZykfn6WyXbxXk84N3cymV2pU3ndhoffGIzJ2/xB9a7uZErBf6BdJFucfG7SxG6c3TBG4sv1vjgxrOTB9p979XW7md+C49ZvtH05zKP6zpuy9Q3zyRVJqy9TiGDE4pzj/hirT+F6Pz6ZBPGRlgctfKkGYPF/xpGodkG/DK4paX/4MkpLzqd17sjqHMqgUJvaBXISzJF8Wx5KuX3TD3cEeUFc8Df2L2TF7W7xZ8M7iTuYNue/vW/xFntmk6bet4G9qp3jWg6pVif8HcWxvWsrbsgJc6EJxiXpUh2Bt8Y9obQAwqDwewsnjOUvKneeTwhboQeUJQRjh7PM2n6aeMyeFI4GRUcidL6H7BhzD+4nNvieaZkrgmv/VDjOuDnhrQ18q1mTgN+KE4lm4K/c5ds9/i0Tg9eVzcdyaOA2dtXixd8V3CJcOlD2Kbcym/a5tzW5C1Khf7Vat6xYKenmB1icm5fj3E81t25FAeL1/j5xZL+oNz89e3ytFR8HOX0+Fg2dT9LBAuGwc1An/5m8l5aizfiw8X+lavgDvXCN33+lO8dhWeydnw+O5zynS6W1WOuqII/y2tYY/e43dTB9+VHmo4Hj82iFj7LI3PRsZzFoB6hK2gAj5tA9qiJK65i941q1e9ljoIp4NHqqENl7FQ6lv+xCSyoTuxK7wPeH7ea2oeBveR0jkOF7FL6i4/pwf2UFXgc2KeSI6oBdRpLBzPfPA6cauGb0sHMPQ6camH30nTWTg8Cp4qbwGlKxo+Aeo3F4eyqf3/g9RPBUXSjmUPNluLDzKG94JeS9bnyfG6vcg58sN+3l93m41C3pTyc9VkvCLi+DzSx7Mj2icpF+a82FT69EZUbmld2NGZxqN3ySjTrc0Ltjq8QuEz0qJ17aUXbonY2SRvwL0vi8E8LB/5txuKX2+12u91ut9vtdrvdbrfb7Xa7/Qf0wSAxhEqDGQAAAABJRU5ErkJggg==",
    $d =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAoAAAAFoCAMAAADw7LpjAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA/UExURVJSXlZVYDEyN0pKUlJSWlJRX09PWgAAAP///////vr7/JiYn0BAQ/T09by7wWlpaszMzYKChBAQEaGhpyIhJ3+BVNkAAAmaSURBVHja7d0PV9o6GAfgxoaMRqqCfv/PepMWQQSd22g5lz4P2zw67+i5/fnmT5O2aQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgJ9ITSi/p3+TMH5spn8z/j+GWIQQ0sSa9/TVN5NBPtam93xMG/Swf7vyXsH/dd6DMRTBGQvSWA5FkEMgmhDmCd6+Epa8JwHk0AdMabb3CmPeky4ge+04BE6zDEJq6UuzDLr5X4gxbrePs3ouCYwCuGSrQY1AbLdP67k9bdsY03AM9Sfg8tEdOV93GsCh8X1+Wa+78uvo+oH79M92637bhiCASw9gGQk0abuePoCf5PX6tS1v/VUAWU4THMJjycPMAey6/inFFARw6QFMTVsCuD5LXnf6+nMn//2FCpifNk0QwMU3wU0NYH8WwO7KLgcwaYI1wSEeK+CnMcOEAVzXJjh8PQpmKQEMMcbSBzyLydT5KxWwTfqApmHK2a8VcP2ekpxP8nfNYW9tdz984amNzZcVMDahicNcdSofBXQ5ARxDmK833B0HIef/4PcBDHFcHdGWDNYrNc7XkgI41cxfzv17+/67AO6XR7ShJLGm0flaTgBzfnmawsvHDubvAlha3/2S6eia8dIqYH59rmf/qkor+tofWvbfBzAMC3Ni07bDGh3rBu9Gen99NQgpv19De+1lWDG1r39SAdtUQtvG8PpcSmHUBC+qCS4BLIFYfXz9tWMF3LwehyI/qYBtG7ZPL/mxrQsHW+frLpye6FCnOoqPAcyHAIbhdfrdP3/VXNXX4Z1D+3g6Fv4ygPWQYpueX1/68v2PddVW0AT/34VynktDWHKwedh8VD572H5IRteVAG6uaGhL6xW/19NFWTWAcRhupGHAOwaxfpJK+7t92g+YawDF7y4a3Dq51r7tfp2on+6eT+ZL+rz99E3/YLd7KxGsI4mLAYxpnG4psRt+QEpJbsfi16273I0BHH56uIcAbt4upuT5WACHk37FANYMboZ5vMsVcJ++sN+kVCvgvvgN35cF8F4CGFalAX64HJHnT3PG16yA5fdDrH3KSwFsxg3qdcK5dv5K01uK3/DT0OU8LuMSwLupgKXQ/CCAXSmC162Av97aryrguB253jCmztOk58cy7jheB+yyAN5RANOPAjic9KsHcJjZuxjA/fbMuji6NL2H1Qo5D32BrAm+nwDWq1rzN8FjAEP4pgke7oj03vTWtncM3zobhCwngB+X4k8QwPR1E1xnXcJjLX613nXDcrAy/s37QxHA+wlg/HoQ0p0un7p+H/DCIGT9NFzmbeOh+H1ciHj4XAAFcJoA1hXRbVvHHesPl0g6ARTAOQI4bEqq447+8hYAAby3ADa3DWA8r4Avr+OMc+315U4A7953AexmD2DO4xrpcbT79e4lARTAKQKY3xfpv1/2EEABnLUCHj72ff7ujiACKIBXCWD4HMCxDe6Ge9LkLIAGIRMGsBxA+Lgk/2zr5tcE0DTMvwewvPt3AVwLoADesgIK4EICGASQhVbAKIACKIAsNICHaRgB1Ae8UQCjAArg7SpgGu+MsO4EUABv1wT/zW0HBVAAr7AnpLTAD9s83G5fAPUB5w5gaX8f3sbt7wKoAs4fwIfhhiDP47pTARTAmQN42HuXBVAAbxXAXa2AnQDqA96wAmqCVcCbBrAzES2AAogACqA+oACiAgqgAAogAiiA+oACyLIqYF6v+3GFYHdYJ+jWHAI4UwDz8ElX7wrd1yS6M4IAzlsBu9x/uDNlXn+1VEsA9QGnCGCpfa8P21oA87rPJ/foF0AVcI4+YP+4+7V73t+j8n2Zgj6gAM4UwNw/Dqu0NtuXnPv3p4QJoADOFcD8+L5SsH0aRiJrAdQHnHEU3D8e/+phWx+P+dU8YBRAFXCKPuDJgun26TgWyd3xyeqP7fnj1BHAawewVMHhkSH7rcN9zt341EIBFMCZAhjbuH0dZqaP0zK9AOoDzhTAtxRjiuH45CQVUAWctwKmqh0fnHm4QmIQIoBzBTCGMDw8eHiAXDYNI4Bz9wFTfXR1fbJr25Yy2GdPTNcHnDGAoRxgamoA62Nt2vokQwFcXAUcVulNtjF9nb9tgstRrsasxVoKS1P81D+WKK7a4AwupQmus8DT3Rtm/YMADglMZUAcaxl8jmmVkgAupgLWjEwUwH69/lEAawTD0BbXQXH5Y7VKzuBi+oB1gd7LJEpx7b8N4CGB+4MOVVPyt0o6gQupgN3YT/ub7UPf6odFf7+pgLE5NMLtahgR10FxGYKsggAuaBom5/MnmP+r/QqD/NMAhjBkL9R2eFU+COBSKmA+7tG4przfgvSTAA6tb6l6dU46hJUALqoPOIbl6k1wd7bf41IA4yGAZeRbGuGhDtb4yd/dV8Dcvff/rh29Cxsuyxfy5QAOR3p+9E7gfQdwuP4xmfpE9POv/UkAufMA5nFTbtdNUf/WlwYlfZdfBVAfcLh7+PgEj9xd2pZ7jfFHzpcekXR5ECKAS6yA7fq9BF6/An45Ku4/XW85HQWzlADu6q/X3A/lL6+vPf+XL46Aq5ew2QmgAI4prKvv+knUfzbnPn/SP203z3HzsNtdCqBV+MuaBxzuUNBuJtKG7bnn1Ia2LoHevO0EcPEVcFpv7blYU1YfYx1D+/A2Lkg9XogTQAG8agDrA6tP1WOqH0NsU2xLU/zroU3NKgigAE4RwPMFpat9AmsIQ0ztpi3xSyrgUvuA0wYwNGcFcFx5H1NTFz6nUBJa/tAEq4DTVMAvjyvsdyGlkNJxPbQACuBVA9h8G8Aw7AcOzb4FFkABvHYAV2eOx1UX3NfFp23pAgYB1Ae8QQDrmvuavjTWQAG8Q6Hutb1VBUzhx7vaXIe7U7Wr39yuCbavlzoVcqsA2lhOGWOmm/UB7SvXBKcm3WwQogDS1BBEAeRmPcAQYjysfZrTrt771BlYfAUcLrZudrsb5C/IH1WMMW0e5rVpY2NamcGqrr9LdW3e2fq8a0vDa/9GCiAfWuJ63X/q/MVj37MmvjEK4cOMTBEnfx1pgTm2wvtL/7OOwINGmEP5269Gma0J3t/2Hmr9G+56O8s9l/frrIa1fnAIRUrz3H3guNJvvxYH9tGw6g4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4G/9B+UgH74Lo01vAAAAAElFTkSuQmCC",
    ea =
      "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
    ta =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAABHNCSVQICAgIfAhkiAAAAXRJREFUeJztwTEBAAAAwqD1T20MH6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/gZ/twABJJA/XAAAAABJRU5ErkJggg==",
    na =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMkAAADJCAYAAACJxhYFAAAOyUlEQVR42uydX4hcZxnG3+/bnYU2yia21F60ZBtLLUJJtqLEWpyuBtoI2qG5UFzqzCbVm1w4BWOuGpf2xkQh48WCmCYzQ1lJLwq7elEDLckUjQslmqVeaElilhXUQt1dadowszlHzuxsmJ3Mn/PnO9/f57lMk92ZM++v7/eced73cIIgqK8ACQQBErN0KPvaU7gKeonhEqhXPlseG6aRAuNUIKKdRLTke1RZp3qlWpu6jisESBzvGqzAOMv3+ju+51eJ/Mrp2vMXcMUAiStdY/sQjeQ4p+lW1wirJfL8UoMaQXdZxZUEJBbCMbtnmPwi4yxHRKMJftSa7/lz68RK1drkZVxZQGK8DmZnm16DEWVF/2yfqBZ4lzO1yQquNCAx1YgXE3aNCN2FSjD6gMQII844D8B4VuHLmPc9LzD6c/hEAIk2RjxDmQJxVoxoxNMWjD4g0caI53V/rb7nV2H0AYlkI86KjPzdpr12n9ii7/mlW1SfQ3cBJGkY8WLrG/FRC97SWusb/RKMPiBJasRzxHkxjdu3+nQXqpHnlWD0AUkkI97WNXY69NaRFwMkA7vGwByVK0JeDJBs6RpDNJIz1YjL6C6eR9OuG33mrhHPTAvIUbmiVl6sMe3iUcwpSNLMUTlzFHMwL8bc6BpbBpogYd3FjbwYs9mIa5CjckXz/sZt5AuAxAAjrmmOyhmjb2NejNkBh7CBJkiUd7EoL8bMN+K4fau30d/Ii5ls9JmhRtymHJVLRt/IvBgzyIjnGOcFGHFrjL4xg2EMRhxSafTbussqIInWNZCjctDo65oXYzp1DeSoIB0HwxiMOKSv0dcjL8bUHqtmS4zTj1APUP+jGP3ydG2y6BwkTVPOR66je0Bh1PDqO1Qdv5Q9eiHwHwAECqvmXU5FUgZJa2E0BIUsGFZ0CpLWg2rwvQcURTtVPeBIUSdhBXzmUOSq2Rh9sN+457PlsQwf+Qc+ciimgX9I9i1h6Z1kmEbQRSCj6ofLb5kESKAk9VO0GpKD2VnMmUNJNdqqIzshQReBTKwjBsMOmWngaVzWaDCXaLiK+GghcfXkF63qJMhpQSloreHVx2TkuaR0EuS0oDQMfKuu7DhuMYW5G8heycr/pQ5Jc5MiJg2hdCQlzyWhkyCnBZldX0yCYV/BBwmlqbTzXKl2EpWDMpA7SjvPle5xC4YdknHgSvkbeJ6iYc8hpwVJNPA54yBprSSFIDlKcSCLpWTYkdOCrDHwPCUjBS8CqTDwRWOOW4jEQ6oMfD5b3q49JK2BGOS0IBVKJc/FxdOM276Qym4ivv64WMM+uwc5LUgpJOTvFp3n4mKNk48uYrgefHgHfffwF01HpSAWPGFdBINVNgBy5OQ+umtbhi6eu0bl4wvGvheRC7aFdZJWTguAWABIoCee3kXHTu2nuz81YuT7EZkbFHfcgmE3VgEIh1/52m1AboPzuR3045PfMBMUgfUoBBIswDYbkACEez67rXuHMRcUYXkuIZCoWmQMiQEkAKHvUcxQUETlB5kAw46clsWAtGv56grNvPQOffjvGyYZ+MR5rsSdBAuw3QBks6P89NQ3mybfFInIc/HkLQ05LdP0ncOPRwZkU4G5P3JynzGgiKjPRJBgAbZ5mjq6t3l7N4kMAyXxgm2OLgJAbAclaZ0yGHYAkkSf3GjQ2ZlLdPH31zQ38PEXbPP4hiiDp+c6DshmR5n6yV564pldmhv4+LlCHrOLbGec5VB++iso3rQA2QKi5qAE9Rp3ICsWJFiAbQ4gQfFK61h6gzIaN88VCxJZi4ohcwDZ1L4Dn9f3osTMc0WGBDktANLPxM+89I7OlybWgu0YnQQLsHXW+JMPKAPk5y++ZUBkJXr9sqiGHQuw9VXnTIhsQJavmFEaUfNckToJ9mkBENMBoRh5w0iQ4Bt2AGI6IHHqmEcw7FiADUC26OzMJeMA2TTwUfJc4TsJBqu00z33b1MGSPnEgvZRFFHdhIc07GOMKIuy1Ee95tIBSEhIiLJBXQuDBIZdP0DiDE0BkM66Dpc/5DDsAMRFQChCnmsgJFiADUACXTx3zSpAWgq1YJuHoA1HLU0UeBBVgJi8zTFpffP+hh0LsHXR1NG99Mju+wCIcAM/eME2729ssABbF0BkzIS4BkgbKoX+IPXsIshpAZAFZ65zvwXbPTuJyIXDkFmALF9doddn/uzUte73NUfv4xYMu1J9O/+YMkB+8eLb9PFHdaeud7+vObpCgsEqtXrimV30rfxjAESuei7Y5t2pQk5LJSAqhqYcB2Sz7guhjDv2abkHyIf/uUEv/+BNpwFpM/B3DGTxLgYGht0hQDbn0gFIbwPPuxgYp45aOqzpDF6Dyrl0Q2dCpBn4LZC4ltMaf/IBOvbr/c1brSoBOXJyHwDRR3cs2OaDKLK5g0wd/crGUefpXUpAwditrt1k69cfvMPF73EFkM7iDEAJ/kzWI89Ujt0CkAGQkD/WExLf8+dcBGRTj+y+T8qzAVUCUj6xAEAGqJODLZCsU2PaVUBu/52UH6KJsVv9tU6s1BOSam3quk9Us/GNB8UZ+I4wxZkWKIMeBw1ANOgiRLXO55jwO1sNVWwEJOpEX/B3j53aL+wWMcZuTTlq3Vn/XaPyL0zMXrclu5W0OEXcCVIJyO+q79Fvq++h+sNp7dXzk3fMvPOwNLkICAl4NqDquXQAEqmLlLr9Oe9uXOpWQBJ4EBHFmQSUJI+DTgqIS0NTYgx797of6vaHi0vzq48/dGCciB41GZAvTYg7MWZGhujLXx+jtZWboY9emCo0SvPlC9//VehOstF6vJLJgKRRnFEeoglATDtqeT1PT32fT2KigZdVnP3uGKkC5P3FD5o3GaDIWnr1/GTPlaf99255vlHdRObIa6+OonIuXfNHsemrAXXeF5IGNYIWtGbC+1Qx8hqA0h6MlPU46G6AuD5VmEStOu+poX7/cXFp/ub4zuceZYxpHXx88OEdVPzZhLLffe/92+juT49g7NZIL+JXy7X82didhLrkWHTU8pWVpkdQ1sWexly6qQpT3wMhqdYmL5uQ5wpMtEpQZOuTGw0AkrSLEFvszGnFgoQM+gbeFVA2ozIAJPFRK9QpKRQkZ2qTxhh420HBVKEwrd2i+pwwSMiwPFcAyss/fLNZUAAE6lXPvXb/xoZknepGfWcSFFJQULaAAkBEG/bw9RwaktbCrnmAokbl438CIMIMO9U6F9AJgYQG5FsASoqAnFigv/zhn6huUYqYS2RRf76pA1kq5zqSAoKpQqHqm9NK3Ek2KPSNTAd//FG9+b3C8tUVAOK4YY/6byJDMijnAlAAiC2GPTYk1drUqu/5VdNBeX/xA21f49tv/B2ApNJF/GrY277Jjlsbv87o8d4AlMDMXzynXyEGr+nszCVUdDqYxKpbFvfXHZr4zWUbHl+tav6jFyCYKtTHsCfsJOFzL9qf/Y8vaNFRAEi68jyKvZ00NiSt3MuaLaAEPgCAWKvQOa1uGor7DzcGsg7czxjtteEq/vXdfzUfizb+1Qek/t7lqyt06pWL1KjfQimnZ9hfHzRYlUonIQPzXAP/jy45QYyhKTlKugg+ESQ2LtiWBQoAkdRFIua0hEPSckQl2y7sJihp5b0AiMyjVvIRDybihdi0YLtdaTxsB4DINezdFmDL7ySWPq6BUkgQBz+nfHwBgMjrIkJOOVyMMapXbL3QokDB0JQKwy6mLodE/JDFpfnV8Z3PPaT7fq64+t9/bzZvEe/6wr00+pm7AIgZ6rkAW0knaTW3is1XPCjwOAliAKLqqCXuhhIT+cJsNfDtijK8BUCUKXZOK+VOkiwfY4qizKScnbkEQFRIcK5QKCQ25bnCgHL5j73nzjE0pU6iBwOHRP4wUxZsC/kg6rfo3fNLzWXZnY+JAyAqvcjgBdhKOwkZsmBbpDqj9gBErdKoP5bGCz00MXuBEWVd+nCmju6l5Sur9NYbf0OlquoixBZPn/+e8FPMcDotjyqMuwUJ5kG0OGqlcophab3gFyZmV4loFB8dJElCclpSPElbNynhc4PkdZH08oM8PQNVr+Cjg+QZ9vQGAFODxMQF25Cxmk86WKUEEhKcn4GgPnWW6qmFpf0GXMhzQUolNKclvZM0Zcl+Lsg9wy4NEpMXbENuG3ZpkJi+YBvSuYvEW4Ct33HLwTwXJA0TKacUJuvt2LJgG9IEj5RyWso6CVm0YBvS5qglrZ6kQXKmNllxYSALkqJEC7C1hYQs3s8FSe8iczIMuxJIbFuwDalR0gXYWkNi44JtSLZhT74AW2tImkKeCzLsyM5UvFHkuaCYSj2npUcngYGHDKsbrsZ4wcBDserGHUiQ54Kid5FmTuu6M5C03jaOXJAR9cJUvm3kuSCdDbsGnYRo3fMLmIOHBmi+4VFO5QtgOlyFfLY8NkwjBcapiF1dEBGt+R5V1qleUuVDtIOkXQezswEsBdfWpEIb36YHcLTCsNqI6XrB8tnZPcPkFxlnOXQX27uGP7dOrFStTV7W8QUy3a9gPlvePkQjOc6bDwjCt/QWmXHy/FKDGhWZiV4rIWnXoexrTxGxAuMsjxoz14j7nlc6XXv+gikvmJl4lduMfgHdxYyu0TLiFR2MuBOQwOjDiAOS+N2l2OouMPrKjXhj2sSuYTUknUafcVbEt/kyuwZb9D2/dIvqc7obcechgdGXDEczqOpXTDLigKRHd8lQpkCcFWH0hRrxkm1dw1lIOrpLjnEe+JZnUevRjTht3L6dc+l9M1c/cBj9KEZcnxwVIFGkjdvIMPrdjLjpt28BifDugrxYYMR1zlEBEhh9ZUbclBwVINHT6D/FOC9aavSNy1EBEv2Nvg15scCIl0zNUQESo4y+WXkxW3JUgMTI7pKZ1tjoW5ejAiQGG33NBsOWPI+mbcxRARJLjL6qvJgLOSpAYll3aftGP83uYvRAEyCBNrtLjjgvijT6ruaoAIkTRj9RXsz5HBUgcUhR8mI2DzQBEihEd7mdF8t3M+LIUQESqM3oZyhT8DnLMc+fQ44KgiBjxHEJIAiQQFAi/T8AAP//NojMSb2rf6kAAAAASUVORK5CYII=";
  function ia() {
    var e =
        29 +
        O.global_font_offset.values[
          ch("global_font_offset", O.global_font_offset.defaultValue) - 1
        ],
      t = document.getElementById("body_container"),
      n = window.innerHeight,
      i = n / 1080;
    (Kd = e * i),
      (t.style.width = 1920 * i + "px"),
      (t.style.height = n + "px"),
      (document.body.style.fontSize = Kd + "px");
  }
  window.addEventListener(
    "resize",
    function () {
      r || ia();
    },
    !1
  );
  var oa = 19,
    da = 415,
    aa = 10252,
    sa = 413,
    ca = 412,
    la = 417,
    ua = 37,
    ra = 38,
    _a = 39,
    ma = 40,
    fa = 13,
    ha = 428,
    pa = 427,
    ga = 458,
    va = 457,
    a = 10009,
    ya = 81,
    wa = 404,
    xa = 65385,
    ba = 8,
    Aa = 65376,
    ka = 32,
    Ca = 46,
    Sa = [
      "ChannelUp",
      "ChannelDown",
      "MediaRewind",
      "MediaFastForward",
      "MediaStop",
      "MediaPlayPause",
      "MediaPlay",
      "MediaPause",
      "ColorF0Red",
      "ColorF1Green",
      "ColorF2Yellow",
      "ColorF3Blue",
      "Guide",
      "Info",
    ];
  var Ea = 0,
    Pa = 5,
    Ia = 1e4,
    ja = 0,
    Ma = !1,
    Ba = !1,
    La = !1,
    Oa = !1,
    Va = "",
    Ta = [
      "user:read:follows",
      "user:read:subscriptions",
      "chat:edit",
      "chat:read",
    ],
    Fa = "https://id.twitch.tv/oauth2/token?";
  function Da() {
    Na(!1), document.body.removeEventListener("keydown", Ua), b("oauth_scroll");
  }
  function Ua(e) {
    if (!Ma && !Ba)
      switch (e.keyCode) {
        case a:
          kf() ? Af() : xf() ? wf() : ((x.Main_Go = X_), Da(), If());
          break;
        case da:
        case oa:
        case aa:
        case fa:
          Ra();
      }
  }
  function Ra() {
    document.body.removeEventListener("keydown", Ua),
      document.body.addEventListener("keydown", Ga, !1),
      (F_.placeholder = $),
      F_.focus(),
      (Ba = !0);
  }
  function Na(e) {
    var t;
    F_.blur(),
      null !== F_ &&
        ((t = F_.cloneNode(!0)),
        F_.parentNode.replaceChild(t, F_),
        (F_ = document.getElementById("oauth_input"))),
      document.body.removeEventListener("keydown", Ga),
      (F_.placeholder = te + $),
      e && document.body.addEventListener("keydown", Ua, !1),
      window.setTimeout(function () {
        Ba = !1;
      }, 250);
  }
  function Ga(e) {
    if (!Ma)
      switch (e.keyCode) {
        case a:
          xf() ? wf() : kf() ? Af() : ((x.Main_Go = X_), Da(), If());
          break;
        case Ca:
          (F_.value = ""), e.preventDefault();
          break;
        case Aa:
        case xa:
        case ma:
          "" !== F_.value &&
            null !== F_.value &&
            ((ja = F_.value), (Ea = 0), b("oauth_scroll"), lf(), Ja()),
            Na(!0);
          break;
        case ba:
          (F_.value = F_.value.slice(0, -1)), e.preventDefault();
          break;
        case ka:
          (F_.value += " "), e.preventDefault();
      }
  }
  function Ha(i, o, d) {
    var a = new XMLHttpRequest();
    a.open("GET", "https://id.twitch.tv/oauth2/validate", !0),
      a.setRequestHeader(Om, Xm + Is),
      (a.timeout = Ia),
      (a.ontimeout = function () {}),
      (a.onreadystatechange = function () {
        var e, t, n;
        4 === a.readyState &&
          (200 === a.status
            ? (o(),
              (e = JSON.parse(a.responseText)),
              window.setTimeout(function () {
                za(0, null, null);
              }, 1e3 * (parseInt(e.expires_in) - 60)))
            : 401 === a.status
            ? d()
            : ((e = i), (t = o), (n = d), ++e < 5 ? Ha(e, t, n) : n && n()));
      }),
      a.send(null);
  }
  function za(i, o, d) {
    var a = new XMLHttpRequest();
    a.open(
      "POST",
      "https://id.twitch.tv/oauth2/token?client_id=" +
        ks +
        "&client_secret=" +
        Ps +
        "&grant_type=client_credentials",
      !0
    ),
      (a.timeout = Ia),
      (a.ontimeout = function () {}),
      (a.onreadystatechange = function () {
        var e, t, n;
        4 === a.readyState &&
          (200 === a.status
            ? ((t = a.responseText),
              (n = o),
              (t = JSON.parse(t)) && (Is = t.access_token),
              (x.AddCode_main_token = Is),
              (Jm = [
                [Mm, ks],
                ["Authorization", Xm + Is],
              ]),
              n && n(),
              Lf())
            : ((t = i), (n = o), (e = d), ++t < 5 ? za(t, n, e) : e && e()));
      }),
      a.send(null);
  }
  function qa(o, d, a, s) {
    var c, e;
    v[o] &&
      v[o].access_token &&
      ((c = new XMLHttpRequest()),
      (e =
        Fa +
        "grant_type=refresh_token&client_id=" +
        encodeURIComponent(ks) +
        "&client_secret=" +
        encodeURIComponent(Ps) +
        "&refresh_token=" +
        encodeURIComponent(v[o].refresh_token) +
        "&redirect_uri=" +
        As),
      c.open("POST", e, !0),
      (c.timeout = Ia),
      (c.ontimeout = function () {}),
      (c.onreadystatechange = function () {
        if (4 === c.readyState)
          if (200 === c.status)
            (t = c.responseText),
              (n = o),
              (i = a),
              Qa((t = JSON.parse(t)).scope)
                ? ((v[n].access_token = t.access_token),
                  (v[n].refresh_token = t.refresh_token),
                  (v[n].expires_in = t.expires_in),
                  tc(),
                  ns(n))
                : Wa(n),
              i && i();
          else
            try {
              var e = JSON.parse(c.responseText);
              e.message && Ah(e.message, "Invalid refresh token")
                ? (Wa(o), s && s())
                : Xa(o, d, a, s);
            } catch (e) {
              Xa(o, d, a, s);
            }
        var t, n, i;
      }),
      c.send(null));
  }
  function Xa(e, t, n, i) {
    ++t < 5 ? qa(e, t, n, i) : i && i();
  }
  function Qa(e) {
    for (var t = 0, n = Ta.length; t < n; t++)
      if (-1 === e.indexOf(Ta[t])) return;
    return 1;
  }
  function Ja() {
    xs(
      Fa +
        "grant_type=authorization_code&client_id=" +
        encodeURIComponent(ks) +
        "&client_secret=" +
        encodeURIComponent(Ps) +
        "&code=" +
        encodeURIComponent(ja) +
        "&redirect_uri=" +
        As,
      "POST",
      0,
      null,
      Ya
    );
  }
  function Ya(e) {
    4 === e.readyState &&
      (200 === e.status
        ? ((e = e.responseText),
          (e = JSON.parse(e)),
          (v[x.Users_AddcodePosition].access_token = e.access_token),
          (v[x.Users_AddcodePosition].refresh_token = e.refresh_token),
          (Ea = 0),
          Za())
        : (++Ea < Pa ? Ja : Ka)());
  }
  function Ka() {
    uf(),
      gf(Pt),
      window.setTimeout(function () {
        vf(), (pm = 0), vf(), _("oauth_scroll"), Ra(), (Ma = !1);
      }, 4e3),
      (v[x.Users_AddcodePosition].access_token = 0),
      (v[x.Users_AddcodePosition].refresh_token = 0),
      tc();
  }
  function Wa(e) {
    (yA = !1),
      uf(),
      (v[e].access_token = 0),
      (v[e].refresh_token = 0),
      tc(),
      Lf();
  }
  function Za() {
    bs($a, x.Users_AddcodePosition, 0);
  }
  function $a(e) {
    4 === e.readyState &&
      (200 === e.status
        ? ((e = e.responseText),
          (e = JSON.parse(e)).login &&
          -1 !== e.login.indexOf(v[x.Users_AddcodePosition].name)
            ? (tc(),
              (pm = 0),
              uf(),
              (yA = !1),
              (x.Main_Go = X_),
              Lf(),
              gf(bt),
              window.setTimeout(function () {
                uf(), Da(), (yA = !1), wA(), (Ma = !1), (F_.value = "");
              }, 3e3))
            : ((v[x.Users_AddcodePosition].access_token = 0),
              (v[x.Users_AddcodePosition].refresh_token = 0),
              gf(kn + v[x.Users_AddcodePosition].name),
              window.setTimeout(function () {
                vf(), _("oauth_scroll"), Ra();
              }, 4e3)))
        : (++Ea < Pa ? Za : Ka)());
  }
  function es(e, t) {
    bs(ts, e, t);
  }
  function ts(e, t, n) {
    var i, o;
    4 === e.readyState &&
      (200 === e.status
        ? ((i = e.responseText),
          (o = t),
          (i = JSON.parse(i)).scopes && !Qa(i.scopes)
            ? Wa(o)
            : i.expires_in && ((v[o].expires_in = i.expires_in), ns(o)))
        : 401 === e.status || 403 === e.status
        ? qa(t, 0, null, null)
        : ((i = t), (o = n), ++o < Pa && es(i, o)));
  }
  function ns(e) {
    window.clearTimeout(v[e].timeout_id),
      v[e].access_token &&
        (v[e].timeout_id = window.setTimeout(function () {
          qa(e, 0, null, null);
        }, 1e3 * (parseInt(v[e].expires_in) - 60)));
  }
  function is() {
    (Ea = 0), (La = !1), os();
  }
  function os() {
    xs(
      Bm + "users/" + v[0].id + "/follows/channels/" + Va + Fm,
      "GET",
      2,
      null,
      ds
    );
  }
  function ds(e) {
    4 === e.readyState &&
      (200 === e.status
        ? ((La = !0), (Oa ? T0 : Tc)())
        : 404 === e.status
        ? ((e = e.responseText),
          (e = JSON.parse(e)).error &&
          -1 !== (e.error + "").indexOf("Not Found")
            ? ((La = !1), (Oa ? T0 : Tc)())
            : as())
        : as());
  }
  function as() {
    (++Ea < Pa ? os : Oa ? T0 : Tc)();
  }
  function ss() {
    (Ea = 0), cs();
  }
  function cs() {
    xs(
      Bm + "users/" + v[0].id + "/subscriptions/" + Va + Fm,
      "GET",
      3,
      Vm + v[0].access_token,
      ls
    );
  }
  function ls(e) {
    var t;
    4 === e.readyState &&
      (200 === e.status
        ? ny
          ? (Q2(),
            Y2(de + Et + so),
            window.setTimeout(function () {
              O1 && wy();
            }, 4e3))
          : ((ny = !0), (S1 = Ug), _y())
        : 422 === e.status
        ? rs()
        : 404 === e.status
        ? ((t = JSON.parse(e.responseText)).error &&
            -1 !== (t.error + "").indexOf("Not Found")
            ? rs
            : us)()
        : 401 === e.status || 403 === e.status
        ? qa(0, 0, ss, rs)
        : us());
  }
  function us() {
    (++Ea < Pa ? cs : rs)();
  }
  function rs() {
    Q2(),
      Y2(de + St),
      window.setTimeout(function () {
        O1 && wy();
      }, 4e3);
  }
  function _s() {
    (Ea = 0), (x.Main_gameSelected_id ? hs : ms)();
  }
  function ms() {
    var e =
        "https://api.twitch.tv/api/games/" +
        encodeURIComponent(x.Main_gameSelected),
      t = "GET",
      n = 2,
      i = null,
      o = fs,
      d = new XMLHttpRequest();
    d.open(t, e, !0), (d.timeout = Ia), (mm[2][1] = i);
    for (var a = 0; a < n; a++) d.setRequestHeader(mm[a][0], mm[a][1]);
    (d.ontimeout = function () {}),
      (d.onreadystatechange = function () {
        o(d);
      }),
      d.send(null);
  }
  function fs(e) {
    4 === e.readyState &&
      (200 === e.status
        ? ((x.Main_gameSelected_id = JSON.parse(e.responseText)._id),
          (Ea = 0),
          hs())
        : ++Ea < Pa && ms());
  }
  function hs() {
    xs(
      Bm + "users/" + v[0].id + "/follows/games/" + x.Main_gameSelected_id + Fm,
      "PUT",
      3,
      Vm + v[0].access_token,
      ps
    );
  }
  function ps(e) {
    4 === e.readyState &&
      (200 === e.status
        ? ((Ax = !0), Iw())
        : 401 === e.status || 403 === e.status
        ? qa(0, 0, _s, null)
        : ++Ea < Pa && hs());
  }
  function gs() {
    (Ea = 0), vs();
  }
  function vs() {
    xs(
      "https://api.twitch.tv/api/users/" +
        v[0].name +
        "/follows/games/" +
        encodeURIComponent(x.Main_gameSelected) +
        "?oauth_token=" +
        v[0].access_token +
        Tm,
      "DELETE",
      2,
      null,
      ys
    );
  }
  function ys(e) {
    4 === e.readyState &&
      (404 === e.status || 204 === e.status
        ? 204 === e.status ||
          -1 !== JSON.parse(e.responseText).message.indexOf("does not follow")
          ? ((Ax = !1), Iw())
          : ws()
        : 401 === e.status || 403 === e.status
        ? qa(0, 0, gs, null)
        : ws());
  }
  function ws() {
    ++Ea < Pa ? vs() : (gf(so), window.setTimeout(vf, 2e3));
  }
  function xs(e, t, n, i, o) {
    var d = new XMLHttpRequest();
    d.open(t, e, !0), (d.timeout = Ia), (_m[2][1] = i);
    for (var a = 0; a < n; a++) d.setRequestHeader(_m[a][0], _m[a][1]);
    (d.ontimeout = function () {}),
      (d.onreadystatechange = function () {
        o(d);
      }),
      d.send(null);
  }
  function bs(e, t, n) {
    var i = new XMLHttpRequest();
    i.open("GET", "https://id.twitch.tv/oauth2/validate", !0),
      i.setRequestHeader(Om, Xm + v[t].access_token),
      (i.timeout = 1e4),
      (i.ontimeout = function () {}),
      (i.onreadystatechange = function () {
        e(i, t, n);
      }),
      i.send(null);
  }
  var As =
      "https://fgl27.github.io/smarttv-twitch/release/githubio/login/twitch.html",
    ks = "1mknxvmcmbynqcg2xvd1v2sydxfbjx",
    Cs =
      '{"query":"{streamPlaybackAccessToken(channelName:\\"%x\\", params:{platform:\\"android\\",playerType:\\"mobile\\"}){value signature}}"}',
    Ss =
      '{"query":"{videoPlaybackAccessToken(id:\\"%x\\", params:{platform:\\"android\\",playerType:\\"mobile\\"}){value signature}}"}',
    e = [
      "ncx6brgo",
      "5r0iktrpk6qp7bd",
      "4mv6wki5h1ko",
      "x3236q9tksvx2h1",
      "kimne78kx3",
      "uth",
      "OA",
      "ization",
      "Author",
      "vpf2spng1y",
      "fedwh3mrqg",
      "dua1d88ggp",
      "Clie",
      "nt-ID",
      "_yes_they_will_......_How_the_app_works_DAAA!_go_do_something_else_loser_you_cant_prevent_the_app_from_work",
      "loooossser_willbe_looooosssser",
    ],
    Es = e[4] + e[0] + e[2],
    Ps = e[3] + e[1],
    Is = e[15] + e[14],
    js = [
      [e[12] + e[13], Es],
      [e[8] + e[7], e[6] + e[5] + " " + e[10] + e[11] + e[9]],
    ],
    Ms = 0,
    Bs = 5,
    Ls = 3500,
    v = [],
    Os = null,
    Vs = !1,
    Ts = !1;
  function Fs() {
    (x.Main_Go = sm),
      Ox(ke),
      vf(),
      (T_.placeholder = ee),
      _("add_user_scroll"),
      Rs();
  }
  function Ds() {
    Ns(!1),
      document.body.removeEventListener("keydown", Us),
      document.body.removeEventListener("keydown", Gs),
      b("add_user_scroll");
  }
  function Us(e) {
    if (!Vs && !Ts && x.Main_Go === sm)
      switch (e.keyCode) {
        case ya:
        case ba:
        case a:
          xf()
            ? wf()
            : kf()
            ? Af()
            : (0 < v.length && x.Main_Go !== X_
                ? (x.Main_Go = x.Main_Before)
                : (x.Main_Go = q_),
              Ds(),
              If());
          break;
        case da:
        case oa:
        case aa:
        case ka:
        case fa:
          Rs();
      }
  }
  function Rs() {
    document.body.removeEventListener("keydown", Us),
      document.body.addEventListener("keydown", Gs, !1),
      (T_.placeholder = ee),
      T_.focus(),
      (Ts = !0);
  }
  function Ns(e) {
    var t;
    T_.blur(),
      null !== T_ &&
        ((t = T_.cloneNode(!0)),
        T_.parentNode.replaceChild(t, T_),
        (T_ = document.getElementById("user_input"))),
      document.body.removeEventListener("keydown", Gs),
      (T_.placeholder = te + ee),
      e && document.body.addEventListener("keydown", Us, !1),
      window.setTimeout(function () {
        A(function () {
          Ts = !1;
        });
      }, 500);
  }
  function Gs(e) {
    if (!Vs && x.Main_Go === sm)
      switch (e.keyCode) {
        case ya:
        case a:
          xf()
            ? wf()
            : kf()
            ? Af()
            : (0 < v.length && x.Main_Go !== X_
                ? (x.Main_Go = x.Main_Before)
                : (x.Main_Go = q_),
              Ds(),
              If());
          break;
        case Ca:
          T_.value = "";
          break;
        case Aa:
        case xa:
        case ma:
          "" !== T_.value &&
            null !== T_.value &&
            ((t = Os = T_.value),
            0 <
            v.filter(function (e) {
              return e.name === t;
            }).length
              ? (uf(),
                gf(q + " " + Os + Pe),
                window.setTimeout(function () {
                  vf(), Rs();
                }, 1500))
              : ((Ls = 3500),
                (Vs = !(Ms = 0)),
                b("add_user_scroll"),
                lf(),
                Hs())),
            Ns(!0);
          break;
        case ba:
          T_.value = T_.value.slice(0, -1);
          break;
        case ka:
          T_.value += " ";
      }
    var t;
  }
  function Hs() {
    _h(
      Lm + "users?login=" + encodeURIComponent(Os),
      Ls,
      2,
      null,
      zs,
      qs,
      !1,
      null,
      !0
    );
  }
  function zs(e) {
    JSON.parse(e).data.length
      ? ((T_.value = ""),
        document.body.removeEventListener("keydown", Us),
        (Os = JSON.parse(e).data[0]),
        v.push({
          name: Os.login,
          id: Os.id,
          display_name: Os.display_name,
          logo: Os.profile_image_url,
          access_token: 0,
          refresh_token: 0,
          expires_in: 0,
          timeout_id: null,
        }),
        tc(),
        (yA = !1),
        (gA = Os.login),
        (pA = !0),
        Ds(),
        (x.Main_Go = X_),
        uf(),
        1 === v.length && Js(),
        Mf(),
        (Vs = !1))
      : Xs();
  }
  function qs() {
    ++Ms < Bs ? ((Ls += 500), Hs()) : Xs();
  }
  function Xs() {
    (Os = null),
      uf(),
      gf(Se),
      window.setTimeout(function () {
        Fs();
      }, 1e3),
      (Vs = !1);
  }
  function Qs() {
    if (0 < (v = lh("AddUser_UsernameArray", [])).length)
      for (var e = 0; e < v.length; e++)
        (v[e].timeout_id = null),
          v[e].access_token && es(e, 0),
          e || Js(),
          Zs(e, 0);
    else Ys();
  }
  function Js() {
    Ks(v[0].logo, v[0].display_name);
  }
  function Ys() {
    Ks(Zd, ke);
  }
  function Ks(e, t) {
    m(
      "side_panel_new_0_img",
      '<img class="side_panel_new_img" alt="" src="' +
        e +
        '" onerror="this.onerror=null;this.src=\'' +
        Zd +
        "'\">"
    ),
      _7(t),
      (e = t.length),
      ((t = document.getElementById("side_panel_movel")).style.marginLeft =
        "calc(-" + Hb + "% - " + (e = 11 < e ? e - 11 : 0) + "ch)"),
      (t.style.width = "calc(" + qb + "% + " + e + "ch)");
  }
  function Ws() {
    return 0 < v.length;
  }
  function Zs(e, t) {
    _h(
      Lm + "users?login=" + encodeURIComponent(v[e].name),
      Ls,
      2,
      null,
      $s,
      ec,
      e,
      t,
      !0
    );
  }
  function $s(e, t) {
    (e = JSON.parse(e)).data.length &&
      ((e = e.data[0]),
      (v[t].display_name = e.display_name),
      (v[t].logo = e.profile_image_url),
      t || Js()),
      tc();
  }
  function ec(e, t) {
    ++t < Bs && Zs(e, t);
  }
  function tc() {
    var e;
    0 < v.length &&
      ((e = v.splice(0, 1)),
      v.sort(function (e, t) {
        return e.display_name
          .toLowerCase()
          .localeCompare(t.display_name.toLowerCase());
      }),
      v.splice(0, 0, e[0])),
      sh("AddUser_UsernameArray", JSON.stringify(v));
  }
  function nc() {
    return 0 < v.length;
  }
  var ic,
    oc,
    dc,
    ac = 0,
    sc = 0,
    cc = 0,
    lc = 5,
    uc = 3500,
    rc = !1,
    _c = !1,
    mc = [
      "cc_thumbdiv",
      "cc_img",
      "cc_infodiv",
      "cc_name",
      "cc_createdon",
      "cc_game",
      "cc_viwers",
      "cc_duration",
      "cc_cell",
      "sccempty_",
      "channel_content_scroll",
    ],
    fc = !1,
    hc = "",
    pc = null,
    gc = "",
    vc = "",
    yc = "",
    wc = {},
    xc = !1,
    bc = null,
    Ac = "",
    kc = !1;
  function Cc() {
    Tf(),
      document.body.removeEventListener("keydown", zc),
      b(mc[10]),
      (x.My_channel = !1),
      Rc();
  }
  function Sc() {
    Ox(x.Main_selectedChannelDisplayname),
      nh(),
      (rc = !1),
      b(mc[10]),
      (bc = null),
      lf(),
      vf(),
      (hc = x.Main_selectedChannel),
      (rc = fc = !1),
      (ic = void (ac = sc = 0)),
      Ec(),
      Pc();
  }
  function Ec() {
    (Am = !0), (cc = 0), (uc = 3500);
  }
  function Pc() {
    _h(
      Bm +
        "streams/" +
        encodeURIComponent(void 0 !== ic ? ic : x.Main_selectedChannel_id) +
        Fm,
      uc,
      2,
      null,
      Ic,
      jc
    );
  }
  function Ic(e) {
    JSON.parse(e).stream
      ? ((pc = e), Ec(), Lc())
      : ic
      ? ((pc = null), Ec(), Lc())
      : (Ec(), fh(Bc, (dc = new Date().getTime()), x.Main_selectedChannel));
  }
  function jc() {
    ++cc < lc ? ((uc += 500), Pc()) : Mc();
  }
  function Mc() {
    (pc = null), Ec(), Lc();
  }
  function Bc(e, t) {
    if (dc === t) {
      if (
        200 === e.status &&
        (t = JSON.parse(e.responseText).data).user &&
        t.user.hosting
      )
        return (e = t.user.hosting), (ic = parseInt(e.id)), void Pc();
      Mc();
    }
  }
  function Lc() {
    _h(Bm + "channels/" + x.Main_selectedChannel_id + Fm, D1, 2, null, Oc, Vc);
  }
  function Oc(e) {
    (e = JSON.parse(e)),
      (bc = (bc = e.video_banner) && bc.replace("1920x1080", yh)),
      (Ac = e.profile_banner || ea),
      (gc = e.views),
      (vc = e.followers),
      (yc = e.description),
      (x.Main_selectedChannelLogo = e.logo),
      (x.Main_selectedChannelPartner = e.partner),
      Fc();
  }
  function Vc() {
    ++cc < lc
      ? ((uc += 500), Lc())
      : ((bc = null),
        (Ac = ea),
        (yc = vc = gc = ""),
        (x.Main_selectedChannelLogo = Zd),
        Fc());
  }
  function Tc() {
    m(
      "channel_content_titley_2",
      La
        ? '<i class="icon-heart" style="color: #6441a4; font-size: 100%;"></i>' +
            g +
            g +
            At
        : '<i class="icon-heart-o" style="color: #FFFFFF; font-size: 100%; "></i>' +
            g +
            g +
            (Ws() ? kt : It)
    );
  }
  function Fc() {
    x.Main_selectedChannelLogo || (x.Main_selectedChannelLogo = Zd),
      m(
        "channel_content_thumbdiv0_1",
        '<img class="stream_img_channel_logo" alt="" src="' +
          x.Main_selectedChannelLogo.replace("300x300", "600x600") +
          '" onerror="this.onerror=null;this.src=\'' +
          Zd +
          "'\">"
      ),
      m(
        "channel_content_img0_1",
        '<img class="stream_img_channel" alt="" src="' +
          Ac +
          '" onerror="this.onerror=null;this.src=\'' +
          ea +
          "'\">"
      );
    var e,
      t,
      n,
      i,
      o,
      d,
      a,
      s,
      c,
      l = x.Main_selectedChannelDisplayname;
    m(
      "channel_content_infodiv0_1",
      (l =
        (l =
          (l =
            (l += x.Main_selectedChannelPartner
              ? g +
                g +
                '<img style="display: inline-block; width: 2ch; vertical-align: middle;" alt="" src="' +
                na +
                '">'
              : "") + ("" !== gc ? h + Cf(gc) + _e : "")) +
          ("" !== vc ? h + Cf(vc) + Vt : "")) +
        ("" !== yc ? h + h + N + ":" + h + f4.parse(yc) : ""))
    ),
      pc && (l = JSON.parse(pc)).stream
        ? ((d = void 0 !== ic ? x.Main_selectedChannelDisplayname + Ee : ""),
          (e = (l = l.stream).channel.name),
          (t = l.channel._id),
          (n = l.preview.template),
          (i = f4.parse(l.channel.status)),
          (o = l.game),
          (d = d + l.channel.display_name),
          (a = W + U2(l.created_at) + g + Y + Cf(l.viewers) + g + me),
          (s = Sf(
            l.video_height,
            l.average_fps,
            l.channel.broadcaster_language
          )),
          (l = Ef(l.broadcast_platform)),
          (c = void 0 !== ic),
          (n = n || $d),
          document
            .getElementById("channel_content_cell0_1")
            .setAttribute(Um, JSON.stringify([e, t, l, d])),
          m(
            "channel_content_thumbdiv0_0",
            '<div class="stream_thumbnail_live_img"><img class="stream_img" alt="" src="' +
              n.replace("{width}x{height}", yh) +
              zm +
              '" onerror="this.onerror=null;this.src=\'' +
              $d +
              '\'"></div><div class="stream_thumbnail_live_text_holder"><div class="stream_text_holder"><div id="channel_content_cell0_3" style="line-height: 1.6ch;"><div class="stream_info_live_name" style="width:' +
              (c ? 99 : 66) +
              '%; display: inline-block;"><i class="icon-' +
              (l ? "refresh" : "circle") +
              ' live_icon strokedeline" style="color: ' +
              (l ? "#FFFFFF" : c ? "#FED000" : "red") +
              ';"></i> ' +
              d +
              '</div><div class="stream_info_live" style="width:' +
              (c ? 0 : 33) +
              '%; float: right; text-align: right; display: inline-block;">' +
              (c ? "" : s) +
              '</div></div><div class="stream_info_live_title">' +
              i +
              '</div><div id="channel_content_cell0_5" class="stream_info_live">' +
              ("" !== o ? J + o : "") +
              '</div><div class="stream_info_live">' +
              a +
              "</div></div></div>"
          ),
          (sc = 1))
        : ((rc = !0),
          m(
            "channel_content_thumbdiv0_0",
            '<div class="stream_thumbnail_live_img"><img class="stream_img" alt="" src="' +
              bc +
              zm +
              '" onerror="this.onerror=null;this.src=\'' +
              $d +
              '\'"></div><div class="stream_thumbnail_live_text_holder"><div class="stream_text_holder" style="font-size: 150%;"><div style="line-height: 1.6ch;"><div class="stream_info_live_name" style="width:99%; display: inline-block;">' +
              x.Main_selectedChannelDisplayname +
              '</div><div class="stream_info_live" style="width:0%; float: right; text-align: right; display: inline-block;"></div></div><div class="stream_info_live">' +
              Oi +
              "</div></div></div>"
          )),
      fc || ((fc = !0), rc || (ac = 1), Uc(), Lf(), _(mc[10]), uf()),
      Dc(),
      (Am = !1);
  }
  function Dc() {
    _c
      ? Tc()
      : Ws()
      ? ((Va = x.Main_selectedChannel_id), (Oa = !1), is())
      : ((La = !1), Tc());
  }
  function Uc() {
    ac
      ? c("channel_content_thumbdiv0_0", Dm)
      : c("channel_content_thumbdivy_" + sc, "stream_switch_focused"),
      Hf();
  }
  function Rc() {
    ac
      ? l("channel_content_thumbdiv0_0", Dm)
      : l("channel_content_thumbdivy_" + sc, "stream_switch_focused");
  }
  function Nc() {
    var e;
    ac
      ? (document.body.removeEventListener("keydown", zc),
        b(mc[10]),
        (x.Play_selectedChannel = JSON.parse(
          document.getElementById("channel_content_cell0_1").getAttribute(Um)
        )),
        (x.IsRerun = x.Play_selectedChannel[2]),
        (x.Play_selectedChannelDisplayname = x.Play_selectedChannel[3]),
        (x.Play_selectedChannel = x.Play_selectedChannel[0]),
        -1 !== x.Play_selectedChannelDisplayname.indexOf(Ee)
          ? ((x.Play_isHost = !0),
            (x.Play_DisplaynameHost = x.Play_selectedChannelDisplayname),
            (x.Play_selectedChannelDisplayname =
              x.Play_selectedChannelDisplayname.split(Ee)[1]),
            (x.Play_selectedChannel_id = ic))
          : (x.Play_selectedChannel_id = x.Main_selectedChannel_id),
        (e = document.getElementById("channel_content_cell0_5").textContent),
        (x.Play_gameSelected = -1 !== e.indexOf(J) ? e.split(J)[1] : ""),
        A(Yf))
      : sc
      ? 1 === sc
        ? (document.body.removeEventListener("keydown", zc),
          b(mc[10]),
          Rc(),
          A(function () {
            (M = qw), Wy();
          }))
        : 2 === sc && (gf(Bt), window.setTimeout(vf, 2e3))
      : (document.body.removeEventListener("keydown", zc),
        b(mc[10]),
        Rc(),
        A(function () {
          (M = tx), Wy();
        }));
  }
  function Gc() {
    (x.Main_selectedChannel_id = x.Main_selectedChannel_id),
      (x.Main_selectedChannelLogo = x.Main_selectedChannelLogo),
      (x.Main_selectedChannel = x.Main_selectedChannel),
      (x.Main_selectedChannelDisplayname = x.Main_selectedChannelDisplayname),
      (_c = wc.ChannelContent_UserChannels),
      (x.Main_BeforeChannel = x.Main_BeforeChannel),
      (xc = !(wc = {}));
  }
  function Hc(e) {
    e.keyCode === fa &&
      (window.clearTimeout(oc),
      document.body.removeEventListener("keyup", Hc),
      document.body.addEventListener("keydown", zc, !1),
      kc || Nc());
  }
  function zc(e) {
    if (!Am && !Xf())
      switch ((qf(), e.keyCode)) {
        case ya:
        case ba:
        case a:
          kf()
            ? Af()
            : xf()
            ? wf()
            : (Rc(),
              document.body.removeEventListener("keydown", zc),
              (x.Main_Go = x.Main_BeforeChannel),
              (x.Main_BeforeChannel = q_),
              Cc(),
              r7(),
              (x.Main_selectedChannel_id = ""),
              Mf());
          break;
        case ua:
          !ac && sc
            ? (Rc(), --sc < 0 && (sc = 2), Uc())
            : (document.body.removeEventListener("keydown", zc), n7(zc));
          break;
        case _a:
          ac || (Rc(), 2 < ++sc && (sc = 0), Uc());
          break;
        case ra:
        case ma:
          (ac = ac || rc ? (Rc(), 0) : (Rc(), 1)), Uc();
          break;
        case da:
        case oa:
        case aa:
        case ka:
          Nc();
          break;
        case fa:
          V("enter_refresh")
            ? Nc()
            : (document.body.removeEventListener("keydown", zc, !1),
              document.body.addEventListener("keyup", Hc, !1),
              (kc = !1),
              (oc = window.setTimeout(ah, 500)));
          break;
        case va:
        case ga:
          ah();
      }
  }
  var qc,
    Xc,
    Qc,
    Jc,
    Yc,
    Kc,
    Wc,
    Zc,
    $c,
    el,
    tl,
    nl,
    il,
    ol,
    dl = 6,
    al = 11,
    sl = parseInt((al + 1) / 2),
    cl = dl,
    ll = 0,
    ul = "";
  function rl() {
    hu = JSON.parse(Wd);
    var e = 0;
    (Xc = e++),
      (Qc = e++),
      (Jc = e++),
      (Yc = e++),
      (Kc = e++),
      (Wc = e++),
      (Zc = e++),
      ($c = e++),
      (el = e++),
      (tl = +e),
      (nl = 10),
      (il = 11);
  }
  function _l(e) {
    e === ll && (ml(), sf("chat_send") && !Rl() && Dl());
  }
  function ml() {
    var e = "",
      e = xr[ll]
        ? ((t = xr[ll]).hasOwnProperty("emote-only") &&
            t["emote-only"] &&
            (e += "Emote-only, "),
          t.hasOwnProperty("rk9") &&
            t.rk9 &&
            (e += "R9K messages with more than 9 characters must be unique, "),
          t.hasOwnProperty("slow") &&
            t.slow &&
            (e +=
              "Slow" +
              (t.slow
                ? " wait " + t.slow + " second(s)  between sending messages"
                : "") +
              ", "),
          t.hasOwnProperty("subs-only") &&
            t["subs-only"] &&
            (e += "Subscribers-only, "),
          t.hasOwnProperty("followers-only") &&
            -1 !== t["followers-only"] &&
            (e +=
              "Followers-only" +
              (t["followers-only"]
                ? " minimum " + t["followers-only"] + " minute(s) fallowing"
                : "") +
              ", "),
          e.slice(0, -2))
        : Ld,
      t = x.Play_selectedChannelDisplayname;
    m("chat_state", t + g + Eo + h + ("" === e ? Po : e));
  }
  function fl() {
    Rl()
      ? (gl(),
        Sh("keydown", wl),
        (u.placeholder = So),
        (qc = Eh(
          function () {
            jh(u, "chat_input_class_focus"), u.focus(), Ch("keydown", xl);
          },
          200,
          qc
        )))
      : Dl();
  }
  function hl(e) {
    var t;
    Ph(qc),
      Mh(u, "chat_input_class_focus"),
      u.blur(),
      null !== u &&
        ((t = u.cloneNode(!0)),
        u.parentNode.replaceChild(t, u),
        (u = k("chat_send_input"))),
      Sh("keydown", xl),
      (u.placeholder = So),
      e && Ch("keydown", wl),
      0;
  }
  function pl() {
    gl(), c("chat_send_button" + cl, "button_chat_focused");
  }
  function gl() {
    for (var e = 0; e < al + 1; e++)
      l("chat_send_button" + e, "button_chat_focused");
  }
  function vl(e, t) {
    m("dialog_warning_chat_text", e),
      _("dialog_warning_chat"),
      Ph(ol),
      t &&
        (ol = Eh(function () {
          b("dialog_warning_chat");
        }, t));
  }
  function yl() {
    switch (cl) {
      case Xc:
        Sh("keydown", wl),
          (Hl = {
            emote_sorting: {
              defaultValue: Hl.emote_sorting.defaultValue,
              values: [Ed, qi, Xi],
              title: Qo,
              summary: Yo,
            },
            force_show_chat_write: {
              defaultValue: Hl.force_show_chat_write.defaultValue,
              values: [Ed, Sd],
              title: Ko,
              summary: Wo,
            },
          });
        var e,
          t = Xo + h;
        for (e in ((zl = []), Hl))
          zl.push(e),
            (t += (function (e, t, n) {
              return (
                '<div id="' +
                e +
                '_div" class="settings_div"><div id="' +
                e +
                '_name" class="settings_name">' +
                t +
                '<div id="' +
                e +
                '_summary" class="settings_summary" style="font-size: 73%;">' +
                n +
                '</div></div><div class="settings_arraw_div"><div id="' +
                e +
                'arrow_left" class="left"></div></div><div id="' +
                e +
                '" class="strokedeline settings_value">' +
                Hl[e].values[Hl[e].defaultValue] +
                '</div><div class="settings_arraw_div"><div id="' +
                e +
                'arrow_right" class="right"></div></div></div>'
              );
            })(e, Hl[e].title + h, Hl[e].summary));
        m("chat_options_text", t + Nd + Ue + "</div>"),
          c(zl[(ql = 0)], "settings_value_focus"),
          c(zl[0] + "_div", "settings_div_focus"),
          Xl(zl[0]),
          _("chat_options"),
          Ch("keydown", Ql);
        break;
      case Qc:
        (u.value = ""), Fl();
        break;
      case Jc:
        Sl(hu, qo, "unicode");
        break;
      case Yc:
        Sl(s.bttvGlobal, Bo, "code");
        break;
      case Kc:
        Sl(s.ffzGlobal, Oo, "code");
        break;
      case Wc:
        Sl(s.seven_tvGlobal, To, "code");
        break;
      case Zc:
        "" !== u.value && null !== u.value
          ? Rl()
            ? ((n = u.value),
              (i = ll),
              kr &&
              wr &&
              1 === wr.readyState &&
              (wr.send("PRIVMSG #" + xu[i] + " :" + n),
              kv &&
                ((i = I[l1].defaultValue),
                vl(Td + g + i + (1 < i ? Mn : xi), 5e3)),
              1)
                ? ((u.value = ""), Fl())
                : vl(Zo, 1500))
            : Dl()
          : vl(G, 1e3);
        break;
      case $c:
        Vl("@" + x.Play_selectedChannelDisplayname);
        break;
      case el:
        Sl(pu[v[0].id], Mo, "code");
        break;
      case tl:
        Sl(s.bttv[w[ll]], Lo, "code");
        break;
      case nl:
        Sl(s.ffz[w[ll]], Vo, "code");
        break;
      case il:
        Sl(s.seven_tv[w[ll]], Fo, "code");
    }
    var n, i;
  }
  function wl(e) {
    switch (e.keyCode) {
      case a:
        (ll = 0),
          Gl(),
          Sh("keydown", xl),
          Sh("keydown", wl),
          Sh("keydown", Il),
          Sh("keydown", Ql),
          Ch("keydown", z0),
          b("chat_send"),
          b("chat_emotes_holder"),
          b("dialog_warning_chat"),
          b("chat_options"),
          hl(!1);
        break;
      case ua:
        --cl < 0 && (cl = al), pl();
        break;
      case _a:
        al < ++cl && (cl = 0), pl();
        break;
      case ra:
        sl - 1 < cl ? ((cl -= sl), pl()) : fl();
        break;
      case ma:
        cl < sl ? ((cl += sl), pl()) : fl();
        break;
      case fa:
        yl();
    }
  }
  function xl(e) {
    switch ((Tl(), e.keyCode)) {
      case Ca:
        (u.value = ""), Fl();
        break;
      case a:
      case Aa:
      case xa:
      case ma:
      case ra:
        Ph(qc), hl(!0), (cl = dl), pl();
    }
  }
  var bl,
    Al = 0,
    kl = 0,
    Cl = [];
  function Sl(e, t, n) {
    var i,
      o = [];
    for (i in e) o.push(e[i]);
    if (1 < o.length) {
      f("chat_emotes_text", t);
      1 === (t = Hl.emote_sorting.defaultValue)
        ? o.sort(function (e, t) {
            return e.code < t.code ? -1 : e.code > t.code ? 1 : 0;
          })
        : 2 === t &&
          o.sort(function (e, t) {
            return e.code > t.code ? -1 : e.code < t.code ? 1 : 0;
          });
      for (
        var d = k("chat_emotes"),
          a = 0,
          s = Boolean(!o[0].hasOwnProperty("div")),
          c = (Bh(d), (Al = o.length), (kl = 0), (Cl = []), Math.min(Al, 39));
        a < c;
        a++
      )
        El(o, a, s, n, d);
      A(function () {
        Sh("keydown", xl),
          Sh("keydown", wl),
          Ch("keydown", Il),
          (k("chat_emotes").style.transform = ""),
          Ll(0),
          _("chat_emotes_holder"),
          jl(0);
      }),
        a < Al &&
          Eh(function () {
            for (; a < Al; a++) El(o, a, s, n, d);
          }, 10);
    } else vl(No, 1e3);
  }
  function El(e, t, n, i, o) {
    var d, a, s;
    Cl.push(e[t].id),
      n &&
        (e[t].div =
          ((n = e[t]["4x"]),
          (d = e[t].id),
          (i = e[t][i]),
          (a = e[t].code),
          (s = document.createElement("div")).setAttribute(
            "id",
            "chat_emotes" + d
          ),
          s.setAttribute(Um, i),
          s.classList.add("chat_emotes_img_holder"),
          (s.innerHTML =
            '<div id="chat_emotes_img' +
            d +
            '" class="chat_emotes_img_div" ><img alt="" class="chat_emotes_img" src="' +
            n +
            '" onerror="this.onerror=null;this.src=\'' +
            ea +
            '\';"></div><div class="chat_emotes_name_holder"><div id="chat_emotes_name' +
            d +
            '" class="chat_emotes_name opacity_zero">' +
            a +
            "</div></div>"),
          s)),
      o.appendChild(e[t].div);
  }
  function Pl() {
    Sh("keydown", Il), Ch("keydown", wl), b("chat_emotes_holder"), Ml(kl), pl();
  }
  function Il(e) {
    switch (e.keyCode) {
      case a:
        Pl();
        break;
      case ua:
        Bl(kl, -1);
        break;
      case _a:
        Bl(kl, 1);
        break;
      case ra:
        kl < 20 ? Pl() : Bl(kl, -20);
        break;
      case ma:
        Bl(kl, 20);
        break;
      case fa:
        (cl !== el &&
          (t = xr[ll]) &&
          t.hasOwnProperty("emote-only") &&
          t["emote-only"] &&
          (vl(zo, 1500), 1)) ||
          !Rl() ||
          ((t = k("chat_emotes" + Cl[(t = kl)])) && Vl(t.getAttribute(Um)));
    }
    var t;
  }
  function jl(e) {
    c("chat_emotes_img" + Cl[e], "chat_emotes_focus"),
      Ll(kl),
      l("chat_emotes_name" + Cl[e], "opacity_zero");
  }
  function Ml(e) {
    l("chat_emotes_img" + Cl[e], "chat_emotes_focus"),
      c("chat_emotes_name" + Cl[e], "opacity_zero");
  }
  function Bl(e, t) {
    Cl[e + t]
      ? (Ml(e), jl((kl += t)), Ol(kl))
      : 0 < t &&
        ((t = parseInt(e / 20)),
        Cl[20 * (t + 1)] && (Ml(e), jl((kl = Al - 1)), Ol(kl)));
  }
  function Ll(e) {
    f("chat_emotes_counter", e + 1 + "/" + Al);
  }
  function Ol(e) {
    var t, n;
    39 < e
      ? ((t = 20 * ((e = parseInt(e / 20)) + 2)),
        (n = k("chat_emotes" + Cl[20 * (e - 1)]).offsetHeight),
        Cl[t] &&
          (k("chat_emotes").style.transform =
            "translateY(-" + n * (e - 1) + "px)"))
      : (k("chat_emotes").style.transform = "");
  }
  function Vl(e) {
    var t, n;
    "" === u.value ||
      null === u.value ||
      ((t = u.value),
      (n = " "),
      t && n && -1 !== t.indexOf(n, t.length - n.length)) ||
      (u.value += " "),
      (u.value += e + " "),
      Tl();
  }
  function Tl() {
    bl = Eh(
      function () {
        "" !== u.value && null !== u.value
          ? m(
              "chat_result_text",
              (function (e) {
                for (var t = 0, n = e.length; t < n; t++)
                  e[t] = $A(e[t], 0, null);
                return (
                  '<span class="message">' +
                  f4.parse(e.join(" "), !0, !0) +
                  "</span>"
                );
              })([u.value])
            )
          : Fl();
      },
      10,
      bl
    );
  }
  function Fl() {
    f("chat_result_text", "");
  }
  function Dl() {
    Ph(qc), sf("chat_emotes_holder") ? Pl() : sf("chat_send") && (hl(!0), pl());
  }
  var Ul = "";
  function Rl() {
    Ul = "";
    var e = x.Play_selectedChannelDisplayname;
    if (lu[ll]) return (Ul = ko + e), Nl(), 0;
    if (xr[ll]) {
      var t = xr[ll],
        n = uu[ll],
        i = (i = ru[ll]) && i.hasOwnProperty("state") && !i.state;
      if (t.hasOwnProperty("subs-only") && t["subs-only"] && i)
        return (Ul = "Chat Subscribers-only mode " + St), Nl(), 0;
      if (
        t.hasOwnProperty("followers-only") &&
        -1 !== t["followers-only"] &&
        n
      ) {
        if (
          -1 < t["followers-only"] &&
          n.hasOwnProperty("follows") &&
          !n.follows
        )
          return (Ul = Go + e), Nl(), 0;
        if (
          t["followers-only"] &&
          n.hasOwnProperty("created_at") &&
          t["followers-only"] > Xu(n.created_at)
        )
          return (
            (i = Xu(n.created_at)),
            (Ul =
              "Followers-only" +
              (t["followers-only"]
                ? " minimum " + t["followers-only"] + " minute(s) fallowing"
                : "") +
              " " +
              Ho +
              i +
              (1 < i ? Ln : Bn)),
            Nl(),
            0
          );
      }
    }
    return Gl(), 1;
  }
  function Nl() {
    Mh(u, "chat_input_class_focus"),
      jh(u, "chat_input_class_block"),
      vl((u.value = Ul), 1e3),
      Fl();
  }
  function Gl() {
    Ah(u.className, "chat_input_class_block") &&
      (Mh(u, "chat_input_class_block"), (u.value = ""), Fl());
  }
  var Hl = {},
    zl = [],
    ql = 0;
  function Xl(e) {
    var t = Hl[e].defaultValue,
      n = Hl[e].values.length - 1;
    0 < t && t < n
      ? ((k(e + "arrow_left").style.opacity = "1"),
        (k(e + "arrow_right").style.opacity = "1"))
      : t === n
      ? ((k(e + "arrow_left").style.opacity = "1"),
        (k(e + "arrow_right").style.opacity = "0.2"))
      : ((k(e + "arrow_left").style.opacity = "0.2"),
        (k(e + "arrow_right").style.opacity = "1"));
  }
  function Ql(e) {
    var t;
    switch (e.keyCode) {
      case fa:
      case ba:
      case a:
        wb(zl[ql]), b("chat_options"), Sh("keydown", Ql), Ch("keydown", wl);
        break;
      case ua:
        (t = zl[ql]), 0 < Hl[t].defaultValue && Yl(-1);
        break;
      case _a:
        (t = zl[ql]), Hl[t].defaultValue < Hl[t].values.length - 1 && Yl(1);
        break;
      case ra:
        0 < ql && Jl(-1);
        break;
      case ma:
        ql < zl.length - 1 && Jl(1);
    }
  }
  function Jl(e) {
    var t;
    (k((t = zl[ql]) + "arrow_left").style.opacity = "0"),
      (k(t + "arrow_right").style.opacity = "0"),
      l(t, "settings_value_focus"),
      l(t + "_div", "settings_div_focus"),
      c((e = zl[(ql += e)]), "settings_value_focus"),
      c(e + "_div", "settings_div_focus"),
      Xl(e);
  }
  function Yl(e) {
    var t = zl[ql];
    (Hl[t].defaultValue += e),
      sh(t, Hl[t].defaultValue),
      f(t, Hl[t].values[Hl[t].defaultValue]),
      Xl(t);
  }
  var Kl,
    Wl,
    Zl,
    $l,
    eu,
    tu,
    nu,
    iu,
    y = [],
    p = [],
    ou = [],
    du = [],
    au = [],
    su = [],
    cu = [],
    lu = [],
    uu = [],
    ru = [],
    _u = !0,
    mu = 1e4,
    fu = 1e3,
    s = { bttv: {}, ffz: {}, seven_tv: {}, cheers: {}, BadgesChannel: {} },
    hu = [],
    pu = {},
    gu = {},
    vu = {},
    w = [],
    yu = [],
    wu = [],
    xu = [],
    bu = new RegExp("\\\\s", "gi"),
    Au = {
      "B-?\\)": "B)",
      "\\:-?\\)": ":)",
      "\\:-?\\(": ":(",
      "\\:-?(p|P)": ":P",
      "\\;-?(p|P)": ";P",
      "\\:-?[\\\\/]": ":/",
      "\\;-?\\)": ";)",
      "R-?\\)": "R)",
      ":>": ":>",
      "\\:\\&gt\\;": ":>",
      "[oO](_|\\.)[oO]": "O_O",
      "\\:-?D": ":D",
      "\\:-?(o|O)": ":O",
      ">\\\\(": ">(",
      ":-?(?:7|L)": ":7",
      "\\:-?(S|s)": ":s",
      "#-?[\\\\/]": "#/",
      "<\\]": "<]",
      "<3": "<3",
      "\\&lt\\;3": "<3",
      "\\&lt\\;\\]": "<]",
      "\\&gt\\;\\(": ">(",
      "\\:-?[z|Z|\\|]": ":Z",
    },
    ku =
      /emote-only=(\d+).*followers-only=(-1|\d+).*r9k=(\d+).*slow=(\d+).*subs-only=(\d+).*/,
    Cu = "https://cdn.betterttv.net/emote/",
    Su = "https://tmi.twitch.tv/";
  function Eu() {
    {
      var e, t;
      (Rr(), x.Play_ChatForceDisable)
        ? B_()
        : (o_(),
          Hu(0, x.Play_selectedChannel_id, x.Play_selectedChannel),
          (o = y[(i = 0)]),
          _h(
            "https://recent-messages.robotty.de/api/v2/recent-messages/" +
              xu[i] +
              "?limit=30&hide_moderation_messages=true",
            2 * Lh,
            0,
            null,
            ur,
            kx,
            i,
            o
          ),
          _r(0, y[0]),
          br(0, y[0]),
          (o = y[(i = 0)]),
          O.show_chatters.defaultValue &&
            (m(
              "chat_loggedin" + i,
              "..." + (1 === O.show_chatters.defaultValue ? jd : me)
            ),
            l("chat_loggedin" + i, "hide"),
            (n = window.innerHeight),
            (k("chat_box_holder" + i).style.height =
              "calc(100% - " + 0.029 * n + "px)"),
            (e = i),
            (t = o),
            (1 === O.show_chatters.defaultValue && r ? $u : Wu)(e, t),
            (yu[e] = Th(
              function () {
                (1 === O.show_chatters.defaultValue && r ? $u : Wu)(e, t);
              },
              3e5,
              yu[e]
            ))),
          nc() &&
            v[0].access_token &&
            _h(
              Bm + "users/" + v[0].id + "/emotes",
              2 * Lh,
              3,
              Vm + v[0].access_token,
              tr,
              kx,
              0,
              0
            ),
          (i = y[(n = 0)]),
          nc() &&
            v[0].access_token &&
            ((uu[n] = {}),
            _h(
              Bm + "users/" + v[0].id + "/follows/channels/" + w[n] + Fm,
              2 * Lh,
              2,
              null,
              zu,
              qu,
              n,
              i
            )),
          (i = y[(o = 0)]),
          (ru[o] = {}),
          nc() && v[0].access_token && i === y[o]
            ? _h(
                Bm + "users/" + v[0].id + "/subscriptions/" + w[o] + Fm,
                2 * Lh,
                3,
                Vm + v[0].access_token,
                Qu,
                Ju,
                o,
                i
              )
            : Ju(o, i));
    }
    var n, i, o;
  }
  var Pu,
    Iu,
    ju,
    Mu,
    Bu,
    Lu,
    Ou,
    Vu,
    Tu,
    Fu,
    Du = [],
    Uu = ' style="color: #4eff42;" ',
    Ru = ' style="color: #4AA4FD;" ',
    Nu = [],
    Gu = [];
  function Hu(e, t, n) {
    console.log("e")
    console.log(e)
    console.log("y")
    console.log(y)
    console.log("n")

    console.log(n)
    (y[e] = new Date().getTime()),
      (w[e] = t),
      (xu[e] = n),
      xu[e] && (xu[e] = xu[e].toLowerCase()),
      (Mu = nc()),
      (Zl = O.chat_logging.defaultValue),
      (iu = O.chat_individual_background.defaultValue),
      ($l = O.highlight_rewards.defaultValue),
      (eu = O.highlight_atstreamer.defaultValue),
      (tu = Mu && O.highlight_atuser.defaultValue),
      (nu = Mu && O.highlight_user_send.defaultValue),
      (Pu = O.show_actions.defaultValue),
      (Iu = O.highlight_bits.defaultValue),
      (ju = O.show_sub.defaultValue),
      (Bu = O.individual_lines.defaultValue),
      (Vu = O.chat_nickcolor.defaultValue),
      (Tu = O.chat_timestamp.defaultValue),
      (Fu = O.clear_chat.defaultValue),
      (Du[e] = 0),
      (Nu[e] = new RegExp("@" + xu[e] + "(?=\\s|$)", "i")),
      (Gu[e] = new RegExp("@" + xu[e], "gi")),
      Mu &&
        ((Lu = new RegExp("@" + v[0].name + "(?=\\s|$)", "i")),
        (Ou = new RegExp("@" + v[0].name, "gi"))),
      (n = y[(t = e)]) === y[t] &&
        (s.bttv[w[t]]
          ? dr(s.bttv[w[t]])
          : _h(
              "https://api.betterttv.net/3/cached/users/twitch/" +
                encodeURIComponent(w[t]),
              2 * Lh,
              0,
              null,
              nr,
              kx,
              t,
              n
            )),
      (n = y[(t = e)]) === y[t] &&
        (s.ffz[w[t]]
          ? dr(s.ffz[w[t]])
          : _h(
              "https://api.frankerfacez.com/v1/room/" +
                encodeURIComponent(xu[t]),
              2 * Lh,
              0,
              null,
              ar,
              kx,
              t,
              n
            )),
      (n = y[(t = e)]) === y[t] &&
        (s.seven_tv[w[t]]
          ? dr(s.seven_tv[w[t]])
          : _h(
              "https://api.7tv.app/v2/users/" +
                encodeURIComponent(w[t]) +
                "/emotes",
              2 * Lh,
              0,
              null,
              cr,
              kx,
              t,
              n
            )),
      (n = y[(t = e)]) === y[t] &&
        (s.BadgesChannel[w[t]]
          ? r_(s.BadgesChannel[w[t]][t], Wr[t])
          : _h(
              "https://badges.twitch.tv/v1/badges/channels/" +
                w[t] +
                "/display",
              2 * Lh,
              0,
              null,
              Yu,
              kx,
              t,
              n
            )),
      (n = y[(t = e)]) !== y[t] ||
        s.cheers[w[t]] ||
        _h(
          "https://api.twitch.tv/v5/bits/actions?channel_id=" +
            encodeURIComponent(w[t]),
          2 * Lh,
          1,
          null,
          or,
          kx,
          t,
          n
        );
  }
  function zu(e, t, n) {
    n === y[t] &&
      ((n = e),
      (t = t),
      (n = JSON.parse(e)),
      (uu[t] = { created_at: n.created_at, follows: !0 }));
  }
  function qu(e, t) {
    t === y[e] && (uu[e].follows = !1);
  }
  function Xu(e) {
    return (
      (e = new Date().getTime() - new Date(e).getTime()),
      Math.floor(Math.floor(parseInt(e / 1e3)) / 60)
    );
  }
  function Qu(e, t, n) {
    n === y[t] && (ru[t].state = !0);
  }
  function Ju(e, t) {
    t === y[e] && (ru[e].state = !1);
  }
  function Yu(e, t, n) {
    n === y[t] &&
      ((s.BadgesChannel[w[t]] = (function (e, t) {
        var n,
          i,
          o,
          d,
          a,
          s = [];
        for (i in ((s[0] = ""), (s[1] = ""), e.badge_sets))
          for (o in (n = e.badge_sets[i].versions))
            (d = u_(n[o].image_url_4x)),
              (s[0] += l_(i + 0, o, d)),
              (s[1] += l_(i + 1, o, d)),
              t &&
                -1 <
                  (a =
                    parseInt(o) -
                    parseInt(o.toString()[0]) * Math.pow(10, o.length - 1)) &&
                !n.hasOwnProperty(a) &&
                ((s[0] += l_(i + 0, a, d)), (s[1] += l_(i + 1, a, d)));
        return s;
      })(JSON.parse(e), !0)),
      r_(s.BadgesChannel[w[t]][t], Wr[t]));
  }
  function Ku(e) {
    f("chat_loggedin" + e, ""),
      c("chat_loggedin" + e, "hide"),
      (k("chat_box_holder" + e).style.height = ""),
      (k("chat_container_name" + e).style.top = "");
  }
  function Wu(e, t) {
    _h(Lm + "streams/?user_id=" + w[e], 2 * Lh, 2, null, Zu, kx, e, t, !0);
  }
  function Zu(e, t, n) {
    try {
      var i;
      n === y[t] &&
        (i = JSON.parse(e)).data &&
        i.data.length &&
        m("chat_loggedin" + t, Cf(i.data[0].viewer_count) + g + me);
    } catch (e) {
      Ih("ChatLive_loadChattersSuccess " + e);
    }
  }
  function $u(e, t) {
    _h(Su + "group/user/" + xu[e], Lh, 0, null, er, kx, e, t);
  }
  function er(e, t, n) {
    try {
      n === y[t] &&
        m("chat_loggedin" + t, Cf(JSON.parse(e).chatter_count) + jd);
    } catch (e) {
      Ih("ChatLive_loadChattersSuccess " + e);
    }
  }
  function tr(e) {
    try {
      var t,
        n,
        i = JSON.parse(e);
      pu.hasOwnProperty(v[0].id) || (pu[v[0].id] = {}),
        Object.keys(i.emoticon_sets).forEach(function (e) {
          (e = i.emoticon_sets[e]),
            Array.isArray(e) &&
              e.forEach(function (e) {
                e.code &&
                  e.id &&
                  "string" == typeof e.code &&
                  "number" == typeof e.id &&
                  ((e.code = Au[e.code] || e.code),
                  pu[v[0].id].hasOwnProperty(e.code) ||
                    ((t = WA(e.id)),
                    (n = e.code + e.id),
                    (gu[e.code] = {
                      code: e.code,
                      id: n,
                      chat_div: ZA(t),
                      "4x": t,
                    }),
                    (pu[v[0].id][e.code] = { code: e.code, id: n, "4x": t })));
              });
        });
    } catch (e) {
      Ih("ChatLive_loadEmotesUserSuccess " + e);
    }
  }
  function nr(e, t, n) {
    if (n === y[t]) {
      (n = JSON.parse(e)), (e = t);
      s.bttv[w[e]] = {};
      try {
        ir(n.channelEmotes, e), ir(n.sharedEmotes, e);
      } catch (e) {
        Ih("ChatLive_loadEmotesbttv " + e);
      }
    }
  }
  function ir(e, t) {
    var n, i, o;
    try {
      e.forEach(function (e) {
        (n = Cu + e.id + "/3x"),
          (i = ZA(n)),
          (o = e.code + e.id),
          (gu[e.code] = { code: e.code, id: o, chat_div: i, "4x": n }),
          (s.bttv[w[t]][e.code] = {
            code: e.code,
            id: o,
            chat_div: i,
            "4x": n,
          });
      });
    } catch (e) {
      Ih("ChatLive_loadEmotesbttvChannel " + e);
    }
  }
  function or(e, n, t) {
    if (t === y[n]) {
      (vu[w[n]] = {}), (t = JSON.parse(e));
      try {
        t.actions.forEach(function (t) {
          (vu[w[n]][t.prefix] = {}),
            t.tiers.forEach(function (e) {
              vu[w[n]][t.prefix][e.min_bits] = ZA(e.images.light.animated[4]);
            });
        }),
          (s.cheers[w[n]] = 1);
      } catch (e) {
        Ih("ChatLive_loadCheersChannelSuccess " + e);
      }
    }
  }
  function dr(e) {
    for (var t in e)
      gu[t] = {
        code: e[t].code,
        id: e[t].id,
        chat_div: e[t].chat_div,
        "4x": e[t]["4x"],
      };
  }
  function ar(e, t, n) {
    n === y[t] && sr(JSON.parse(e), t, !1);
  }
  function sr(t, n, i) {
    var o, d, a;
    i ? (s.ffzGlobal = {}) : (s.ffz[w[n]] = {});
    try {
      Object.keys(t.sets).forEach(function (e) {
        ((e = t.sets[e]).emoticons || Array.isArray(e.emoticons)) &&
          e.emoticons.forEach(function (e) {
            e.name &&
              e.id &&
              ("string" != typeof e.name ||
                "number" != typeof e.id ||
                !e.urls ||
                "object" != typeof e.urls ||
                "string" != typeof e.urls[1] ||
                (e.urls[2] && "string" != typeof e.urls[2]) ||
                ((o = "https:" + (e.urls[4] || e.urls[2] || e.urls[1])),
                (d = ZA(o)),
                (a = e.name + e.id),
                (gu[e.name] = { code: e.name, id: a, chat_div: d, "4x": o }),
                i
                  ? (s.ffzGlobal[e.name] = {
                      code: e.name,
                      id: a,
                      chat_div: d,
                      "4x": o,
                    })
                  : (s.ffz[w[n]][e.name] = {
                      code: e.name,
                      id: a,
                      chat_div: d,
                      "4x": o,
                    })));
          });
      });
    } catch (e) {
      Ih("ChatLive_loadEmotesffz " + e);
    }
  }
  function cr(e, t, n) {
    n === y[t] && lr(JSON.parse(e), t, !1);
  }
  function lr(e, t, n) {
    var i, o, d;
    n ? (s.seven_tvGlobal = {}) : (s.seven_tv[w[t]] = {});
    try {
      e.forEach(function (e) {
        (i = e.urls[3][1]),
          (o = ZA(i)),
          (d = e.name + e.id),
          (gu[e.name] = { code: e.name, id: d, chat_div: o, "4x": i }),
          n
            ? (s.seven_tvGlobal[e.name] = {
                code: e.name,
                id: d,
                chat_div: o,
                "4x": i,
              })
            : (s.seven_tv[w[t]][e.name] = {
                code: e.name,
                id: d,
                chat_div: o,
                "4x": i,
              });
      });
    } catch (e) {
      Ih("ChatLive_loadEmotesseven_tvChannel " + e);
    }
  }
  function ur(e, t, n) {
    if (n === y[t])
      for (var i, o = JSON.parse(e), d = o.messages.length - 1; 0 <= d; d--)
        "PRIVMSG" === (i = window.parseIRC(o.messages[d].trim())).command &&
          Mr(i, t, !0);
  }
  var rr = [];
  function _r(e, t) {
    var m, f;
    t === y[e] &&
      (vr(e),
      Fr({
        chat_number: e,
        message: Tr(rn + g + x.Play_selectedChannelDisplayname + g + X),
      }),
      (rr[e] = Zl && !lu[e] && nc() && v[0].access_token),
      (f = t) === y[(m = e)] &&
        ((p[m] = new WebSocket("ws://irc-ws.chat.twitch.tv", "irc")),
        (p[m].onopen = function () {
          var e;
          rr[m]
            ? ((e = v[0].name.toLowerCase()),
              p[m].send("PASS oauth:" + v[0].access_token),
              p[m].send("NICK " + e),
              p[m].send("USER " + e + " 8 * :" + e))
            : (p[m].send("PASS blah"),
              p[m].send("NICK justinfan12345"),
              p[m].send("CAP REQ :twitch.tv/commands twitch.tv/tags"),
              p[m].send("JOIN #" + xu[m]));
        }),
        (p[m].onmessage = function (e) {
          if (e.data) {
            var t = window.parseIRC(e.data.trim());
            if (t.command)
              switch (t.command) {
                case "PRIVMSG":
                  Mr(t, m);
                  break;
                case "PING":
                  p[m].send("PONG " + t.params[0]);
                  break;
                case "001":
                  rr[m] &&
                    Ah(t.params[1], v[0].name.toLowerCase()) &&
                    (mr(m, f),
                    p[m].send("CAP REQ :twitch.tv/tags twitch.tv/commands"));
                  break;
                case "CAP":
                  rr[m] &&
                    (au[m] = Eh(
                      function () {
                        p[m].send("JOIN #" + xu[m]);
                      },
                      500,
                      au[m]
                    ));
                  break;
                case "JOIN":
                  ou[m] ||
                    ((ou[m] = !0),
                    Fr({
                      chat_number: m,
                      message: Tr(
                        Vd + " as " + (rr[m] ? v[0].display_name : vd)
                      ),
                    }),
                    kv &&
                      ((a = ""),
                      2 < I[l1].defaultValue
                        ? (a = Mn)
                        : 1 < I[l1].defaultValue && (a = xi),
                      Fr({
                        chat_number: m,
                        message: Tr(
                          wi + " " + I[l1].values[I[l1].defaultValue] + a
                        ),
                      })),
                    (wu[m] = Th(
                      function () {
                        p[m] &&
                          1 === p[m].readyState &&
                          p[m].send("PONG tmi.twitch.tv");
                      },
                      3e4,
                      wu[m]
                    ))),
                    yr(t, m, !0);
                  break;
                case "USERNOTICE":
                  if (((a = t), (s = m), ju)) {
                    (c = a.tags), (a = a.params);
                    if (c && c.hasOwnProperty("msg-id") && c["system-msg"]) {
                      (l = c["display-name"] || null),
                        (d = c["msg-id"] || null),
                        (u =
                          c["msg-param-recipient-display-name"] ||
                          c["msg-param-recipient-user-name"] ||
                          null),
                        (r = c["msg-param-recipient-id"] || null);
                      if ((_ = c["system-msg"] || null) && d) {
                        (d = Ah(d + "", "anon")),
                          (_ = _.replace(bu, " ")),
                          l &&
                            (_ = _.replace(
                              l,
                              "<span style='color: #0fffff; font-weight: bold'>$&</span>"
                            )),
                          u &&
                            (_ = _.replace(
                              u,
                              "<span style='color: #0fffff; font-weight: bold'>$&</span>"
                            )),
                          a &&
                            a[1] &&
                            (_ +=
                              a && a[1]
                                ? h +
                                  h +
                                  Lr(c, s) +
                                  "<span style='color: #0fffff; font-weight: bold'>" +
                                  (d || !l ? vd : l) +
                                  "</span>: " +
                                  Vr(t4(a[1], Or(c)), s, 0)
                                : "");
                        {
                          l = _;
                          _ = s;
                          Br(_, {
                            chat_number: _,
                            message: '<span class="message">' + l + "</span>",
                            sub: 1,
                          });
                        }
                        Mu &&
                          u &&
                          r &&
                          (u + "" == v[0].id + "" ||
                            r.toLowerCase() + "" ==
                              v[0].name.toLowerCase() + "") &&
                          jr((d ? Ao : c["display-name"]) + bo, 1e4);
                      }
                    }
                  }
                  break;
                case "USERSTATE":
                  yr(t, m);
                  break;
                case "NOTICE":
                  rr[m] &&
                    ((s = m),
                    (_ = f),
                    (l = t).tags &&
                    l.tags.hasOwnProperty("msg-id") &&
                    Ah(l.tags["msg-id"] + "", "msg_banned")
                      ? (jr(
                          l.params && l.params[1] ? l.params[1] : ko + xu[s],
                          3500
                        ),
                        (lu[s] = !0),
                        Ph(du[s]),
                        pr(s, _, 0))
                      : l.params &&
                        l.params[1] &&
                        Ah(l.params[1] + "", "authentication failed")
                      ? (gr(l.params[1], s),
                        Ws() && v[0].access_token && qa(0, null, null))
                      : Ir(l));
                  break;
                case "ROOMSTATE":
                  (u = m),
                    (r = t).tags &&
                      (xr[u] || (xr[u] = {}),
                      (r = r.tags).hasOwnProperty("emote-only") &&
                        (xr[u]["emote-only"] = parseInt(r["emote-only"])),
                      r.hasOwnProperty("followers-only") &&
                        (xr[u]["followers-only"] = parseInt(
                          r["followers-only"]
                        )),
                      r.hasOwnProperty("rk9") && (xr[u].rk9 = parseInt(r.rk9)),
                      r.hasOwnProperty("slow") &&
                        (xr[u].slow = parseInt(r.slow)),
                      r.hasOwnProperty("subs-only") &&
                        (xr[u]["subs-only"] = parseInt(r["subs-only"])),
                      _l(u));
                  break;
                case "PART":
                  p[m] && (fr(m), p[m].close(1e3));
                  break;
                case "CLEARCHAT":
                  (d = m), (c = t);
                  if (c.tags && c.tags.hasOwnProperty("target-user-id")) {
                    var n = c.tags["ban-duration"] || 0,
                      i = kd,
                      o = c.tags["target-user-id"],
                      d = Wr[d].getElementsByClassName(o);
                    n && (i += Cd + n + (1 < n ? Mn : xi));
                    try {
                      Array.prototype.forEach.call(d, function (e) {
                        e &&
                          (Fu ? (e.innerHTML = i) : (e.innerHTML += h + h + i),
                          jh(e.parentElement, "chat_purged"),
                          Mh(e, o));
                      });
                    } catch (e) {
                      Ih(
                        "ChatLive_Clean Array.prototype message " +
                          JSON.stringify(c) +
                          " e " +
                          e
                      );
                    }
                  }
                  break;
                case "CLEARMSG":
                  (n = t).tags &&
                    n.tags.hasOwnProperty("target-msg-id") &&
                    (n = k(n.tags["target-msg-id"])) &&
                    (Fu ? (n.innerHTML = Ad) : (n.innerHTML += h + h + Ad),
                    jh(n.parentElement, "chat_purged"),
                    (n.id = "_"));
              }
          }
          var a, s, c, l, u, r, d, _;
        }),
        (p[m].onclose = function (e) {
          d || Ih(JSON.stringify(e) + " onclose main "),
            gr("Websocket closed remotely... " + JSON.stringify(e), m),
            (ou[m] = !1),
            pr(m, f, fu, !0);
        }),
        (p[m].onerror = function (e) {
          d || Ih(JSON.stringify(e) + " erro main"),
            gr("Error... " + JSON.stringify(e), m),
            (ou[m] = !1),
            pr(m, f, fu, !0);
        }),
        mr(m, f)));
  }
  function mr(e, t) {
    Ph(du[e]),
      ou[e] ||
        t !== y[e] ||
        (du[e] = Eh(
          function () {
            pr(e, t, 0);
          },
          mu * (rr[e] ? 2 : 1),
          du[e]
        ));
  }
  function fr(e) {
    (p[e].onclose = kx),
      (p[e].onerror = kx),
      (p[e].onmessage = kx),
      (p[e].onopen = kx);
  }
  function hr(e) {
    p[e] &&
      (1 === p[e].readyState && p[e].send("PART #" + xu[e]),
      fr(e),
      p[e].close(1e3)),
      (ou[e] = !1),
      Fh(wu[e]);
  }
  function pr(e, t, n, i) {
    ou[e] ||
      t !== y[e] ||
      (hr(e),
      (du[e] = Eh(
        function () {
          i || gr(Od, e), _r(e, t);
        },
        n || 0,
        du[e]
      )));
  }
  function gr(e, t, n) {
    Fr({
      chat_number: t,
      message:
        '<span class="message">' +
        (n ? "ChatSend:" : "Chat:") +
        g +
        e +
        "</span>",
    });
  }
  function vr(e) {
    Ph(au[e]), Ph(du[e]);
  }
  function yr(e, t, n) {
    if (rr[t]) {
      if (
        ((e = e.hasOwnProperty("params") ? JSON.stringify(e.params) : ""),
        (e = ku.exec(e)),
        (ku.lastIndex = 0),
        e && 6 === e.length)
      )
        return (
          Ph(au[t]),
          (e = e),
          (xr[(i = t)] = {
            "emote-only": parseInt(e[1]),
            "followers-only": parseInt(e[2]),
            rk9: parseInt(e[3]),
            slow: parseInt(e[4]),
            "subs-only": parseInt(e[5]),
          }),
          _l(i)
        );
      n &&
        (au[t] = Eh(
          function () {
            p[t].send("JOIN #" + xu[t]);
          },
          1e3,
          au[t]
        ));
    }
    var i;
  }
  var wr,
    xr = [];
  function br(e, t) {
    var n, i;
    t !== y[e] ||
      e ||
      (!lu[e] && nc() && v[0].access_token
        ? ((n = e),
          (i = t),
          ((wr = new WebSocket("ws://irc-ws.chat.twitch.tv", "irc")).onopen =
            function () {
              var e = v[0].name.toLowerCase();
              wr.send("PASS oauth:" + v[0].access_token),
                wr.send("NICK " + e),
                wr.send("USER " + e + " 8 * :" + e);
            }),
          (wr.onmessage = function (e) {
            if (e.data) {
              var t = window.parseIRC(e.data.trim());
              if (t.command)
                switch (t.command) {
                  case "PING":
                    wr.send("PONG " + t.params[0]);
                    break;
                  case "001":
                    Ah(t.params[1], v[0].name.toLowerCase()) &&
                      (Er(n, i),
                      wr.send("CAP REQ :twitch.tv/tags twitch.tv/commands"));
                    break;
                  case "CAP":
                    (kr = !0),
                      (Wl = Th(
                        function () {
                          wr &&
                            1 === wr.readyState &&
                            wr.send("PONG tmi.twitch.tv");
                        },
                        3e4,
                        Wl
                      ));
                    break;
                  case "NOTICE":
                    t.params &&
                    t.params[1] &&
                    Ah(t.params[1] + "", "authentication failed")
                      ? (gr(t.params[1], 0, !0),
                        Ws() && v[0].access_token && qa(0, null, null))
                      : Ir(t);
                    break;
                  case "PART":
                    wr && (Cr(), wr.close(1e3));
                }
            }
          }),
          (wr.onclose = function (e) {
            d || Ih(JSON.stringify(e) + " onclose send"),
              gr("Websocket closed remotely... " + JSON.stringify(e), 0, !0),
              Pr(n, i, fu, !(kr = !1));
          }),
          (wr.onerror = function (e) {
            d || Ih(JSON.stringify(e) + " error send"),
              gr("Error... " + JSON.stringify(e), 0, !0),
              Pr(n, i, fu, !(kr = !1));
          }),
          Er(n, i))
        : Sr());
  }
  var Ar,
    kr = !1;
  function Cr() {
    (wr.onclose = kx), (wr.onerror = kx), (wr.onmessage = kx), (wr.onopen = kx);
  }
  function Sr() {
    wr && (1 === wr.readyState && wr.send("PART "), Cr(), wr.close(1e3)),
      (kr = !1),
      Fh(Wl);
  }
  function Er(e, t) {
    Ar = Eh(
      function () {
        Pr(e, t, 0);
      },
      2 * mu,
      Ar
    );
  }
  function Pr(e, t, n, i) {
    kr ||
      (Sr(),
      (Ar = Eh(
        function () {
          i || gr(Od, e, !0), br(e, t);
        },
        n || 0,
        Ar
      )));
  }
  function Ir(e) {
    e.params[1] &&
      !Ah(e.params[1], "NICK already set") &&
      jr(e.params[1], 3500);
  }
  function jr(e, t) {
    vl("Chat: " + e, t), w1("Chat: " + e, t);
  }
  function Mr(e, t, n) {
    var i,
      o,
      d,
      a,
      s,
      c = "",
      l = e.tags,
      u = "",
      r = !1,
      _ = !1;
    if (l && l.hasOwnProperty("display-name")) {
      if (
        ($l &&
          l.hasOwnProperty("msg-id") &&
          ((l["msg-id"] = l["msg-id"] + ""),
          Ah(l["msg-id"], "highlighted-message")
            ? ((u = " chat_highlighted "), (d = $o))
            : Ah(l["msg-id"], "skip-subs-mode-message") &&
              ((u = " chat_highlighted "), (d = ed))),
        Tu &&
          (c +=
            n && l.hasOwnProperty("tmi-sent-ts")
              ? ((s = l["tmi-sent-ts"]),
                T2((s = new Date(parseInt(s) + Hm)).getHours()) +
                  ":" +
                  T2(s.getMinutes()) +
                  " ")
              : eh + " "),
        (c += Lr(l, t)),
        Ah((e = e.params[1]), "PRIVMSG") && (e = e.split("@badge-info=")[0]),
        /^\x01ACTION.*\x01$/.test(e))
      ) {
        if (!Pu) return;
        (a = !0),
          (e = e
            .replace(/^\x01ACTION/, "")
            .replace(/\x01$/, "")
            .trim());
      }
      eu && Nu[t].test(e)
        ? (r = !0)
        : ((tu && Lu.test(e)) ||
            (nu &&
              Ah(
                l["display-name"].toLowerCase(),
                v[0].display_name.toLowerCase()
              ))) &&
          (_ = !0),
        (s = l.hasOwnProperty("bits") && vu.hasOwnProperty(w[t])),
        (i = l["display-name"]),
        Br(t, {
          chat_number: t,
          message: (c =
            (c +=
              "<span " +
              (a ? 'class="class_bold" ' : "") +
              (o =
                r || (Iu && s)
                  ? Uu
                  : _
                  ? Ru
                  : Vu || "boolean" == typeof l.color
                  ? 'style="color: ' + Yr[i.charCodeAt(0) % Kr] + ';"'
                  : 'style="color: ' + l.color + ';"') +
              ">" +
              i +
              "</span>" +
              (a ? "" : "&#58;") +
              "&nbsp;") +
            "<span " +
            (l.id ? 'id="' + l.id + '"' : "") +
            ' class="' +
            (l["user-id"] || "") +
            " message" +
            u +
            (a ? ' class_bold" ' + o : '"') +
            ">" +
            Vr(t4(e, Or(l)), t, s ? parseInt(l.bits) : 0) +
            "</span>"),
          atstreamer: r,
          atuser: _,
          hasbits: s && Iu,
          extraMessage: d,
          addToStart: n,
        });
    }
  }
  function Br(e, t) {
    var n, i, o;
    kv
      ? ((i = y[(n = e)]),
        (o = t),
        Eh(function () {
          i === y[n] && Fr(o);
        }, 1e3 * I[l1].values[I[l1].defaultValue]))
      : Fr(t);
  }
  function Lr(e, t) {
    if (e.hasOwnProperty("badges") && "string" == typeof e.badges) {
      for (
        var n, i = e.badges.split(","), o = "", d = 0, a = i.length;
        d < a;
        d++
      )
        o +=
          '<span class="a' +
          (n = i[d].split("/"))[0] +
          t +
          "-" +
          n[1] +
          ' tag"></span>';
      return o;
    }
    return "";
  }
  function Or(e) {
    var t,
      n,
      i,
      o,
      d,
      a = null;
    if (e.hasOwnProperty("emotes") && "string" == typeof e.emotes) {
      e.emotes = e.emotes.split("/");
      for (var a = {}, s = 0, c = e.emotes.length; s < c; s++)
        for (
          a[(t = e.emotes[s].split(":"))[0]] || (a[t[0]] = []),
            o = 0,
            d = (n = t[1].split(",")).length;
          o < d;
          o++
        )
          (i = n[o].split("-")), a[t[0]].push([parseInt(i[0]), parseInt(i[1])]);
    }
    return a;
  }
  function Vr(e, t, n) {
    for (var i = 0, o = e.length; i < o; i++)
      "string" == typeof e[i] ? (e[i] = $A(e[i], t, n)) : (e[i] = e[i][0]);
    return f4.parse(e.join(" "), !0, !0);
  }
  function Tr(e) {
    return '<span class="message">' + e + "</span>";
  }
  function Fr(e) {
    _u
      ? (Dr(e),
        su[e.chat_number]++ > e_ &&
          ((su[e.chat_number] = 0), O_(e.chat_number)))
      : cu[e.chat_number].push(e);
  }
  function Dr(e) {
    var t,
      n = document.createElement("div"),
      i = "chat_line";
    e.atstreamer
      ? ((i += " chat_atstreamer"),
        (e.message = e.message.replace(
          Gu[e.chat_number],
          "<span style='color: #34B5FF; font-weight: bold'>$&</span>"
        )))
      : e.atuser
      ? ((i += " chat_atuser"),
        (e.message = e.message.replace(
          Ou,
          "<span style='color: #34B5FF; font-weight: bold'>$&</span>"
        )))
      : e.hasbits
      ? (i += " chat_bits")
      : e.sub
      ? (i += " chat_sub")
      : iu &&
        (Du[e.chat_number] &&
          (1 === iu
            ? ((t = Ig ? "0, 0, 0," : "100,100,100,"),
              (n.style.backgroundColor = "rgba(" + t + " " + wg + ")"))
            : 2 === iu
            ? (n.style.backgroundColor = "rgba(100,100,100, " + wg + ")")
            : 3 === iu &&
              (n.style.backgroundColor = "rgba(0,0,0, " + wg + ")")),
        (Du[e.chat_number] = 1 ^ Du[e.chat_number])),
      Bu && !e.skip_addline
        ? (i += " chat_line_ind")
        : (i += " chat_line_slim"),
      (n.className = i),
      (n.innerHTML = e.message),
      e.addToStart
        ? (Wr[e.chat_number].insertBefore(n, Wr[e.chat_number].childNodes[0]),
          Ur(e))
        : (Ur(e), Wr[e.chat_number].appendChild(n));
  }
  function Ur(e) {
    e.extraMessage &&
      Dr({
        chat_number: e.chat_number,
        message: Tr(e.extraMessage),
        skip_addline: 1,
        addToStart: e.addToStart,
      });
  }
  function Rr() {
    (y[0] = 0),
      (su[0] = 0),
      (cu[0] = []),
      Ku(0),
      Bh(Wr[0]),
      (ou[0] = !1),
      (lu[0] = !1),
      (xr[0] = null),
      vr(0),
      hr(0),
      Sr();
  }
  var Nr,
    Gr,
    Hr,
    zr = [],
    qr = [],
    Xr = null,
    Qr = 0,
    Jr = "",
    Yr = [
      "#FC4F4F",
      "#ff8736",
      "#ffd830",
      "#ffff35",
      "#81ff2c",
      "#2dff2d",
      "#21ff7a",
      "#0fffc0",
      "#0fffff",
      "#20cfff",
      "#4d9bff",
      "#ff74ff",
      "#ff93ff",
      "#ff63ab",
      "#63FFBF",
      "#A363FF",
      "#B3FF63",
      "#D463FF",
    ],
    Kr = Yr.length,
    Wr = [],
    Zr = 0,
    $r = !1,
    e_ = 60,
    t_ = !0;
  function n_() {
    var e;
    (t_ = !0),
      E_(),
      !r || x.Play_ChatForceDisable
        ? B_()
        : (o_(),
          Hu(0, x.Main_selectedChannel_id, x.Main_selectedChannel),
          (e = y[0]),
          y[0] === e && x_(e));
  }
  var i_ = !1;
  function o_() {
    i_ || a_(0),
      s.bttvGlobal || __(0),
      s.ffzGlobal || v_(0),
      s.Seven_tvGlobal || h_(0),
      rl();
  }
  function d_(e, t, n, i) {
    _h(e, 2 * Lh + t * Oh, 0, null, n, i, t);
  }
  function a_(e) {
    d_("https://badges.twitch.tv/v1/badges/global/display", e, c_, s_);
  }
  function s_(e) {
    e < Vh && a_(e + 1);
  }
  function c_(e) {
    var t,
      n,
      i,
      o,
      d = "",
      a = JSON.parse(e);
    for (n in a.badge_sets)
      for (i in (t = a.badge_sets[n].versions))
        d = (d += l_(n + 0, i, (o = u_(t[i].image_url_4x)))) + l_(n + 1, i, o);
    r_(d, document.head), (i_ = !0);
  }
  function l_(e, t, n) {
    return ".a" + e + "-" + t + n;
  }
  function u_(e) {
    return (
      ' { background-image: url("' + e.replace("http:", "https:") + '"); }'
    );
  }
  function r_(t, n) {
    A(function () {
      var e = document.createElement("style");
      (e.innerHTML = t), n.appendChild(e);
    });
  }
  function __(e) {
    d_("https://api.betterttv.net/3/cached/emotes/global", e, f_, m_);
  }
  function m_(e) {
    e < Vh && __(e + 1);
  }
  function f_(e) {
    var t,
      n,
      i,
      e = JSON.parse(e);
    s.bttvGlobal = {};
    try {
      e.forEach(function (e) {
        (t = Cu + e.id + "/3x"),
          (n = ZA(t)),
          (i = e.code + e.id),
          (gu[e.code] = { code: e.code, id: i, chat_div: n, "4x": t }),
          (s.bttvGlobal[e.code] = {
            code: e.code,
            id: i,
            chat_div: n,
            "4x": t,
          });
      });
    } catch (e) {
      Ih("Chat_loadEmotesbttvGlobal " + e);
    }
  }
  function h_(e) {
    d_("https://api.7tv.app/v2/emotes/global", e, g_, p_);
  }
  function p_(e) {
    e < Vh && h_(e + 1);
  }
  function g_(e) {
    lr(JSON.parse(e), 0, !0);
  }
  function v_(e) {
    d_("https://api.frankerfacez.com/v1/set/global", e, w_, y_);
  }
  function y_(e) {
    e < Vh && v_(e + 1);
  }
  function w_(e) {
    sr(JSON.parse(e), 0, !0);
  }
  function x_(e) {
    _h(
      "https://api.twitch.tv/v5/videos/" +
        x.ChannelVod_vodId +
        "/comments?client_id=" +
        ks +
        (Qr ? "&content_offset_seconds=" + parseInt(Qr) : ""),
      2 * Lh,
      0,
      null,
      A_,
      b_,
      e
    );
  }
  function b_(t) {
    y[0] === t &&
      (Gr = Eh(
        function () {
          var e = J1 / 1e3;
          e && e < Qr && (Qr = e), x_(t);
        },
        2500,
        Gr
      ));
  }
  function A_(e, t) {
    if (!$r && y[0] === t) {
      e = JSON.parse(e);
      var n,
        i,
        o,
        d,
        a,
        s,
        c,
        l,
        u,
        r,
        _,
        m,
        f,
        h = null === Xr;
      for (
        h &&
          (k_({
            chat_number: 0,
            time: 0,
            message:
              '<span class="message">' +
              rn +
              g +
              x.Main_selectedChannelDisplayname +
              g +
              Jr +
              "</span>",
          }),
          k_({
            chat_number: 0,
            time: 0,
            message: '<span class="message">' + Vd + "</span>",
          })),
          Qr = 0,
          Xr = e._next,
          r = 0,
          _ = (c = e.comments || []).length;
        r < _;
        r++
      )
        if (
          ((d = o = !1), (n = s = ""), (i = c[r].message), Pu || !i.is_action)
        ) {
          if (
            (Tu && (n += F2(c[r].content_offset_seconds) + " "),
            i.hasOwnProperty("user_badges"))
          )
            for (m = 0, f = i.user_badges.length; m < f; m++)
              n +=
                '<span class="a' +
                (l = i.user_badges[m])._id +
                "0-" +
                l.version +
                ' tag"></span>';
          if (
            ((a = i.hasOwnProperty("bits_spent") && vu.hasOwnProperty(w[0])),
            i.fragments)
          )
            for (m = 0, f = i.fragments.length; m < f; m++)
              (u = i.fragments[m]).hasOwnProperty("emoticon")
                ? (s += ZA(WA(u.emoticon.emoticon_id)))
                : ((s += Vr([u.text], 0, a ? i.bits_spent : 0)),
                  !o && eu && Nu[0].test(u.text)
                    ? (o = !0)
                    : !d && tu && Lu.test(u.text) && (d = !0));
          nu &&
            Ah(
              c[r].commenter.display_name.toLowerCase(),
              v[0].display_name.toLowerCase()
            ) &&
            (d = !0),
            (p =
              o || (Iu && a)
                ? Uu
                : d
                ? Ru
                : !Vu && i.hasOwnProperty("user_color")
                ? 'style="color: ' + i.user_color + ';"'
                : 'style="color: ' +
                  Yr[c[r].commenter.display_name.charCodeAt(0) % Kr] +
                  ';"'),
            (n =
              (n +=
                "<span " +
                (i.is_action ? 'class="class_bold" ' + p : "") +
                p +
                ">" +
                c[r].commenter.display_name +
                "</span>" +
                (i.is_action ? "" : "&#58;") +
                "&nbsp;") +
              '<span class="message' +
              (i.is_action ? ' class_bold" ' + p : '"') +
              ">" +
              s +
              "</span>"),
            (p = {
              chat_number: 0,
              time: c[r].content_offset_seconds,
              message: n,
              atstreamer: o,
              atuser: d,
              hasbits: a && Iu,
            }),
            h ? k_(p) : void 0 !== Xr && ((p = p), qr.push(p));
        }
      h && y[0] === t && ((t_ = !1), C_(t), void 0 !== Xr && I_(t));
    }
    var p;
  }
  function k_(e) {
    zr.push(e);
  }
  function C_(e) {
    t_ ||
      $r ||
      y[0] !== e ||
      x.Play_ChatForceDisable ||
      (P_(e),
      (Nr = Th(
        function () {
          P_(e);
        },
        1e3,
        Nr
      )));
  }
  function S_() {
    Ph(Gr), Ph(Hr), Fh(Nr);
  }
  function E_() {
    var e;
    ($r = !1),
      S_(),
      (y[0] = 0),
      Bh(Wr[0]),
      (Xr = null),
      (zr = []),
      (qr = []),
      vr((e = Zr = 0)),
      Ph(Ar),
      Ph(Kl),
      Fh(yu[e]),
      Fh(wu[e]),
      Fh(Wl),
      Ku(0);
  }
  function P_(e) {
    var t,
      n = zr.length;
    if (Zr < n - 1)
      for (t = Zr; t < n && zr[t].time < J1 / 1e3; t++, Zr++) Dr(zr[t]);
    else
      S_(),
        void 0 !== Xr
          ? ((zr = (function (e) {
              for (var t = [], n = 0; n < e.length; n++) t.push(e[n]);
              return t;
            })(qr)),
            (Zr = 0),
            C_(e),
            (qr = []),
            y[0] === e && I_(e),
            O_(0))
          : ($r ||
              Dr({
                chat_number: 0,
                message:
                  '&nbsp;<span class="message">' +
                  h +
                  h +
                  hn +
                  h +
                  h +
                  "</span>",
              }),
            ($r = !0),
            Fh(Nr));
  }
  function I_(e) {
    $r || y[0] !== e || j_(e);
  }
  function j_(e) {
    _h(
      "https://api.twitch.tv/v5/videos/" +
        x.ChannelVod_vodId +
        "/comments?client_id=" +
        ks +
        (null !== Xr ? "&cursor=" + Xr : ""),
      2 * Lh,
      0,
      null,
      A_,
      M_,
      e
    );
  }
  function M_(e) {
    y[0] === e &&
      (Hr = Eh(
        function () {
          j_(e);
        },
        2500,
        Hr
      ));
  }
  function B_() {
    E_(), L_(Gn);
  }
  function L_(e) {
    var t = "&nbsp;",
      t = (t += '<span class="message">') + e + "</span>";
    ((e = document.createElement("div")).className = "chat_line"),
      (e.innerHTML = t),
      Wr[0].appendChild(e);
  }
  function O_(e) {
    var t = Wr[e].getElementsByClassName("chat_line"),
      n = 0,
      i = t.length - e_;
    if (0 < i) for (; n < i; n++) Wr[e].removeChild(t[0]);
  }
  var V_,
    T_,
    F_,
    u,
    D_,
    U_,
    R_,
    N_,
    d = !0,
    G_ = !1,
    H_ = -1,
    z_ = 0,
    q_ = 1,
    X_ = 2,
    Q_ = 3,
    J_ = 4,
    Y_ = 5,
    K_ = 6,
    W_ = 7,
    Z_ = 8,
    $_ = 9,
    em = 10,
    tm = 11,
    nm = 12,
    im = 13,
    om = 14,
    dm = 15,
    am = 16,
    sm = 17,
    cm = 18,
    lm = 19,
    um = 20,
    rm = "",
    x = {
      Main_Go: 1,
      Main_Before: 1,
      Main_BeforeSearch: 1,
      Main_BeforeChannel: 1,
      Main_BeforeAgame: J_,
      Main_BeforeChannelisSet: !1,
      Main_BeforeAgameisSet: !1,
      Main_selectedChannel: "",
      Main_selectedChannelDisplayname: "",
      Main_selectedChannelLogo: "",
      Main_selectedChannel_id: "",
      Main_gameSelected: "",
      Main_gameSelected_id: "",
      Main_OldgameSelected: null,
      Play_isHost: !1,
      Play_DisplaynameHost: "",
      Play_selectedChannelDisplayname: "",
      Play_selectedChannel: "",
      Play_gameSelected: "",
      Play_gameSelected_id: null,
      Users_AddcodePosition: 0,
      Play_WasPlaying: 0,
      ChannelVod_vodId: "",
      vodOffset: 0,
      Search_data: "",
      gameSelectedOld: null,
      Games_return: !1,
      Search_isSearching: !1,
      Play_ChatForceDisable: !1,
      Never_run_new: !0,
      Chat_font_size_new: 75,
      ChatBackground: 10,
      IsRerun: !1,
      Main_selectedChannelPartner: !1,
      Sidepannel_Pos: 2,
      Sidepannel_IsUser: !1,
      My_channel: !1,
      DeviceBitrateCheck: !1,
      warning_new_api2: !0,
      AddCode_main_token: null,
    },
    _m = [],
    mm = [],
    fm = !0,
    hm = !0,
    pm = 0,
    gm = 0,
    vm = null,
    ym = !1,
    wm = "",
    xm = [],
    bm = !0,
    Am = !1,
    km = 0,
    Cm = 45,
    e = Math.floor(Cm / 3 / 1.5),
    Sm = Math.floor(9 / 1.35),
    Em = 6,
    Pm = Math.floor(48 / Em / 1.5),
    Im = "Accept",
    jm = "application/vnd.twitchtv.v5+json",
    Mm = "Client-ID",
    Bm = "https://api.twitch.tv/kraken/",
    Lm = "https://api.twitch.tv/helix/",
    Om = "Authorization",
    Vm = "OAuth ",
    Tm = "&api_version=5",
    Fm = "?api_version=5",
    Dm = "stream_thumbnail_focused",
    Um = "data_attribute",
    Rm = 401,
    Nm = "Feb 19 2022",
    Gm = "4.0.1-" + Nm,
    Hm = 0,
    r = 0,
    zm = "?" + Math.random(),
    qm = !1,
    Xm = "Bearer ",
    Qm = [
      [Mm, ks],
      ["Authorization", null],
    ],
    Jm = [
      [Mm, ks],
      ["Authorization", Xm + Is],
    ];
  function Ym() {
    document.body.addEventListener("keydown", Wm, !1),
      document.body.addEventListener("keyup", Hf, !1),
      "loading" === document.readyState
        ? document.addEventListener("DOMContentLoaded", function () {
            tf(window.navigator.userLanguage || window.navigator.language);
          })
        : tf(window.navigator.userLanguage || window.navigator.language);
  }
  function Km(e) {
    (e.keyCode !== pa && e.keyCode !== ha) ||
      (window.clearTimeout(R_),
      window.clearTimeout(N_),
      document.body.removeEventListener("keyup", Km),
      document.body.addEventListener("keydown", Wm, !1),
      window.setTimeout(function () {
        c("rest_warning", "hide");
      }, 1500));
  }
  function Wm(e) {
    (e.keyCode !== pa && e.keyCode !== ha) ||
      (document.body.removeEventListener("keydown", Wm, !1),
      document.body.addEventListener("keyup", Km, !1),
      (R_ = window.setTimeout(Zm, 1e4)));
  }
  function Zm() {
    window.clearTimeout(R_),
      window.clearTimeout(N_),
      m("rest_warning", yo),
      l("rest_warning", "hide"),
      (N_ = window.setTimeout(ef, 1e4));
  }
  d || Ym();
  var $m = !1;
  function ef() {
    for (var e in (($m = !0), localStorage.removeItem("Main_values"), O))
      localStorage.removeItem(e);
    m("rest_warning", wo),
      window.setTimeout(function () {
        window.location.reload(!0);
      }, 1500);
  }
  function tf(n) {
    var i;
    console.log("Main_Checktylesheet"),
      ((i = document.createElement("span")).className = "fa"),
      (i.style.display = "none"),
      document.body.insertBefore(i, document.body.firstChild),
      A(function () {
        var e, t;
        "icons" !==
        window.getComputedStyle(i, null).getPropertyValue("font-family")
          ? (console.log("Main_Checktylesheet reloading"),
            (e =
              "https://fgl27.github.io/smarttv-twitch/release/githubio/css/font-awesome.min.css"),
            ((t = document.createElement("link")).rel = "stylesheet"),
            (t.href = e),
            document.getElementsByTagName("head")[0].appendChild(t))
          : console.log("Main_Checktylesheet loaded OK"),
          document.body.removeChild(i);
      }),
      A(function () {
        d && (document.body.innerHTML = Ud),
          A(function () {
            try {
              (r = null !== tizen),
                console.log("Main_IsNotBrowser tizen = " + r),
                d || (G_ = !0);
            } catch (e) {
              (r = 0),
                (kh.style.backgroundColor = "rgba(155, 155, 155, 1)"),
                (G_ = !0),
                console.log("Main_isReleased: " + d),
                console.log("Main_isDebug: " + G_),
                console.log("Main_isBrowser: " + !r),
                (a = 49),
                (ha = 34),
                (pa = 33),
                (ga = 50),
                (oa = 127),
                (da = 126),
                (aa = 179),
                (wa = 66),
                (sa = 73),
                (ca = 79),
                (la = 80);
            }
            for (var e in (lf(), O))
              (O[e].defaultValue = ch(e, O[e].defaultValue)),
                --O[e].defaultValue,
                O[e].defaultValue > eb(e) && (O[e].defaultValue = 0);
            for (var t in (ab(0),
            lb(),
            xh(),
            V("app_animations") || sb(),
            (bx = V("videos_animation")),
            (gp = V("clip_auto_play_next")),
            (L7 = V("live_notification")),
            (V7 = 1e3 * $x("live_notification_time")),
            (bg = V("single_click_exit")),
            (wv = V("end_dialog_counter")),
            cb(V("show_screen_counter")),
            ia(),
            (ym = !1),
            (Rt = " Hold enter or press Guide or Info"),
            (F = "Refresh"),
            (D = "Search"),
            (U = "Settings"),
            (R = "Controls"),
            (N = "About"),
            (G = "The text you entered is empty."),
            (H = "Switch: Past Broadcasts or Highlights"),
            (z = "Switch: Period (24h, 7d, 30d, all)"),
            (q = "User"),
            (X = "Live"),
            (Q = "Games"),
            (J = "Playing "),
            (Y = "for "),
            (K = "Watch time "),
            (W = "Since "),
            (Z = "Type your search..."),
            ($ = "Type your authentication key..."),
            (ee = "Type your username..."),
            (te = "Press Enter or Select key to, "),
            (ne = "Channels"),
            (Xn = "Back to previous screen: Back key"),
            (oe = " has ended"),
            (de = "This video is only available to subscribers."),
            (ae =
              "Connection failed, unable to load content. Hit refresh to try again"),
            (se = "No"),
            (ce = " Past Broadcasts"),
            (le = " Highlights"),
            (ue = "Clips"),
            (re = "Streamed "),
            (_e = " Views"),
            (me = "Viewers"),
            (fe = "Click again to exit!"),
            (he = "Do you want to exit SmartTV Client for Twitch?"),
            (pe = "Exit"),
            (ge = "Close"),
            (ve = "Minimize"),
            (ye = "Cancel"),
            (we = "Rerun"),
            (xe = " Channels Live"),
            (be = " Games Live"),
            (Ae = " Followed Channels"),
            (Si = "My Channel"),
            (ke = "Add User"),
            (Ce = " Remove User"),
            (Se = "User doesn't exist"),
            (Ee = " hosting "),
            (Pe = " already set"),
            (Ie = "Switch to"),
            (je = "24h"),
            (Me = "7d"),
            (Be = "30d"),
            (Le = "all"),
            (Oe = "Jumping"),
            (Ve = " to "),
            (Te = "Source"),
            (Fe = "Version: "),
            (De = "SmartTV Client for Twitch"),
            (Ue = "Press back or enter key to close this."),
            (Re = "Player Related:"),
            (si = "Chat Related:"),
            (Ne = "General Related:"),
            (Ge =
              "Play a video: Navigate using Directional pad (up/down/left/right), press enter or play play/pause media"),
            (He = "Refresh screen content: "),
            (ze = "Exit the application: from side panel click exit"),
            (Wn =
              "Force close the application: Hold the back key until it auto force close"),
            (qe = "Switch screen: CH Up/Down or use the side panel"),
            (Xe =
              "Start a search: from side panel click search, writing the search press the Enter key on the virtual keyboard and choose a search option"),
            (Qe = "About this application: from side panel click about"),
            (Je =
              "This is a SmartTV Client for Twitch developed by a individual on his free time, for TVs that don't have access to a good official application, released for free to anyone who wants to use it."),
            (Rn = "This version of the app is for test in browser only!"),
            (Ye = "Contact information:"),
            (Ke =
              "This is an open source application licensed under the GNU General Public License v3.0, check it on github"),
            (We = "github.com/fgl27/smarttv-twitch"),
            (Ze = "This application uses following dependencies:"),
            ($e =
              "irc-message - Performant, streaming IRC message parser (https://github.com/sigkell/irc-message)"),
            (et =
              "Fontastic - Create your customized icon fonts in seconds (http://app.fontastic.me)"),
            (tt =
              "Twemoji - A simple library that provides standard Unicode emoji support across all platforms (https://github.com/twitter/twemoji)"),
            (nt =
              "UglifyJS - is a JavaScript parser, minifier, compressor and beautifier toolkit (https://github.com/mishoo/UglifyJS2)"),
            (it =
              "punycode - A robust Punycode converter that fully complies to RFC 3492 and RFC 5891 (https://github.com/bestiejs/punycode.js)"),
            (ot =
              "HTMLMinifier - A highly configurable, well-tested, JavaScript-based HTML minifier (https://github.com/kangax/html-minifier)"),
            (dt =
              "JSHint - A Static Code Analysis Tool for JavaScript (https://github.com/jshint/jshint)"),
            (at = "Web:"),
            (st =
              "crass - A CSS minification, pretty printing, and general utility library written in JS (https://github.com/mattbasta/crass)"),
            (ct =
              "Show information panel: Press enter key or D-pad keys if live channel feed is not showing"),
            (lt = "Close the video: press back key twice or media key Stop"),
            (ut =
              "Play/Pause a video: open information panel and click on pause symbol"),
            (rt = "Show user live channels feed: D-pad up"),
            (_t =
              "Change video quality: use the player bottom controls Quality"),
            (mt =
              "Force refresh a video (in case it freezes): Change video quality to the same"),
            (ft =
              "Show or hide the Chat : Guide or Info" +
              (Qd = g + "or in player bottom controls")),
            (ht = "Change Chat position : " + " CH Up/Down" + Qd),
            (pt = "Change Chat size : D-pad down" + Qd),
            (gt =
              "Change Chat background brightness: change in player bottom controls"),
            (vt =
              "Force refresh the Chat in Live streams (in case it freezes or doesn't load): use the player bottom controls Chat force disable (click twice)"),
            (io =
              "All media keys are supported (play, pause, stop, next track, fast forward, etc...)"),
            (zn = "Chat force disable"),
            (yt = "Update available, check google play store"),
            (wt =
              "Adding a key allows the app to access user follow content and logging to chat.<br><br> Add a key is not demanding and can be done at any point later.<br> In doubt read this link:<br> <br> https://https://github.com/fgl27/smarttv-twitch#twitchtv-authentication-key <br> <br>To add a key for "),
            (xt = "Add Authentication key"),
            (bt = "Key added OK"),
            (At = " Following"),
            (kt = " Follow"),
            (Ct =
              " And you have not set a authentication key the app can't check yours sub status."),
            (St = " And you are not a sub of this channel"),
            (Et = " You are a sub of this channel but "),
            (Pt =
              "Fail authentication check with the provider key, please check and try again"),
            (kn = "The added key doesn't belong to the user "),
            (It = "No user"),
            (jt =
              "Set user and an authentication key to be able to follow/unfollow"),
            (Bt = "Third party apps can no longer follow/unfollow channels"),
            (ti =
              "Set a user and authentication key to be able to see the side panel followed content" +
              (Mt =
                ", navigate to the side panel (Top option) User: Switch, add, key, press enter on the user")),
            (Lt = " Clip"),
            (Ot = "Channel content"),
            (Vt = " Followers"),
            (Tt = "Game content"),
            (Ft = "Yes"),
            (Dt = "Are you sure you want to remove the user "),
            (Ut = "Followed Games"),
            (Nt = [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "June",
              "July",
              "Aug",
              "Sept",
              "Oct",
              "Nov",
              "Dec",
            ]),
            (Gt = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]),
            (Ht = "Started "),
            (zt = "Videos"),
            (qt = " Video"),
            (Xt = "Replay"),
            (Qt = "exiting in "),
            (Jt = 'press "Return" to exit'),
            (Yt = "Featured"),
            (Kt = "Created "),
            (Wt = "Open the Broadcast"),
            (Zt = "No Broadcast"),
            ($t = "There are no Past Broadcasts for this clip"),
            (en = "And because of that no chat"),
            (tn = " is now"),
            (nn = "Open the Hosting"),
            (on = "Player related"),
            (dn = "Start Buffer size:"),
            (an =
              "How much is needed to buffer before starting the playback, this is not related to maximum size the buffer can be, a lower value here will make the player start playing sooner, but it may cause re-buffering which will cause the player to pause to buffer."),
            (cn = "Videos (Past Broadcast and Highlight) Start buffer"),
            (ln = "Clips Start buffer"),
            (un = "General"),
            (_n =
              "Play from the start or from where you stopped watching last time?"),
            (fn = (mn = "From:" + h) + "Start"),
            (hn = "Chat: The Chat has ended!"),
            (pn = ", Most recent"),
            (gn = ", Most views"),
            (vn =
              "Set an user authentication key to be able to see the side panel followed content" +
              Mt),
            (yn = "Switch: Most recent or views"),
            (wn = "Disable"),
            (Sd = "Enabled"),
            (Ed = "Disabled"),
            (On = "The app was closed while playing, restoring playback"),
            (xn = "Restore playback"),
            (bn =
              "The app saves what was playing in case it gets close unintentionally (changing apps the system may run out of memory and close it) or force closed by the user, the app then can restore what was previously playing on next start"),
            (An = "Chat font size"),
            (Cn = "Video's animated thumbnails"),
            (Sn = "Side panel: D-pad left or Back key"),
            (En = "Size "),
            (Pn = "Brightness "),
            (In =
              "Forbidden content, this is restricted in yours region or is restrained to the official Twitch app only"),
            (jn = "Jump step "),
            (Mn = (xi = " second") + "s"),
            (Ln = (Bn = " minute") + "s"),
            (Vn = "Clock offset"),
            (Tn = "Content language"),
            (Fn = "Press enter to access"),
            (Dn = "All"),
            (Un = "No game from this"),
            (Nn = "Isn't possible to jump during buffering"),
            (Gn =
              "Chat is force disabled, enable it in player bottom controls Chat force disable"),
            (Hn = "This clip/video failed to load. Can't replay"),
            (qn = "Chat background brightness"),
            (Qn = "Play Next"),
            (Yn = "Playing next in "),
            (Jn = "Play All"),
            (Kn = "Auto Play next clip"),
            (Zn = "Back to Main menu"),
            ($n = " Press up"),
            (uo = " Hold up"),
            (ei = "Live Feed"),
            (ni = "End dialog"),
            (ii =
              "Set the time that it will take for the stream/video/clip to end dialog taking action"),
            (oi = "Disable the timer"),
            (si = "Chat Show"),
            (di = "Chat size"),
            (ai = "Chat position"),
            (ri = "Video mode"),
            (ci = "Full screen"),
            (li = "Smaller screen and chat"),
            (ui = "Quality"),
            (_i = "Normal"),
            (mi = "Very low"),
            (fi = "Low"),
            (hi = "High"),
            (pi = "Very high"),
            (gi = "Thumbnails quality"),
            (vi =
              "Default thumbnails resolution for live, videos and games (can't be applied for clips) a lower value will help the app load faster but the thumbnail may look blurry"),
            (yi = "Paypal donations use bellow link:"),
            (Dd = "Bitcoin donations use wallet address:"),
            (bi = "Auto quality Bitrate limit:"),
            (Ai =
              "The maximum video allowed bitrate for the auto quality, this is most to prevent lag or slowdowns when playing in picture and picture mode as that mode used Auto quality only, but also can be used to limit the Main window bitrate when using Auto quality and prevent the player from trying bitrate bigger then what yours internet supports, some devices will slowdown too much if the main and small window bitrate is too high, the recommended is 3Mbps for small and unlimited for main."),
            (ki = "Single return key press"),
            (Ci =
              "Exit the player or exit picture in picture or exit 50/50 mode with a single key return click"),
            (Ei = "Now Live"),
            (Pi = "Show Now Live notification"),
            (Ii = "Now Live notification duration in seconds"),
            (ji = "Global app font size offset"),
            (Mi =
              "This will change the size of all text and most icons in the app (minus chat font size, because it has its own control), too small value may not be visible too big value will overflow the text box holder, that is way this value is limited"),
            (Bi = "Main Menu"),
            (Li = "User Menu"),
            (Oi = "Is offline"),
            (Vi = "Show screen position counter"),
            (Ti = "Switch: Starting Position offset"),
            (Fi =
              "Instead of starting on the first possible video, start a a lower position on the list, prevents having to go down and down to find a older video"),
            (Ui = "Choose a option for user"),
            (Di = "Main user"),
            (Ri = "Click on a user to see options"),
            (Ni = "User: Switch, add, key"),
            (Ji =
              "If start getting buffers issue disable " +
              (Gi = "Low Latency") +
              "<br>Use " +
              (sn = "Live streams Start buffer") +
              " equal or bellow to 3 for this to have effect"),
            (Hi = "Live feed sort"),
            (zi = "Sorts side panel live feed and player live feed"),
            (qi = "Alphabetical A - Z"),
            (Xi = "Alphabetical Z - A"),
            (Qi = "Enable app animations"),
            (Yi = ", follow bellow steps:"),
            (Ki =
              "Access the site link_link (using a computer or a smart phone)"),
            (Wi =
              'Click the "Authorize" button which will take you to main Twitch.TV authentication site'),
            (Zi =
              "Login to Twitch.TV using the username you are trying to add a key for"),
            ($i =
              "Click on Authorize button of Twitch.TV site if you agree with the requested permissions"),
            (eo =
              "The web page will update and show a key code, the key only has lowercase letters and numbers."),
            (no = "Disable Hold enter to refresh"),
            (oo = "App running for:"),
            (ao = "Unable to get stream link issue"),
            (so =
              "Third party app are current without access for this featuring."),
            (co = "(Click to unfollow)"),
            (lo = "(Click to follow)"),
            (ro = "Name A - Z"),
            (_o = "Name Z - A"),
            (mo = "Game A - Z"),
            (fo = "Game Z - A"),
            (ho = "Views highest"),
            (po = "Views lowest"),
            (go = "Created / Uptime newest"),
            (vo = "Created / Uptime Oldest"),
            (wo = "All configuration erased the app will self restart"),
            (yo =
              "<br>Keep hold Key for 10 seconds to reset all app configuration this can help when the app is freezed, release to dismiss this<br><br>"),
            (xo =
              "Force erase all app config: in case the app misbehave and stop working, hold key channel UP or Down for 20 seconds anywhere in the app, after it 10 seconds there is a confirmation"),
            (bo = " has gift you a sub!"),
            (Ao = "An " + (vd = "Anonymous")),
            (ko = "You are permanently banned from talking in  "),
            (Co = "Write to chat"),
            (So =
              "When this seleceted, press enter to show onscreen keyboard, If you have a physical keyboard connected press return or esc to hide the onscreen keyboard"),
            (Eo = "Chat ROOMSTATE:"),
            (Po = "No restrictions"),
            (yd = "Options"),
            (jo = "Delete all"),
            (qo = "Unicode Emoji"),
            (Mo = "Twitch emotes"),
            (Bo = "BTTV global"),
            (Lo = "BTTV streamer"),
            (Oo = "FFZ global"),
            (Vo = "FFZ streamer"),
            (To = "7TV global"),
            (Fo = "7TV streamer"),
            (Do = "@streamer"),
            (Uo = "In Chat expected result:"),
            (Ro = "Send"),
            (No = "This emote list is empty"),
            (Go =
              "Chat is Followers-only mode, and you are not a follower of "),
            (Ho = "and you are only fallowing for "),
            (zo = "Twitch Emote-only mode"),
            (Xo = "Write to chat options"),
            (Qo = "Emotes sorting"),
            (Yo =
              "If this is disabled, the lists of emotes will be showed in the order provider by the server"),
            (Ko = "Force show chat"),
            (Wo =
              "If you wanna see the chat when write to chat is used, enable this"),
            (Jo =
              "Add an user authorization key to be able to logging and write to chat" +
              Mt),
            (Zo = "Chat not ready to send! Try again is a second or two."),
            ($o = "Redeemed Highlight My Message"),
            (ed = "Redeemed Send a Message in Sub-Only Mode"),
            (Io = "Chat options"),
            (_d =
              "Highlight rewards messages (Purple background message only)"),
            (td =
              "Highlight @streamer messages (Dark red background, the @ is blue)"),
            (nd =
              "Highlight yours @username messages (Dark Green background, the @ is blue)"),
            (id = "Highlight yours sended messages (Dark Green background)"),
            (od = "Show Sub messages in chat (Dark orange background)"),
            (dd = "Highlight Bits message (Dark Yellow background)"),
            (ad = "Show Actions messages (Usually this are from stream Bots)"),
            (sd =
              'This messages are usually equal to Sub messages but sended via a stream bot, so if you have "Show sub..." enable this is redundant'),
            (cd = "Individual messages background color difference"),
            (ld =
              "Modes are disable, enable (auto mode), Bright or Darker, In auto mode if the chat is above the stream it odd message will have a darker background accent color from the even, if the chat is not above (side by side for example) the color will be brigh"),
            (md = "Insert a line to separate it individual chat messages"),
            (ud = "Logging in chat with current user"),
            (rd =
              "The app will always logging to chat using current user when a authorization key is provided, unless chat is disable on player bottom controls, but if this option if set to NO it will prevent logging using current username and instead will logging as anonymous, even if providing a authorization key. This doesn't prevent from send chat message for this user if a key ws added but prevents form know if you are banned on the chat and prevent knowing the chat ROOMSTATE"),
            (wd = "Show message timestamp"),
            (pd = "Readable nick colors"),
            (gd =
              "Instead of using the default nick color that some times can't be readable on a dark background, use a custom easy to read color"),
            (xd = "Clear chat, delete user’s message’s"),
            (Ad = "This single user message was requested to be deleted"),
            (kd = "All messages from this user was requested to be deleted"),
            (Cd = ", they've be timeout for "),
            (bd =
              "Delete chat messages from a specific user (typically after they received a timeout or ban), deleted messages will always have a blue background, the message will be deleted if this is set to yes, if not only the background color will change"),
            (hd = "Dark mode"),
            (fd = "Bright mode"),
            (bd =
              "Delete chat messages from a specific user (typically after they received a timeout or ban), deleted messages will always have a blue background, the message will be removed if this is set to yes if not only"),
            (jd = " In chat"),
            (Md = "Show total logged in user on top of the chat or viewers"),
            (Bd =
              "This is very helpfully to know for example if the offline chat has any user to talk to, also let the user know the difference from total viewer VS total chat user"),
            (Pd = "Show viewers"),
            (Id = "Show chatters"),
            (Ld = "Unknown"),
            (rn = "Chat: Connecting to"),
            (Od = "Connecting timeout, Fail to logging..."),
            (Vd = "Chat: Connected"),
            (Td =
              "Message send, chat delay enabled, message will show in chat after"),
            (wi = "Chat: delay"),
            (Fd =
              "Twitch is shutting down some of they API, making necessary to update all app API calls to they new API, the new API is different because of that it demands a lot of work.<br><br>Because of that the app is going thru a update phase, during this time some app content may not work.<br><br>Be aware with this new Twitch API is necessary to add a User and a Authentication key, if you don’t you may not have access to any content in future updates or after Twitch completely shutting they old API.<br><br>Some users may need to reinstall the app...If you have problem after see this warning, hold channel key up until you see a warning, now hold key down until the app restar, if that doesn't work, reinstall  the app.<br><br>This dialog will auto hide in 1 minute, or press any key to hide it"),
            Ab))
              (Ab[t].defaultValue = ch(t, Ab[t].defaultValue)),
                --Ab[t].defaultValue;
            Pb(),
              console.log("language is " + n),
              (ie = Xn),
              (zd =
                Nd +
                R +
                "</div>" +
                Nd +
                Ne +
                "</div>" +
                Hd +
                o +
                Sn +
                h +
                o +
                Ge +
                h +
                o +
                (He += Rt) +
                h +
                o +
                ze +
                h +
                o +
                Wn +
                h +
                o +
                xo +
                h +
                o +
                qe +
                h +
                o +
                Xe +
                h +
                o +
                Qe +
                h +
                "</div>" +
                (Qd =
                  Nd +
                  Re +
                  "</div>" +
                  Hd +
                  o +
                  rt +
                  h +
                  o +
                  ct +
                  h +
                  o +
                  lt +
                  h +
                  "</div>" +
                  Hd +
                  o +
                  ut +
                  h +
                  o +
                  _t +
                  h +
                  o +
                  mt +
                  h +
                  o +
                  io +
                  h +
                  h +
                  Nd +
                  si +
                  ":</div>" +
                  Hd +
                  o +
                  ft +
                  h +
                  o +
                  ht +
                  h +
                  o +
                  pt +
                  h +
                  o +
                  gt +
                  h +
                  o +
                  vt) +
                h +
                Nd +
                Ue +
                "</div>"),
              (qd = Nd + De + "</div></div>"),
              (Xd =
                Hd +
                h +
                Je +
                h +
                (r
                  ? ""
                  : h +
                    '<div class="class_bold" style="display: inline-block; color: #FF0000; font-size: 110%;">' +
                    Rn +
                    "</div>") +
                "</div>" +
                h +
                Nd +
                Ye +
                "</div>" +
                Yd +
                Rd +
                "</div>" +
                h +
                ('<div style="vertical-align: middle;"><img style="vertical-align: middle; display: inline-block; width: 4%;" alt="" src="https://fgl27.github.io/SmartTwitchTV/release/githubio/images/paypal.png"><div class="class_bold" style="vertical-align: middle; display: inline-block; font-size: 120%;">' +
                  yi +
                  h +
                  '<div style="display: inline-block; color: #0366d6;font-size: 2vh;text-align: center; font-family: Roboto;">http://tiny.cc/donatetofgl27</div></div></div>') +
                ('<div style="vertical-align: middle;"><img style="vertical-align: middle; display: inline-block; width: 4%;" alt="" src="https://fgl27.github.io/SmartTwitchTV/release/githubio/images/bitcoin.png"><div class="class_bold" style="vertical-align: middle; display: inline-block; font-size: 120%;">' +
                  g +
                  Dd +
                  h +
                  g +
                  '<div style="display: inline-block; color: #0366d6;font-size: 2.7vh;text-align: center; font-family: Roboto;">' +
                  Jd +
                  "</div></div></div>") +
                h +
                Ke +
                h +
                We +
                h +
                h +
                Gd +
                Ze +
                "</div>" +
                Hd +
                g +
                g +
                at +
                h +
                o +
                $e +
                h +
                o +
                it +
                h +
                o +
                st +
                h +
                o +
                nt +
                h +
                o +
                ot +
                h +
                o +
                dt +
                h +
                o +
                tt +
                h +
                o +
                et +
                h +
                Nd +
                Ue +
                "</div></div>"),
              (to =
                Yi +
                h +
                o +
                Ki.replace(
                  "link_link",
                  "<div style=\"display: inline-block; color: #FF0000; font-size: 110%; font-family: 'Roboto-Bold';\">http://tiny.cc/twitchkey</div>"
                ) +
                h +
                o +
                Wi +
                h +
                o +
                Zi +
                h +
                o +
                $i +
                h +
                o +
                eo),
              (V_ = document.getElementById("search_input")),
              (T_ = document.getElementById("user_input")),
              (F_ = document.getElementById("oauth_input")),
              (u = k("chat_send_input")),
              Qs(),
              (x = B(x, lh("Main_values", {}))).AddCode_main_token &&
                ((Is = x.AddCode_main_token),
                (Jm = [
                  [Mm, ks],
                  ["Authorization", Xm + Is],
                ])),
              Ha(0, of, nf);
          });
      });
  }
  function nf() {
    za(0, of, of);
  }
  function of() {
    window.setTimeout(df, 500);
  }
  function df() {
    if (
      ((t = !0),
      nh(),
      af("label_refresh", "icon-refresh", F + ":" + Rt),
      m(
        "label_update",
        '<div style="vertical-align: middle; display: inline-block;"><i class="icon-globe" style="color: #FF0000;"></i></div><div style="vertical-align: middle; display: inline-block; color: #FF0000">' +
          g +
          yt +
          "</div>"
      ),
      af("label_side_panel", "icon-arrow-left", ie),
      sA(),
      r7(),
      f("dialog_end_next_text", Qn),
      f("dialog_end_replay_text", Xt),
      f("dialog_end_vod_text", Wt),
      f("dialog_end_channel_text", Ot),
      f("dialog_end_game_text", Tt),
      m("dialog_about_text", qd + '<div id="about_runningtime"></div>' + Xd),
      (xm = [je, Me, Be, Le]),
      t)
    ) {
      var e,
        t = "";
      (t += Yx("general", un)),
        Xx.push((e = "content_lang")),
        (O[e].values = [Fn]),
        (t += Wx(e, Tn, "")),
        Xx.push((e = "chat_opt")),
        (O[e].values = [Fn]),
        (t += Kx(e, Io)),
        Xx.push((e = "live_feed_sort")),
        (O[e].values = [ho, po, ro, _o, mo, fo, go, vo]),
        (t += Wx(e, Hi, zi)),
        Xx.push((e = "thumb_quality")),
        (O[e].values = [mi, fi, _i, hi, pi]),
        (t += Wx(e, gi, vi)),
        Xx.push((e = "global_font_offset")),
        (t += Wx(e, ji, Mi)),
        Xx.push((e = "restor_playback")),
        (O[e].values = [se, Ft]),
        (t += Wx(e, xn, bn)),
        Xx.push((e = "videos_animation")),
        (O[e].values = [se, Ft]),
        (t += Kx(e, Cn)),
        Xx.push((e = "app_animations")),
        (O[e].values = [se, Ft]),
        (t += Kx(e, Qi)),
        Xx.push((e = "enter_refresh")),
        (O[e].values = [se, Ft]),
        (t += Kx(e, no)),
        Xx.push((e = "clip_auto_play_next")),
        (O[e].values = [Ft, se]),
        (t += Kx(e, Kn)),
        Xx.push((e = "live_notification")),
        (O[e].values = [se, Ft]),
        (t += Kx(e, Pi)),
        Xx.push((e = "live_notification_time")),
        (t += Kx(e, Ii)),
        Xx.push((e = "clock_offset")),
        (t += Kx(e, Vn)),
        Xx.push((e = "show_screen_counter")),
        (O[e].values = [se, Ft]),
        (t = (t += Kx(e, Vi)) + Yx("play", on)),
        Xx.push((e = "single_click_exit")),
        (O[e].values = [se, Ft]),
        (t += Wx(e, ki, Ci)),
        Xx.push((e = "end_dialog_counter")),
        (O[e].values[0] = oi),
        (t =
          (t += Wx(e, ni, ii)) +
          '<div id="setting_title_buffers" class="settings_title">' +
          dn +
          '</div><div id="setting_title_buffers_summary" class="settings_summary">' +
          an +
          "</div>"),
        Xx.push((e = "buffer_live")),
        (t += Kx(e, sn)),
        Xx.push((e = "buffer_vod")),
        (t += Kx(e, cn)),
        Xx.push((e = "buffer_clip")),
        m("settings_main", (t += Kx(e, ln))),
        (Qx = Xx.length);
      var n,
        i = "";
      for (n in Ab)
        Cb.push(n),
          (Ab[n].values = [se, Ft]),
          (i += (function (e, t) {
            return (
              '<div id="' +
              e +
              '_div" class="settings_div"><div id="' +
              e +
              '_name" class="settings_name">' +
              t +
              '</div><div class="settings_arraw_div"><div id="' +
              e +
              'arrow_left" class="left"></div></div><div id="' +
              e +
              '" class="' +
              (jb(e) ? "red_text " : "") +
              'strokedeline settings_value">' +
              Ib(e) +
              '</div><div class="settings_arraw_div"><div id="' +
              e +
              'arrow_right" class="right"></div></div></div>'
            );
          })(n, n));
      m("settings_lang", i), (Sb = Cb.length);
    } else {
      var o = "";
      for (o in (f("setting_title_general", un),
      f((o = "clock_offset") + "_name", Vn),
      f((o = "show_screen_counter") + "_name", Vi),
      f((o = "content_lang") + "_name", Tn),
      f(o, $x(o)),
      (O[o].values = [Fn]),
      Zx((o = "live_feed_sort"), Hi, zi),
      f(o, $x(o)),
      (O[o].values = [ho, po, ro, _o, mo, fo, go, vo]),
      f("setting_title_play", on),
      f("setting_title_bandwidth", bi),
      f("setting_title_bandwidth_summary", Ai),
      f("setting_title_buffers", dn),
      f("setting_title_buffers_summary", an),
      f((o = "buffer_live") + "_name", sn),
      f((o = "buffer_vod") + "_name", cn),
      f((o = "buffer_clip") + "_name", ln),
      Zx((o = "restor_playback"), xn, bn),
      (O[o].values = [Ft, se]),
      Zx((o = "thumb_quality"), gi, vi),
      (O[o].values = [mi, fi, _i, hi, pi]),
      Zx((o = "global_font_offset"), ji, Mi),
      Zx((o = "end_dialog_counter"), ni, ii),
      (O[o].values[0] = oi),
      f((o = "videos_animation") + "_name", Cn),
      (O[o].values = [Ft, se]),
      f((o = "clip_auto_play_next") + "_name", Kn),
      (O[o].values = [se, Ft]),
      f((o = "live_notification") + "_name", Pi),
      (O[o].values = [se, Ft]),
      f((o = "live_notification_time") + "_name", Ii),
      Zx((o = "single_click_exit"), ki, Ci),
      (O[o].values = [se, Ft]),
      f((o = "app_animations") + "_name", Qi),
      (O[o].values = [se, Ft]),
      f((o = "enter_refresh") + "_name", no),
      (O[o].values = [Ft, se]),
      O))
        O.hasOwnProperty(o) && f(o, $x(o));
      Pb(), Uf();
    }
    var t;
    (rm = x.Main_Go),
      A(function () {
        if (r)
          for (var e in (console.log("TVKeyValue_regKey started"), Sa)) {
            t = void 0;
            var t = Sa[e];
            try {
              tizen.tvinputdevice.registerKey(t);
            } catch (e) {
              console.log("Registering key " + t + " error"), console.log(e);
            }
          }
        if (
          (r &&
            ((d = document.createElement("object")).setAttribute(
              "type",
              "application/avplayer"
            ),
            d.setAttribute(
              "style",
              "width:100%; height:100%; position: absolute;"
            ),
            document.getElementById("scene2").appendChild(d),
            (C = (window.tizen && window.webapis.avplay) || {}),
            (Og = tizen.systeminfo.getCapability(
              "http://tizen.org/feature/platform.version"
            ))),
          (pg = document.getElementById("chat_container0")),
          (gg = document.getElementById("inner_progress_bar")),
          (X0 = k("dialog_warning_play_middle_text")),
          (q0 = k("dialog_warning_play_middle")),
          (vg = ch("ChatPositionsValue", 0)),
          (xg = ch("ChatSizeValue", 2)),
          (Jg = uh("ChatEnable", !1)),
          (Ig = uh("Play_isFullScreen", !0)),
          (wg = (0.05 * x.ChatBackground).toFixed(2)),
          (kv = ch("Play_ChatDelayPosition", 0)),
          (kg = uh("Play_LowLatency", !1)),
          parseFloat(Og) < 2.4)
        )
          Cg = kg = !1;
        else
          try {
            webapis.preview.setPreviewData("{}");
          } catch (e) {}
        for (var n = 25; n < 301; n++) Tv.push(n);
        x.Chat_font_size_new > Tv.length - 1 &&
          (x.Chat_font_size_new = Tv.length - 1),
          z2(),
          _0(!1),
          m0(!1),
          qv(),
          m(
            "user_feed_notify_img_holder",
            '<img id="user_feed_notify_img" alt="" class="notify_img" src="' +
              Zd +
              '" onerror="this.onerror=null;this.src=\'' +
              Zd +
              "'\" >"
          ),
          (_m = [
            ["Client-ID", ks],
            [Im, jm],
            [Om, null],
          ]),
          (mm = [
            ["Client-ID", Es],
            [Im, jm],
            [Om, null],
          ]),
          (Wr[0] = k("chat_box0")),
          (su[0] = 0),
          (su[1] = 0),
          (cu[0] = []),
          (cu[1] = []),
          Ws() &&
            v[0].access_token &&
            (window.clearInterval(U_), (U_ = window.setInterval(oh, 6e5))),
          document.body.addEventListener("keyup", Hf, !1),
          (Yw = B(
            {
              HeaderQuatity: 2,
              ids: Ky("Live"),
              table: "stream_table_live",
              screen: q_,
              object: "data",
              key_pgDown: Q_,
              key_pgUp: K_,
              use_helix: !0,
              base_url: Lm + "streams?first=" + sx,
              set_url: function () {
                this.url =
                  this.base_url +
                  (this.cursor ? "&after=" + this.cursor : "") +
                  ("" !== wm ? "&language=" + wm : "");
              },
              label_init: function () {
                r7(), (x.Sidepannel_IsUser = !1), s7(this.screen), Ox(X);
              },
              key_play: function () {
                Jf(this.posY + "_" + this.posX, this.ids, L);
              },
            },
            Cx
          )),
          (Yw = B(Yw, Ex)),
          (Kw = B(
            {
              HeaderQuatity: 2,
              ids: Ky("Featured"),
              table: "stream_table_featured",
              screen: Q_,
              key_pgDown: J_,
              key_pgUp: q_,
              base_url: Bm + "streams/featured?limit=" + sx,
              set_url: function () {
                this.check_offset(),
                  (this.url =
                    this.base_url +
                    "&offset=" +
                    this.offset +
                    (Ws() && v[0].access_token
                      ? "&oauth_token=" + v[0].access_token
                      : ""));
              },
              label_init: function () {
                r7(), (x.Sidepannel_IsUser = !1), s7(this.screen), Ox(Yt);
              },
              object: "featured",
              key_play: function () {
                Jf(this.posY + "_" + this.posX, this.ids, L);
              },
            },
            Cx
          )),
          ((Kw = B(Kw, Ex)).addCell = function (e) {
            (e = e.stream), this.addCellTemp(e);
          }),
          (Ww = B(
            {
              HeaderQuatity: 2,
              ids: Ky("AGame"),
              table: "stream_table_a_game",
              screen: cm,
              object: "data",
              key_pgDown: Y_,
              key_pgUp: Q_,
              use_helix: !0,
              base_url: Lm + "streams?game_id=",
              set_url: function () {
                this.url =
                  this.base_url +
                  encodeURIComponent(x.Main_gameSelected_id) +
                  "&first=" +
                  sx +
                  (this.cursor ? "&after=" + this.cursor : "") +
                  ("" !== wm ? "&language=" + wm : "");
              },
              label_init: function () {
                Mx(),
                  x.Search_isSearching ? Ff() : (x.gameSelectedOld = null),
                  Ox(x.Main_gameSelected, X);
              },
              label_exit: Bx,
              HasSwitches: !0,
              SwitchesIcons: ["movie-play", "movie"],
              addSwitches: function () {
                (this.TopRowCreated = !0),
                  (this.row = document.createElement("div"));
                for (
                  var e, t, n = [g + g + zt, g + g + ue], i = 0;
                  i < n.length;
                  i++
                )
                  (e =
                    '<i class="icon-' +
                    this.SwitchesIcons[i] +
                    ' stream_channel_follow_icon"></i>' +
                    n[i]),
                    (t = document.createElement("div")).setAttribute(
                      "id",
                      this.ids[8] + "y_" + i
                    ),
                    (t.className = "stream_cell_period"),
                    (t.innerHTML =
                      '<div id="' +
                      this.ids[0] +
                      "y_" +
                      i +
                      '" class="stream_thumbnail_channel_vod" ><div id="' +
                      this.ids[3] +
                      "y_" +
                      i +
                      '" class="stream_channel_follow_game">' +
                      e +
                      "</div></div>"),
                    this.row.appendChild(t);
                document.getElementById(this.table).appendChild(this.row);
              },
              key_play: function () {
                -1 !== this.posY
                  ? Jf(this.posY + "_" + this.posX, this.ids, L)
                  : M.posX
                  ? 1 === M.posX
                    ? ((x.Main_Go = um),
                      (x.Main_OldgameSelected = x.Main_gameSelected),
                      Pw(),
                      Mf())
                    : Ws() && v[0].access_token
                    ? (Ax ? gs : _s)()
                    : (gf(jt),
                      window.setTimeout(function () {
                        M.emptyContent && x.Main_Go === cm ? gf(se + be) : vf();
                      }, 2e3))
                  : ((x.Main_Go = lm),
                    (x.Main_OldgameSelected = x.Main_gameSelected),
                    Pw(),
                    Mf());
              },
            },
            Cx
          )),
          (Ww = B(Ww, Ex)),
          (nx = B(
            {
              HeaderQuatity: 3,
              ids: Ky("UserLive"),
              table: "stream_table_user_live",
              screen: W_,
              object: "data",
              key_pgDown: Z_,
              key_pgUp: em,
              base_url: Lm + "streams/",
              loadChannelOffsset: 0,
              followerChannels: "",
              followerChannelsDone: !1,
              use_helix: !0,
              set_url: function () {
                this.url =
                  this.base_url +
                  "followed?user_id=" +
                  v[0].id +
                  "&first=" +
                  sx +
                  (this.cursor ? "&after=" + this.cursor : "");
              },
              label_init: function () {
                Lx(), Ox(q, xe);
              },
              key_play: function () {
                Jf(this.posY + "_" + this.posX, this.ids, L);
              },
            },
            Cx
          )),
          (nx = B(nx, Ex)),
          (zw = B(
            {
              ids: Ky("Clip"),
              table: "stream_table_clip",
              screen: K_,
              key_pgDown: q_,
              key_pgUp: Y_,
              periodPos: ch("Clip_periodPos", 2),
              base_url: Bm + "clips/top?limit=" + sx,
              set_url: function () {
                this.url =
                  this.base_url +
                  "&period=" +
                  this.period[this.periodPos - 1] +
                  (this.cursor ? "&cursor=" + this.cursor : "") +
                  ("" !== wm ? "&language=" + (kb[wm] || wm) : "");
              },
              SetPeriod: function () {
                sh("Clip_periodPos", this.periodPos),
                  Ox(ue, xm[this.periodPos - 1]);
              },
              label_init: function () {
                this.SetPeriod(),
                  r7(),
                  (x.Sidepannel_IsUser = !1),
                  s7(this.screen);
              },
              label_exit: function () {
                Tf();
              },
            },
            Cx
          )),
          (zw = B(zw, Px)),
          (qw = B(
            {
              ids: Ky("ChannelClip"),
              table: "stream_table_channel_clip",
              screen: am,
              key_pgUp: dm,
              periodPos: ch("ChannelClip_periodPos", 2),
              base_url: Bm + "clips/top?channel=",
              set_url: function () {
                this.url =
                  this.base_url +
                  encodeURIComponent(x.Main_selectedChannel) +
                  "&limit=" +
                  sx +
                  "&period=" +
                  this.period[this.periodPos - 1] +
                  (this.cursor ? "&cursor=" + this.cursor : "");
              },
              SetPeriod: function () {
                sh("ChannelClip_periodPos", this.periodPos),
                  Ox(
                    x.Main_selectedChannelDisplayname,
                    ue + g + xm[this.periodPos - 1]
                  );
              },
              label_init: function () {
                !x.Search_isSearching && x.Main_selectedChannel_id && Gc(),
                  x.Main_selectedChannel !== this.lastselectedChannel &&
                    (this.status = !1),
                  Ff(),
                  this.SetPeriod(),
                  _("label_side_panel"),
                  (this.lastselectedChannel = x.Main_selectedChannel);
              },
              label_exit: Tf,
            },
            Cx
          )),
          (qw = B(qw, Px)),
          (Xw = B(
            {
              ids: Ky("AGameClip"),
              table: "stream_table_a_game_clip",
              screen: um,
              key_pgDown: Y_,
              key_pgUp: Q_,
              periodPos: ch("AGameClip_periodPos", 2),
              base_url: Bm + "clips/top?game=",
              set_url: function () {
                this.url =
                  this.base_url +
                  encodeURIComponent(x.Main_gameSelected) +
                  "&limit=" +
                  sx +
                  "&period=" +
                  this.period[this.periodPos - 1] +
                  (this.cursor ? "&cursor=" + this.cursor : "") +
                  ("" !== wm ? "&language=" + (kb[wm] || wm) : "");
              },
              SetPeriod: function () {
                sh("AGameClip_periodPos", this.periodPos),
                  Ox(x.Main_gameSelected, ue + g + xm[this.periodPos - 1]);
              },
              label_init: function () {
                Mx(), this.SetPeriod();
              },
              label_exit: Bx,
            },
            Cx
          )),
          (Xw = B(Xw, Px)),
          (Qw = B(
            {
              ids: Ky("Game"),
              table: "stream_table_games",
              screen: J_,
              key_pgDown: Y_,
              key_pgUp: Q_,
              object: "data",
              use_helix: !0,
              base_url: Lm + "games/top?first=" + sx,
              set_url: function () {
                !this.use_helix &&
                  this.offset &&
                  this.offset + sx > this.MaxOffset &&
                  (this.dataEnded = !0),
                  (this.url =
                    this.base_url +
                    (this.cursor ? "&after=" + this.cursor : ""));
              },
              label_init: function () {
                r7(), (x.Sidepannel_IsUser = !1), s7(this.screen), Ox(Q);
              },
            },
            Cx
          )),
          (Qw = B(Qw, Ix)),
          (Jw = B(
            {
              ids: Ky("UserGames"),
              table: "stream_table_user_games",
              screen: Z_,
              key_pgDownNext: em,
              key_pgDown: $_,
              key_pgUp: W_,
              isLive: !1,
              hasGameProp: !0,
              OldUserName: "",
              object: "follows",
              base_url: Bm + "users/",
              set_url: function () {
                this.offset &&
                  this.offset + sx > this.MaxOffset &&
                  (this.dataEnded = !0),
                  (this.url =
                    this.base_url +
                    encodeURIComponent(v[0].id) +
                    "/follows/games?limit=" +
                    sx +
                    "&offset=" +
                    this.offset);
              },
              label_init: function () {
                Lx(), Ox(q, Ut);
              },
              label_exit: function () {
                af("label_refresh", "icon-refresh", F + ":" + Rt);
              },
            },
            Cx
          )),
          (Jw = B(Jw, Ix)),
          (Zw = B(
            {
              periodMaxPos: 4,
              HeaderQuatity: 2,
              key_pgDown: K_,
              key_pgUp: J_,
              object: "vods",
              ids: Ky("Vod"),
              table: "stream_table_vod",
              screen: Y_,
              highlightSTR: "Vod_highlight",
              highlight: uh("Vod_highlight", !1),
              periodPos: ch("vod_periodPos", 2),
              base_url: Bm + "videos/top?limit=" + sx,
              set_url: function () {
                this.url =
                  this.base_url +
                  "&broadcast_type=" +
                  (this.highlight ? "highlight" : "archive") +
                  "&sort=views&offset=" +
                  this.offset +
                  "&period=" +
                  this.period[this.periodPos - 1] +
                  ("" !== wm ? "&language=" + wm : "");
              },
              key_play: function () {
                -1 === this.posY
                  ? 0 === this.posX
                    ? ((this.highlight = !this.highlight),
                      this.SetPeriod(),
                      $y(),
                      sh(this.highlightSTR, this.highlight ? "true" : "false"))
                    : Bw()
                  : Wf(this.posY + "_" + this.posX, this.ids, L);
              },
              SwitchesIcons: ["movie-play", "history"],
              addSwitches: function () {
                (this.TopRowCreated = !0),
                  (this.row = document.createElement("div"));
                for (
                  var e, t, n = [g + g + H, g + g + z], i = 0;
                  i < n.length;
                  i++
                )
                  (e =
                    '<i class="icon-' +
                    this.SwitchesIcons[i] +
                    ' stream_channel_follow_icon"></i>' +
                    n[i]),
                    (t = document.createElement("div")).setAttribute(
                      "id",
                      this.ids[8] + "y_" + i
                    ),
                    (t.className = "stream_cell_period"),
                    (t.innerHTML =
                      '<div id="' +
                      this.ids[0] +
                      "y_" +
                      i +
                      '" class="stream_thumbnail_channel_vod" ><div id="' +
                      this.ids[3] +
                      "y_" +
                      i +
                      '" class="stream_channel_follow_game">' +
                      e +
                      "</div></div>"),
                    this.row.appendChild(t);
                document.getElementById(this.table).appendChild(this.row);
              },
              label_init: function () {
                r7(),
                  (x.Sidepannel_IsUser = !1),
                  s7(this.screen),
                  this.SetPeriod();
              },
              SetPeriod: function () {
                sh("vod_periodPos", this.periodPos),
                  Ox(
                    zt,
                    (this.highlight ? le : ce) + g + xm[this.periodPos - 1]
                  );
              },
            },
            Cx
          )),
          (Zw = B(Zw, Sx)),
          ($w = B(
            {
              periodMaxPos: 4,
              HeaderQuatity: 2,
              object: "vods",
              key_pgDown: Y_,
              key_pgUp: Q_,
              ids: Ky("AGameVod"),
              table: "stream_table_a_game_vod",
              screen: lm,
              highlightSTR: "AGameVod_highlight",
              highlight: uh("AGameVod_highlight", !1),
              periodPos: ch("AGameVod_periodPos", 2),
              base_url: Bm + "videos/top?game=",
              set_url: function () {
                this.url =
                  this.base_url +
                  encodeURIComponent(x.Main_gameSelected) +
                  "&limit=" +
                  sx +
                  "&broadcast_type=" +
                  (this.highlight ? "highlight" : "archive") +
                  "&sort=views&offset=" +
                  this.offset +
                  "&period=" +
                  this.period[this.periodPos - 1] +
                  ("" !== wm ? "&language=" + wm : "");
              },
              key_play: function () {
                -1 === this.posY
                  ? 0 === this.posX
                    ? ((this.highlight = !this.highlight),
                      this.SetPeriod(),
                      $y(),
                      sh(this.highlightSTR, this.highlight ? "true" : "false"))
                    : Bw()
                  : Wf(this.posY + "_" + this.posX, this.ids, L);
              },
              SwitchesIcons: ["movie-play", "history"],
              addSwitches: function () {
                (this.TopRowCreated = !0),
                  (this.row = document.createElement("div"));
                for (
                  var e, t, n = [g + g + H, g + g + z], i = 0;
                  i < n.length;
                  i++
                )
                  (e =
                    '<i class="icon-' +
                    this.SwitchesIcons[i] +
                    ' stream_channel_follow_icon"></i>' +
                    n[i]),
                    (t = document.createElement("div")).setAttribute(
                      "id",
                      this.ids[8] + "y_" + i
                    ),
                    (t.className = "stream_cell_period"),
                    (t.innerHTML =
                      '<div id="' +
                      this.ids[0] +
                      "y_" +
                      i +
                      '" class="stream_thumbnail_channel_vod" ><div id="' +
                      this.ids[3] +
                      "y_" +
                      i +
                      '" class="stream_channel_follow_game">' +
                      e +
                      "</div></div>"),
                    this.row.appendChild(t);
                document.getElementById(this.table).appendChild(this.row);
              },
              OldgameSelected: "",
              label_init: function () {
                Mx(), this.SetPeriod();
              },
              label_exit: Bx,
              SetPeriod: function () {
                sh("AGameVod_periodPos", this.periodPos),
                  Ox(
                    x.Main_gameSelected,
                    (this.highlight ? le : ce) + g + xm[this.periodPos - 1]
                  );
              },
            },
            Cx
          )),
          ($w = B($w, Sx)),
          (tx = B(
            {
              periodMaxPos: 2,
              HeaderQuatity: 2,
              key_pgDown: am,
              object: "videos",
              ids: Ky("ChannelVod"),
              table: "stream_table_channel_vod",
              screen: dm,
              time: ["time", "views"],
              extraoffset: 0,
              OffSetPos: 0,
              highlightSTR: "ChannelVod_highlight",
              highlight: uh("ChannelVod_highlight", !1),
              periodPos: ch("ChannelVod_periodPos", 1),
              base_url: Bm + "channels/",
              set_url: function () {
                this.url =
                  this.base_url +
                  encodeURIComponent(x.Main_selectedChannel_id) +
                  "/videos?limit=" +
                  sx +
                  "&broadcast_type=" +
                  (this.highlight ? "highlight" : "archive") +
                  "&sort=" +
                  this.time[this.periodPos - 1] +
                  "&offset=" +
                  (this.offset + this.extraoffset);
              },
              key_play: function () {
                -1 === this.posY
                  ? 0 === this.posX
                    ? ((this.highlight = !this.highlight),
                      this.SetPeriod(),
                      $y(),
                      sh(this.highlightSTR, this.highlight ? "true" : "false"))
                    : 1 === this.posX
                    ? (this.periodPos++,
                      this.periodPos > this.periodMaxPos &&
                        (this.periodPos = 1),
                      this.SetPeriod(),
                      $y())
                    : ((M.OffSetPos = M.extraoffset / 100),
                      Gw(100 * M.OffSetPos),
                      Rw(),
                      _("dialog_OffSet"),
                      document.body.removeEventListener("keydown", L),
                      document.body.addEventListener("keydown", Hw, !1))
                  : Wf(this.posY + "_" + this.posX, this.ids, L);
              },
              SwitchesIcons: ["movie-play", "history", "offset"],
              addSwitches: function () {
                (this.TopRowCreated = !0),
                  (this.row = document.createElement("div"));
                for (
                  var e, t, n = [g + g + H, g + g + yn, g + g + Ti], i = 0;
                  i < n.length;
                  i++
                )
                  (e =
                    '<i class="icon-' +
                    this.SwitchesIcons[i] +
                    ' stream_channel_follow_icon"></i>' +
                    n[i]),
                    (t = document.createElement("div")).setAttribute(
                      "id",
                      this.ids[8] + "y_" + i
                    ),
                    (t.className = "stream_cell_period"),
                    (t.innerHTML =
                      '<div id="' +
                      this.ids[0] +
                      "y_" +
                      i +
                      '" class="stream_thumbnail_channel_vod" ><div id="' +
                      this.ids[3] +
                      "y_" +
                      i +
                      '" class="stream_channel_follow_game">' +
                      e +
                      "</div></div>"),
                    this.row.appendChild(t);
                document.getElementById(this.table).appendChild(this.row);
              },
              lastselectedChannel: "",
              label_init: function () {
                !x.Search_isSearching && x.Main_selectedChannel_id && Gc(),
                  x.Main_selectedChannel !== this.lastselectedChannel &&
                    ((this.OffSetPos = 0),
                    (this.extraoffset = 0),
                    (this.status = !1)),
                  (this.lastselectedChannel = x.Main_selectedChannel),
                  Ff(),
                  _("label_side_panel"),
                  this.SetPeriod();
              },
              SetPeriod: function () {
                sh("UserVod_periodPos", this.periodPos),
                  Ox(
                    x.Main_selectedChannelDisplayname,
                    (this.highlight ? le : ce) +
                      (1 === this.periodPos ? pn : gn) +
                      ", Offset " +
                      M.extraoffset
                  );
              },
              label_exit: function () {
                Tf();
              },
            },
            Cx
          )),
          ((tx = B(tx, Sx)).addCell = function (e) {
            var t = e.preview.template;
            this.row_id ||
              -1 === (t + "").indexOf("404_processing") ||
              (t = null !== bc ? bc : this.img_404),
              this.addCellBase(e, t);
          }),
          (ex = B(
            {
              periodMaxPos: 2,
              HeaderQuatity: 3,
              object: "videos",
              key_pgDown: em,
              key_pgUp: Z_,
              ids: Ky("UserVod"),
              table: "stream_table_user_vod",
              screen: $_,
              time: ["time", "views"],
              highlightSTR: "UserVod_highlight",
              highlight: uh("UserVod_highlight", !1),
              periodPos: ch("UserVod_periodPos", 1),
              base_url: Bm + "videos/followed?limit=" + sx,
              set_url: function () {
                (this.token = Vm + v[0].access_token),
                  (this.url =
                    this.base_url +
                    "&broadcast_type=" +
                    (this.highlight ? "highlight" : "archive") +
                    "&sort=" +
                    this.time[this.periodPos - 1] +
                    "&offset=" +
                    this.offset);
              },
              key_play: function () {
                -1 === this.posY
                  ? 0 === this.posX
                    ? ((this.highlight = !this.highlight),
                      this.SetPeriod(),
                      $y(),
                      sh(this.highlightSTR, this.highlight ? "true" : "false"))
                    : (this.periodPos++,
                      this.periodPos > this.periodMaxPos &&
                        (this.periodPos = 1),
                      this.SetPeriod(),
                      $y())
                  : Wf(this.posY + "_" + this.posX, this.ids, L);
              },
              SwitchesIcons: ["movie-play", "history"],
              addSwitches: function () {
                (this.TopRowCreated = !0),
                  (this.row = document.createElement("div"));
                for (
                  var e, t, n = [g + g + H, g + g + yn], i = 0;
                  i < n.length;
                  i++
                )
                  (e =
                    '<i class="icon-' +
                    this.SwitchesIcons[i] +
                    ' stream_channel_follow_icon"></i>' +
                    n[i]),
                    (t = document.createElement("div")).setAttribute(
                      "id",
                      this.ids[8] + "y_" + i
                    ),
                    (t.className = "stream_cell_period"),
                    (t.innerHTML =
                      '<div id="' +
                      this.ids[0] +
                      "y_" +
                      i +
                      '" class="stream_thumbnail_channel_vod" ><div id="' +
                      this.ids[3] +
                      "y_" +
                      i +
                      '" class="stream_channel_follow_game">' +
                      e +
                      "</div></div>"),
                    this.row.appendChild(t);
                document.getElementById(this.table).appendChild(this.row);
              },
              label_init: function () {
                this.SetPeriod(), s7(this.screen);
              },
              SetPeriod: function () {
                sh("UserVod_periodPos", this.periodPos),
                  Ox(
                    q,
                    (this.highlight ? le : ce) +
                      (1 === this.periodPos ? pn : gn)
                  );
              },
            },
            Cx
          )),
          (ex = B(ex, Sx)),
          (ix = B(
            {
              HeaderQuatity: 2,
              ids: Ky("UserChannels"),
              table: "stream_table_user_channels",
              screen: em,
              object: "follows",
              key_pgDown: W_,
              key_pgUp: $_,
              key_pgUpNext: Z_,
              base_url: Bm + "users/",
              set_url: function () {
                this.offset &&
                  this.offset + sx > this.MaxOffset &&
                  (this.dataEnded = !0),
                  (this.url =
                    this.base_url +
                    encodeURIComponent(v[0].id) +
                    "/follows/channels?limit=" +
                    sx +
                    "&offset=" +
                    this.offset +
                    "&sortby=login&direction=asc");
              },
              label_init: function () {
                Lx(), Ox(q, Ae);
              },
              key_play: function () {
                Qf(this.posY + "_" + this.posX, this.ids[0]) ||
                  ((x.Main_selectedChannel = JSON.parse(
                    document
                      .getElementById(this.ids[8] + this.posY + "_" + this.posX)
                      .getAttribute(Um)
                  )),
                  (x.Main_selectedChannel_id = x.Main_selectedChannel[1]),
                  (x.Main_selectedChannelDisplayname =
                    x.Main_selectedChannel[3]),
                  (x.Main_selectedChannelLogo = x.Main_selectedChannel[2]),
                  (x.Main_selectedChannel = x.Main_selectedChannel[0]),
                  document.body.removeEventListener("keydown", L),
                  (x.Main_BeforeChannel = em),
                  (x.Main_Go = om),
                  (x.Main_BeforeChannelisSet = !0),
                  (_c = La = !0),
                  Zy(),
                  If());
              },
              addCell: function (e) {
                (e = e.channel), this.addCellTemp(e);
              },
            },
            Cx
          )),
          ((ix = B(ix, jx)).addrow = mw),
          (ix.visiblerows = 5),
          (ox = B(
            {
              ids: Ky("SearchGames"),
              table: "stream_table_search_game",
              screen: tm,
              isLive: !1,
              OldUserName: "",
              object: "games",
              lastData: "",
              base_url: Bm + "search/games?query=",
              set_url: function () {
                (this.dataEnded = !0),
                  (this.url =
                    this.base_url + encodeURIComponent(x.Search_data));
              },
              label_init: function () {
                x.gameSelectedOld || (x.gameSelectedOld = x.Main_gameSelected),
                  (x.Search_isSearching = !0),
                  Ff(),
                  this.lastData !== x.Search_data && (this.status = !1),
                  (this.lastData = x.Search_data),
                  s7(this.screen),
                  Ox(D + g + Q, "'" + x.Search_data + "'");
              },
              label_exit: function () {
                (x.Main_gameSelected = x.gameSelectedOld),
                  x.Search_isSearching || Tf(),
                  (x.Games_return = !1);
              },
            },
            Cx
          )),
          ((ox = B(ox, Ix)).ItemsLimit = 100),
          (dx = B(
            {
              HeaderQuatity: 2,
              ids: Ky("SearchLive"),
              table: "stream_table_search_live",
              screen: nm,
              object: "streams",
              base_url: Bm + "search/streams?limit=" + sx + "&query=",
              set_url: function () {
                this.check_offset(),
                  (this.url =
                    this.base_url +
                    encodeURIComponent(x.Search_data) +
                    "&offset=" +
                    this.offset);
              },
              label_init: function () {
                (x.Search_isSearching = !0),
                  Ff(),
                  this.lastData !== x.Search_data && (this.status = !1),
                  (this.lastData = x.Search_data),
                  s7(this.screen),
                  Ox(D + g + X, "'" + x.Search_data + "'");
              },
              label_exit: function () {
                (x.Search_isSearching = !1), x.Search_isSearching || Tf();
              },
              key_play: function () {
                Jf(this.posY + "_" + this.posX, this.ids, L);
              },
            },
            Cx
          )),
          (dx = B(dx, Ex)),
          (ax = B(
            {
              HeaderQuatity: 2,
              ids: Ky("SearchChannels"),
              table: "stream_table_search_channel",
              screen: im,
              object: "channels",
              base_url: Bm + "search/channels?limit=" + sx + "&query=",
              set_url: function () {
                this.offset &&
                  this.offset + sx > this.MaxOffset &&
                  (this.dataEnded = !0),
                  (this.url =
                    this.base_url +
                    encodeURIComponent(x.Search_data) +
                    "&offset=" +
                    this.offset);
              },
              label_init: function () {
                (x.Search_isSearching = !0),
                  Ff(),
                  this.lastData !== x.Search_data && (this.status = !1),
                  (this.lastData = x.Search_data),
                  s7(this.screen),
                  Ox(D + g + ne, "'" + x.Search_data + "'");
              },
              label_exit: function () {
                x.Search_isSearching || Tf();
              },
              key_play: function () {
                Qf(this.posY + "_" + this.posX, this.ids[0]) ||
                  ((x.Main_selectedChannel = JSON.parse(
                    document
                      .getElementById(this.ids[8] + this.posY + "_" + this.posX)
                      .getAttribute(Um)
                  )),
                  (x.Main_selectedChannel_id = x.Main_selectedChannel[1]),
                  (x.Main_selectedChannelDisplayname =
                    x.Main_selectedChannel[3]),
                  (x.Main_selectedChannelLogo = x.Main_selectedChannel[2]),
                  (x.Main_selectedChannel = x.Main_selectedChannel[0]),
                  document.body.removeEventListener("keydown", L),
                  (x.Main_BeforeChannel = im),
                  (x.Main_Go = om),
                  (x.Main_BeforeChannelisSet = !0),
                  (_c = La = !1),
                  Zy(),
                  If());
              },
              addCell: function (e) {
                this.addCellTemp(e);
              },
            },
            Cx
          )),
          ((ax = B(ax, jx)).addrow = mw),
          (ax.visiblerows = 5),
          (document.getElementById("side_panel").style.marginLeft = ""),
          (document.getElementById("user_feed_notify").style.marginTop = ""),
          Uf(),
          f("play_dialog_exit_text", fe),
          f("side_panel_feed_settings", Zn),
          f("side_panel_feed_refresh", F),
          f("user_feed_notify_main", Ei),
          f("chanel_button", ne),
          f("game_button", Q),
          f("live_button", X),
          f("exit_app_cancel", ye),
          f("exit_app_close", ge),
          f("remove_cancel", ye),
          f("remove_yes", Ft),
          f("exit_app_minimize", ve),
          f("main_dialog_exit_text", he),
          m("dialog_controls_text", zd),
          f("side_panel_warn_text", se + xe),
          f("side_panel_movel_top_text", ei),
          f("dialog_period_text", z),
          m("dialog_period_1", xm[0]),
          m("dialog_period_2", xm[1]),
          m("dialog_period_3", xm[2]),
          m("dialog_period_4", xm[3]),
          m("main_dialog_user_first", Ie),
          m("main_dialog_user_remove", Ce),
          m("dialog_OffSet_text", Ti + h),
          f("dialog_OffSet_text_summary", Fi),
          f("dialog_vod_text", _n),
          m("dialog_vod_start_text", fn),
          m(
            "channel_content_titley_0",
            '<i class="icon-movie-play stream_channel_follow_icon"></i>' +
              g +
              g +
              zt
          ),
          m(
            "channel_content_titley_1",
            '<i class="icon-movie stream_channel_follow_icon"></i>' + g + g + ue
          ),
          m(
            "channel_content_titley_2",
            '<i class="icon-heart-o" style="color: #FFFFFF; font-size: 100%; "></i>' +
              g +
              g +
              kt
          ),
          f("chat_send_button0", yd),
          f("chat_send_button1", jo),
          f("chat_send_button2", qo),
          f("chat_send_button3", Bo),
          f("chat_send_button4", Oo),
          f("chat_send_button5", To),
          f("chat_send_button6", Ro),
          f("chat_send_button7", Do),
          f("chat_send_button8", Mo),
          f("chat_send_button9", Lo),
          f("chat_send_button10", Vo),
          f("chat_send_button11", Fo),
          f("chat_result", Uo),
          (Hl.emote_sorting = {}),
          (Hl.emote_sorting.defaultValue = ch("emote_sorting", 0)),
          (Hl.force_show_chat_write = {}),
          (Hl.force_show_chat_write.defaultValue = ch(
            "force_show_chat_write",
            1
          )),
          (I[Y0] = {
            icons: "search",
            string: D,
            values: null,
            defaultValue: null,
            opacity: 0,
            enterKey: function (e) {
              d0(),
                1 === (e = e)
                  ? (l0(), N2(!0))
                  : 2 === e
                  ? xy()
                  : 3 === e && Gp(),
                jy((x.Play_WasPlaying = 0), 0),
                _("scene1"),
                b("scene2"),
                nh(),
                Bf();
            },
          }),
          (I[K0] = {
            icons: "filmstrip",
            string: Ot,
            values: "",
            defaultValue: null,
            opacity: 0,
            enterKey: function (e) {
              d0(), I0(e);
            },
            setLable: function (e) {
              m(
                "extra_button_" + this.position,
                '<div style="max-width: 27%; text-overflow: ellipsis; overflow: hidden; transform: translate(135.5%, 0);">' +
                  e +
                  "</div>"
              );
            },
          }),
          (I[W0] = {
            icons: "gamepad",
            string: Tt,
            values: "",
            defaultValue: null,
            opacity: 0,
            enterKey: function (e) {
              d0(), j0(e);
            },
            setLable: function (e) {
              m(
                "extra_button_" + this.position,
                '<div style="max-width: 40%; text-overflow: ellipsis; overflow: hidden; transform: translate(75%, 0);">' +
                  e +
                  "</div>"
              );
            },
          }),
          (I[Z0] = {
            icons: "movie-play",
            string: Wt,
            values: "",
            defaultValue: null,
            opacity: 0,
            enterKey: function () {
              d0(), eg();
            },
            setLable: function (e) {
              m(
                "extra_button_" + this.position,
                '<div style="max-width: 60%; text-overflow: ellipsis; overflow: hidden; transform: translate(33%, 0);">' +
                  e +
                  "</div>"
              );
            },
          }),
          (I[$0] = {
            icons: "heart-o",
            string: kt,
            values: "",
            defaultValue: null,
            opacity: 0,
            enterKey: function (e) {
              (Va =
                1 === e
                  ? x.Play_selectedChannel_id
                  : x.Main_selectedChannel_id),
                Y2(Bt),
                (mv = !0),
                window.setTimeout(function () {
                  K2(), (mv = !1);
                }, 2e3),
                p1(e);
            },
            setLable: function (e, t) {
              f("extra_button_text" + this.position, e),
                this.setIcon(t),
                f("extra_button_" + this.position, t ? co : lo);
            },
            setIcon: function (e) {
              m(
                "controls_icon_" + this.position,
                '<i class="pause_button3d icon-' +
                  (e ? "heart" : "heart-o") +
                  '" style="color: #' +
                  (e ? "6441a4" : "FFFFFF") +
                  ';" ></i>'
              );
            },
          }),
          (I[e1] = {
            icons: "videocamera",
            string: ui,
            values: ["1080p60 | Source | 10.00Mbps"],
            defaultValue: 0,
            opacity: 0,
            enterKey: function (e) {
              1 === e
                ? (n0(),
                  (Eg = Xg[Qg].id),
                  (Pg = Eg),
                  (qg = Xg[Qg].url),
                  S2("stream_quality"),
                  E2())
                : 2 === e
                ? (by(),
                  (k1 = j1[M1].id),
                  (C1 = k1),
                  (I1 = j1[M1].url),
                  Py("stream_quality"),
                  gy())
                : 3 === e &&
                  (Jp(),
                  (Yh = Zh[Wh].id),
                  (Kh = Yh),
                  ($h = Zh[Wh].url),
                  Zp("stream_quality"),
                  Fp()),
                t0();
            },
            updown: function (e, t) {
              1 === t
                ? ((Qg += -1 * e) > r0() - 1
                    ? (Qg = r0() - 1)
                    : Qg < 0 && (Qg = 0),
                  M0(r0, Qg, S2))
                : 2 === t
                ? ((M1 += -1 * e) > Iy() - 1
                    ? (M1 = Iy() - 1)
                    : M1 < 0 && (M1 = 0),
                  M0(Iy, M1, Py))
                : 3 === t &&
                  ((Wh += -1 * e) > Kp() - 1
                    ? (Wh = Kp() - 1)
                    : Wh < 0 && (Wh = 0),
                  M0(Kp, Wh, Zp));
            },
          }),
          (I[t1] = {
            icons: "history",
            string: Gi,
            values: null,
            defaultValue: 0,
            opacity: 0,
            enterKey: function () {
              n0(),
                (kg = !kg),
                r && E2(),
                kg && (Y2(Ji), window.setTimeout(K2, 3e3)),
                sh("Play_LowLatency", kg),
                this.setLable();
            },
            setLable: function () {
              f("extra_button_" + this.position, "(" + (kg ? Sd : Ed) + ")");
            },
          }),
          (I[n1] = {
            icons: "chat",
            string: si,
            values: null,
            defaultValue: null,
            opacity: 0,
            enterKey: function () {
              Ig &&
                (sh(
                  "ChatEnable",
                  (Jg = u0() || P() ? (l0(), !1) : (c0(), !0))
                    ? "true"
                    : "false"
                ),
                this.setLable());
            },
            setLable: function () {
              var e = u0() ? Ft : se;
              Ig || (e = li), f("extra_button_" + this.position, "(" + e + ")");
            },
          }),
          (I[i1] = {
            ShowInLive: !0,
            ShowInVod: !0,
            ShowInClip: !0,
            ShowInPP: !0,
            ShowInMulti: !0,
            ShowInChat: !1,
            ShowInAudioPP: !1,
            ShowInAudioMulti: !1,
            ShowInPreview: !1,
            ShowInStay: !0,
            icons: "keyboard",
            string: Co,
            opacity: 0,
            values: null,
            defaultValue: null,
            enterKey: function () {
              var e;
              x.Play_ChatForceDisable
                ? w1(Gn, 1500)
                : Ws() && v[0].access_token
                ? ((e = x.Play_selectedChannelDisplayname),
                  lu[ll]
                    ? w1(ko + e, 1500)
                    : (Sh("keydown", z0),
                      Ch("keydown", wl),
                      (u.placeholder = So),
                      ml(),
                      _("chat_send"),
                      n0(),
                      ul !== e && (u.value = ""),
                      (ul = e),
                      ("" !== u.value && null !== u.value ? Tl : Fl)(),
                      Hl.force_show_chat_write.defaultValue &&
                        !u0() &&
                        I[n1].enterKey(1),
                      fl()))
                : w1(Jo, 3e3);
            },
          }),
          (I[o1] = {
            icons: Ig ? "resize-down" : "resize-up",
            string: ri,
            values: null,
            defaultValue: null,
            opacity: 0,
            enterKey: function () {
              Hv((Ig = !Ig)), this.setLable(), this.setIcon();
            },
            setLable: function () {
              f("extra_button_" + this.position, "(" + (Ig ? ci : li) + ")"),
                I[n1].setLable();
            },
            setIcon: function () {
              m(
                "controls_icon_" + this.position,
                '<i class="pause_button3d icon-' +
                  (Ig ? "resize-down" : "resize-up") +
                  '" ></i>'
              );
            },
          }),
          (I[d1] = {
            icons: "chat-pos",
            string: ai,
            values: [1, 2, 3, 4, 5, 6, 7, 8],
            defaultValue: vg,
            opacity: 0,
            isChat: !0,
            updown: function (e) {
              u0() &&
                Ig &&
                ((this.defaultValue += e),
                this.defaultValue < 0
                  ? (this.defaultValue = this.values.length - 1)
                  : this.defaultValue > this.values.length - 1 &&
                    (this.defaultValue = 0),
                (vg += e),
                h0(),
                (this.defaultValue = vg),
                this.setLable());
            },
            setLable: function () {
              f(
                "controls_name_" + this.position,
                this.values[this.defaultValue]
              );
            },
          }),
          (I[a1] = {
            icons: "chat-size",
            string: di,
            values: ["12.5%", "25%", "50%", "75%", "100%"],
            defaultValue: xg,
            opacity: 0,
            isChat: !0,
            updown: function (e) {
              if (u0() && Ig) {
                if (((this.defaultValue += e), this.defaultValue < 0))
                  this.defaultValue = 0;
                else if (this.defaultValue > this.values.length - 1)
                  return void (this.defaultValue = this.values.length - 1);
                this.bottomArrows(),
                  (xg = this.defaultValue) === Ag - 1 && -1 === e
                    ? f0(!1)
                    : xg === Ag && f0(!0),
                  _0(!0),
                  (I[d1].defaultValue = vg),
                  this.setLable();
              }
            },
            setLable: function () {
              f("controls_name_" + d1, I[d1].values[I[d1].defaultValue]);
            },
            bottomArrows: function () {
              y1(this.position);
            },
          }),
          (I[s1] = {
            icons: "chat-brig",
            string: qn,
            values: [
              "0%",
              "5%",
              "10%",
              "15%",
              "20%",
              "25%",
              "30%",
              "35%",
              "40%",
              "45%",
              "50%",
              "55%",
              "60%",
              "65%",
              "70%",
              "75%",
              "80%",
              "85%",
              "90%",
              "95%",
              "100%",
            ],
            defaultValue: x.ChatBackground,
            opacity: 0,
            isChat: !0,
            updown: function (e) {
              u0() &&
                Ig &&
                ((this.defaultValue += e),
                this.defaultValue < 0
                  ? (this.defaultValue = 0)
                  : this.defaultValue > this.values.length - 1 &&
                    (this.defaultValue = this.values.length - 1),
                (x.ChatBackground = this.defaultValue),
                (wg = (0.05 * this.defaultValue).toFixed(2)),
                m0(!1),
                this.setLable(),
                this.bottomArrows(),
                Lf());
            },
            setLable: function () {
              f(
                "controls_name_" + this.position,
                this.values[this.defaultValue]
              );
            },
            bottomArrows: function () {
              y1(this.position);
            },
          }),
          (I[c1] = {
            ShowInLive: !1,
            ShowInVod: !1,
            ShowInClip: !1,
            ShowInPP: !1,
            ShowInMulti: !1,
            ShowInChat: !0,
            ShowInAudioPP: !1,
            ShowInAudioMulti: !1,
            ShowInPreview: !1,
            ShowInStay: !1,
            icons: "chat-font",
            string: An,
            opacity: 0,
            values: Tv,
            defaultValue: x.Chat_font_size_new,
            isChat: !0,
            updown: function (e) {
              u0() &&
                ((this.defaultValue += e),
                this.defaultValue < 0
                  ? (this.defaultValue = 0)
                  : this.defaultValue > this.values.length - 1 &&
                    (this.defaultValue = this.values.length - 1),
                (x.Chat_font_size_new = this.defaultValue),
                qv(),
                this.bottomArrows(),
                this.setLable(),
                Lf());
            },
            setLable: function () {
              f(
                "controls_name_" + this.position,
                this.values[this.defaultValue] + "%"
              );
            },
            bottomArrows: function () {
              y1(this.position);
            },
          }),
          (I[l1] = {
            icons: "chat-delay",
            string: wi,
            values: [
              wn,
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9,
              10,
              11,
              12,
              13,
              14,
              15,
              20,
              25,
              30,
              45,
              60,
              90,
              120,
              150,
              180,
              240,
              300,
            ],
            defaultValue: kv,
            opacity: 0,
            isChat: !1,
            updown: function (e) {
              (this.defaultValue += e),
                this.defaultValue < 0
                  ? (this.defaultValue = 0)
                  : this.defaultValue > this.values.length - 1 &&
                    (this.defaultValue = this.values.length - 1),
                sh("Play_ChatDelayPosition", (kv = this.defaultValue)),
                this.bottomArrows(),
                this.setLable();
            },
            setLable: function () {
              var e = "";
              1 < this.defaultValue
                ? (e = Mn)
                : 0 < this.defaultValue && (e = xi),
                f(
                  "controls_name_" + this.position,
                  this.values[this.defaultValue] + e
                );
            },
            bottomArrows: function () {
              y1(this.position);
            },
          }),
          (I[u1] = {
            icons: "chat-stop",
            string: zn,
            values: null,
            defaultValue: null,
            opacity: 0,
            enterKey: function (e) {
              (x.Play_ChatForceDisable = !x.Play_ChatForceDisable),
                (1 === e ? Eu : n_)(),
                this.setLable(),
                Lf();
            },
            setLable: function () {
              f(
                "extra_button_" + this.position,
                "(" + (x.Play_ChatForceDisable ? Ft : se) + ")"
              );
            },
          });
        var i,
          o,
          d,
          a = document.getElementById("controls_holder");
        for (o in I)
          (i = document.createElement("div")).classList.add(
            "controls_button_holder"
          ),
            i.setAttribute("id", "controls_" + o),
            (i.innerHTML =
              '<div id="controls_button_' +
              o +
              '" class="controls_button"><div id="controls_icon_' +
              o +
              '"><i class="pause_button3d icon-' +
              I[o].icons +
              '" ></i></div></div><div id="controls_button_text_' +
              o +
              '" class="extra_button_text_holder" style="opacity: ' +
              I[o].opacity +
              ';"><div id="extra_button_text' +
              o +
              '" class="extra_button_text strokedeline" >' +
              I[o].string +
              '</div><div id="extra_button_' +
              o +
              '" class="extra_button_text strokedeline" >' +
              (I[o].values
                ? (function (e) {
                    return (
                      '<div id="controls_arrows_' +
                      e +
                      '" style="font-size: 50%; display: inline-block; vertical-align: middle;"><div style="display: inline-block;"><div id="control_arrow_up_' +
                      e +
                      '" class="up"></div><div id="control_arrow_down' +
                      e +
                      '" class="down"></div></div></div>&nbsp;<div id="controls_name_' +
                      e +
                      '" class="arrows_text">' +
                      I[e].values[I[e].defaultValue] +
                      "</div>"
                    );
                  })(o)
                : g) +
              "</div></div></div>"),
            a.appendChild(i),
            J0++,
            (I[o].position = o),
            I[o].bottomArrows && y1(o),
            I[o].setLable && I[o].setLable();
        if (r) {
          try {
            C.stop(),
              C.close(),
              C.open(
                "https://fgl27.github.io/smarttv-twitch/release/githubio/images/temp.mp4"
              );
          } catch (e) {
            console.log(e + " Play_SetAvPlayGlobal()");
          }
          Hv(Ig), C.setListener(Nv), C.prepareAsync();
        }
        if (
          ((Y1 = lh("PlayVod_VodIds", {})),
          250 <
            (d = (function () {
              var e,
                t = 0;
              for (e in Y1) Y1.hasOwnProperty(e) && t++;
              return t;
            })()))
        ) {
          var s = d - 250,
            c,
            l = 0;
          for (c in Y1) {
            if (!(l < s)) break;
            delete Y1[c], l++;
          }
          sh("PlayVod_VodIds", JSON.stringify(Y1));
        }
        window.clearInterval(D_),
          (D_ = window.setInterval(nh, 6e4)),
          (M = Yw),
          A(function () {
            Wy(), (Rb = document.getElementById("feed_thumb_img"));
          });
      });
  }
  function af(e, t, n) {
    m(
      e,
      '<div style="vertical-align: middle; display: inline-block;"><i class="' +
        t +
        '" style="color: #FFFFFF;"></i></div><div style="vertical-align: middle; display: inline-block;">' +
        g +
        n +
        "</div>"
    );
  }
  function b(e) {
    document.getElementById(e).classList.add("hide");
  }
  function _(e) {
    document.getElementById(e).classList.remove("hide");
  }
  function sf(e) {
    return -1 === document.getElementById(e).className.indexOf("hide");
  }
  function c(e, t) {
    document.getElementById(e).classList.add(t);
  }
  function l(e, t) {
    document.getElementById(e).classList.remove(t);
  }
  function m(e, t) {
    document.getElementById(e).innerHTML = t;
  }
  function f(e, t) {
    document.getElementById(e).textContent = t;
  }
  function cf(e) {
    var t = document.getElementById(e).getElementsByClassName("emoji");
    if (t) {
      for (var n = 0; n < t.length; n++) t[n].classList.add("emoticon");
      for (
        t = document.getElementById(e).getElementsByClassName("emoticon"),
          n = 0;
        n < t.length;
        n++
      )
        t[n].classList.remove("emoji");
    }
  }
  function lf() {
    Nf(-1), _("dialog_loading");
  }
  function uf() {
    b("dialog_loading");
  }
  function rf() {
    window.clearTimeout(vm);
  }
  function _f() {
    vm = window.setTimeout(mf, 6e3);
  }
  function mf() {
    document.body.removeEventListener("keydown", dh, !1),
      Mf(),
      rf(),
      b("main_dialog_exit"),
      (gm = 0),
      ff();
  }
  function ff() {
    l("exit_app_cancel", "button_dialog_focused"),
      l("exit_app_minimize", "button_dialog_focused"),
      l("exit_app_close", "button_dialog_focused"),
      c(
        gm
          ? 1 === gm
            ? "exit_app_minimize"
            : "exit_app_close"
          : "exit_app_cancel",
        "button_dialog_focused"
      );
  }
  function hf() {
    Rf("dialog_counter_text");
  }
  function pf(e, t, n, i) {
    0 < i ? f("dialog_counter_text", t * n + (e + 1) + "/" + i) : hf();
  }
  function gf(e) {
    m("dialog_warning_text", e), _("dialog_warning");
  }
  function vf() {
    b("dialog_warning");
  }
  function yf() {
    var e, t, n;
    m(
      "about_runningtime",
      oo +
        g +
        ((e = Date.now() - km),
        (t = (e = Math.floor(parseInt(e / 1e3) / 60)) % 60),
        (n = (e = Math.floor(e / 60)) % 24),
        ((e = Math.floor(e / 24)) ? e + "d " : "") +
          (n ? n + "h " : "") +
          t +
          "m")
    );
  }
  function wf() {
    b("dialog_about");
  }
  function xf() {
    return sf("dialog_about");
  }
  function bf() {
    Af(),
      vf(),
      Vf(x.Main_Go),
      hf(),
      document.body.addEventListener("keydown", mb, !1),
      Ox(U),
      _("settings_holder"),
      _("label_side_panel"),
      b("label_refresh"),
      tb((zx = 0)),
      Zx("content_lang", Tn, bb);
  }
  function Af() {
    b("dialog_controls");
  }
  function kf() {
    return sf("dialog_controls");
  }
  function Cf(e) {
    return (e + "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  function Sf(e, t, n) {
    return (
      (e = (e += "").indexOf("x") ? e : e.slice(-3)) +
      "p" +
      (t = 58 < t ? 60 : t < 32 ? 30 : Math.ceil(t)) +
      ("" !== n ? " [" + n.toUpperCase() + "]" : "")
    );
  }
  function Ef(e) {
    return -1 === (e + "").indexOf("live");
  }
  function Pf(e, t, n) {
    return null !== document.getElementById(n + e + "_" + t);
  }
  function If(e) {
    A(function () {
      Mf(e);
    });
  }
  var jf = {};
  function Mf(e) {
    vf(),
      x.Main_Go !== om && (x.Main_BeforeChannelisSet = !1),
      x.Main_Go !== cm && (x.Main_BeforeAgameisSet = !1),
      hf(),
      jf[x.Main_Go] ? jf[x.Main_Go]() : jf[1](),
      e &&
        (x.Main_Go === om
          ? document.body.removeEventListener("keydown", zc)
          : x.Main_Go === X_
          ? document.body.removeEventListener("keydown", KA)
          : (x.Main_Go === q_
              ? (M = Yw)
              : x.Main_Go === cm
              ? (M = Ww)
              : x.Main_Go === Q_
              ? (M = Kw)
              : x.Main_Go === J_
              ? (M = Qw)
              : x.Main_Go === am
              ? (M = qw)
              : x.Main_Go === Y_
              ? (M = Zw)
              : x.Main_Go === K_
              ? (M = zw)
              : x.Main_Go === um
              ? (M = Xw)
              : x.Main_Go === Z_
              ? (M = Jw)
              : x.Main_Go === lm
              ? (M = $w)
              : x.Main_Go === $_
              ? (M = ex)
              : x.Main_Go === dm
              ? (M = tx)
              : x.Main_Go === W_
              ? (M = nx)
              : x.Main_Go === em
              ? (M = ix)
              : x.Main_Go === tm
              ? (M = ox)
              : x.Main_Go === nm
              ? (M = dx)
              : x.Main_Go === im && (M = ax),
            document.body.removeEventListener("keydown", L)));
  }
  function Bf() {
    x.Search_isSearching || (x.Main_BeforeSearch = x.Main_Go),
      Vf(x.Main_Go),
      (x.Main_Go = z_),
      vf(),
      hf(),
      vf(),
      b("label_refresh"),
      _("label_side_panel"),
      (V_.placeholder = Z),
      _("search_scroll"),
      (Tx = Vx = 0),
      Ux(),
      Nx();
  }
  function Lf() {
    sh("Main_values", JSON.stringify(x));
  }
  (jf[X_] = wA),
    (jf[om] = function () {
      (x.Main_CenterLablesVectorPos = 1),
        (x.Main_Go = om),
        xc && !x.Search_isSearching && x.Main_selectedChannel_id && Gc(),
        hc !== x.Main_selectedChannel && (fc = !1),
        Ff(),
        document.body.addEventListener("keydown", zc, !1),
        (Oa = !1),
        m("top_lable", x.Main_selectedChannelDisplayname),
        (x.Main_BeforeChannel !== em && !x.My_channel) ||
          ((x.Sidepannel_Pos = x.My_channel ? 7 : 6), u7(), s7(x.Main_Go)),
        fc
          ? (Nf(ac),
            _(mc[10]),
            Dc(),
            l("channel_content_thumbdivy_0", "stream_switch_focused"),
            l("channel_content_thumbdivy_1", "stream_switch_focused"),
            l("channel_content_thumbdivy_2", "stream_switch_focused"),
            Uc(),
            Lf())
          : Sc();
    }),
    (jf[im] = function () {
      (M = ax), Wy();
    }),
    (jf[nm] = function () {
      (M = dx), Wy();
    }),
    (jf[tm] = function () {
      (M = ox), Wy();
    }),
    (jf[em] = function () {
      (M = ix), Wy();
    }),
    (jf[W_] = function () {
      (M = nx), Wy();
    }),
    (jf[Z_] = function () {
      (M = Jw), Wy();
    }),
    (jf[dm] = function () {
      (M = tx), Wy();
    }),
    (jf[$_] = function () {
      (M = ex), Wy();
    }),
    (jf[q_] = function () {
      (M = Yw), Wy();
    }),
    (jf[Q_] = function () {
      (M = Kw), Wy();
    }),
    (jf[um] = function () {
      (M = Xw), Wy();
    }),
    (jf[lm] = function () {
      (M = $w), Wy();
    }),
    (jf[K_] = function () {
      (M = zw), Wy();
    }),
    (jf[Y_] = function () {
      (M = Zw), Wy();
    }),
    (jf[am] = function () {
      (M = qw), Wy();
    }),
    (jf[cm] = function () {
      (M = Ww), Wy();
    }),
    (jf[J_] = function () {
      (M = Qw), Wy();
    });
  var Of = {};
  function Vf(e) {
    Of[e] && Of[e](), sf("settings_holder") && Jx();
  }
  function Tf() {
    af("label_refresh", "icon-refresh", F + ":" + Rt), b("label_side_panel");
  }
  function Ff() {
    _("label_side_panel");
  }
  function Df(e) {
    return (
      (e = new Date(e)),
      ym
        ? e.getDate() + " " + Nt[e.getMonth()] + " " + e.getFullYear()
        : Nt[e.getMonth()] + " " + e.getDate() + " " + e.getFullYear()
    );
  }
  function Uf() {
    if (r) {
      var e,
        t = null,
        n = null,
        i = null;
      try {
        (t = tizen.application.getAppInfo().version),
          (n = tizen.systeminfo.getCapability(
            "http://tizen.org/feature/platform.version"
          )),
          (i = webapis.productinfo.getFirmware()),
          (e = webapis.productinfo.getModel()),
          console.log("App version: " + Nm);
      } catch (e) {}
      null !== t &&
        null !== n &&
        null !== e &&
        null !== i &&
        ((Gm =
          "APP " +
          Fe +
          t +
          "." +
          Nm +
          (d
            ? ""
            : '<div style="display: inline-block; color: #FF0000; font-size: 110%; font-weight: bold;"> TEST ONLY</div><br><div style="display: inline-block; color: #FF0000; font-size: 110%; font-weight: bold;">Don\'t use this version unless you are testing or debugging... Go back to github and download the correct release zip that is only 12kb</div>') +
          h +
          "Tizen " +
          Fe +
          n +
          g +
          g +
          "|" +
          g +
          g +
          "TV: " +
          e +
          g +
          g +
          "|" +
          g +
          g +
          "FW: " +
          i +
          h),
        (t = t.split(".")),
        (t = parseInt(t[0] + t[1] + t[2])),
        m(
          "dialog_about_text",
          qd + Gm + '<div id="about_runningtime"></div>' + Xd
        ),
        d || console.log("Tizen " + Fe + n + " | TV: " + e + " | FW: " + i),
        t < Rm && _("label_update"));
    }
    km = Date.now();
  }
  function Rf(e) {
    for (e = document.getElementById(e); e.firstChild; )
      e.removeChild(e.firstChild);
  }
  function Nf(e) {
    H_ = e;
  }
  function Gf(e) {
    var t = 0;
    return H_ < e ? (t = -1) : e < H_ && (t = 1), (H_ = e), t;
  }
  function Hf() {
    hm = !0;
  }
  function zf() {
    fm = !0;
  }
  function qf() {
    (fm = !1), window.setTimeout(zf);
  }
  function Xf() {
    return !fm || !hm;
  }
  function Qf(e, t) {
    return null === document.getElementById(t + e);
  }
  function Jf(e, t, n) {
    Qf(e, t[0]) ||
      (document.body.removeEventListener("keydown", n),
      (x.Play_selectedChannel = JSON.parse(
        document.getElementById(t[8] + e).getAttribute(Um)
      )),
      (x.Play_selectedChannel_id = x.Play_selectedChannel[1]),
      (x.IsRerun = x.Play_selectedChannel[2]),
      (x.Play_gameSelected_id = x.Play_selectedChannel[3]),
      (x.Play_selectedChannel = x.Play_selectedChannel[0]),
      x.Play_isHost
        ? ((x.Play_DisplaynameHost = document.getElementById(
            t[3] + e
          ).textContent),
          (x.Play_selectedChannelDisplayname =
            x.Play_DisplaynameHost.split(Ee)[1]))
        : (x.Play_selectedChannelDisplayname = document.getElementById(
            t[3] + e
          ).textContent),
      (n = document.getElementById(t[5] + e).textContent),
      (x.Play_gameSelected = -1 !== n.indexOf(J) ? n.split(J)[1] : ""),
      x.Main_Go === cm && (x.Main_OldgameSelected = x.Main_gameSelected),
      Yf());
  }
  function Yf() {
    document.body.removeEventListener("keydown", z0),
      document.body.addEventListener("keydown", z0, !1),
      b("scene1"),
      _("scene2"),
      n0(),
      Tg || x0(),
      A(Xv);
  }
  function Kf(e, t, n) {
    Qf(e, t[0]) ||
      (document.body.removeEventListener("keydown", n),
      (rx = JSON.parse(document.getElementById(t[8] + e).getAttribute(Um))),
      (rp = parseInt(rx[1])),
      (x.Play_gameSelected = rx[2]),
      (x.Main_selectedChannel = rx[3]),
      (x.Main_selectedChannelDisplayname = rx[4]),
      (x.Main_selectedChannelLogo = rx[5]),
      (x.Main_selectedChannel_id = rx[6]),
      (x.ChannelVod_vodId = rx[7]),
      (hx = parseInt(rx[8])),
      (x.Play_gameSelected_id = null),
      (ux = rx[9]),
      (fx = rx[10]),
      (cx = "" !== rx[2] ? J + rx[2] : ""),
      (mx = rx[11]),
      (lx = rx[12]),
      (_x = rx[13].split("-preview")[0] + ".mp4"),
      (rx = rx[0]),
      document.body.addEventListener("keydown", ng, !1),
      b("scene1"),
      _("scene2"),
      l0(),
      t0(),
      K2(),
      $2(),
      A(wp));
  }
  function Wf(e, t, n) {
    Qf(e, t[0]) ||
      (document.body.removeEventListener("keydown", n),
      (x.ChannelVod_vodId = JSON.parse(
        document.getElementById(t[8] + e).getAttribute(Um)
      )),
      (px = parseInt(x.ChannelVod_vodId[6])),
      F2(px),
      (gx = x.ChannelVod_vodId[9]),
      (x.Play_gameSelected = x.ChannelVod_vodId[10]),
      null === x.Play_gameSelected && (x.Play_gameSelected = ""),
      (x.Main_selectedChannelDisplayname = x.ChannelVod_vodId[1]),
      (vx = x.ChannelVod_vodId[2]),
      (wx = x.ChannelVod_vodId[3]),
      (xx =
        "" !== x.Play_gameSelected && null !== x.Play_gameSelected
          ? Ht + J + x.Play_gameSelected
          : ""),
      (yx = x.ChannelVod_vodId[4]),
      (x.Play_gameSelected_id = null),
      (x.Main_selectedChannel_id = x.ChannelVod_vodId[13]),
      (x.Main_selectedChannelLogo = x.ChannelVod_vodId[14]),
      (x.Main_selectedChannelPartner = x.ChannelVod_vodId[15]),
      (x.Main_selectedChannel = x.ChannelVod_vodId[11]),
      x.ChannelVod_vodId[12],
      (x.ChannelVod_vodId = x.ChannelVod_vodId[8].substr(1)),
      Zf());
  }
  function Zf() {
    document.body.addEventListener("keydown", Gy, !1),
      b("scene1"),
      _("scene2"),
      by(),
      l0(),
      t0(),
      $2(),
      A(oy);
  }
  function $f(e, t) {
    (hm = !1), l(t[0] + e, Dm);
  }
  function A(e) {
    "complete" === document.readyState ||
    ("loading" !== document.readyState && !document.documentElement.doScroll)
      ? window.setTimeout(e)
      : document.addEventListener("DOMContentLoaded", e);
  }
  (Of[X_] = xA),
    (Of[om] = Cc),
    (Of[im] = Zy),
    (Of[nm] = Zy),
    (Of[tm] = Zy),
    (Of[em] = Zy),
    (Of[W_] = Zy),
    (Of[Z_] = Zy),
    (Of[dm] = Zy),
    (Of[$_] = Zy),
    (Of[q_] = Zy),
    (Of[Q_] = Zy),
    (Of[um] = Zy),
    (Of[lm] = Zy),
    (Of[K_] = Zy),
    (Of[Y_] = Zy),
    (Of[am] = Zy),
    (Of[cm] = Zy),
    (Of[J_] = Zy);
  var eh = "";
  function th() {
    var e = new Date().getTime() + Hm,
      e = new Date(e);
    return (
      (ym
        ? Gt[e.getDay()] + " " + e.getDate() + " " + Nt[e.getMonth()]
        : Gt[e.getDay()] + " " + Nt[e.getMonth()] + " " + e.getDate()) +
      " " +
      (eh = T2(e.getHours()) + ":" + T2(e.getMinutes()))
    );
  }
  function nh() {
    document.hidden ||
      (f("label_clock", th()), km && yf(), (zm = "?" + Math.random()));
  }
  function ih() {
    return parseInt(1e9 * Math.random());
  }
  function oh() {
    Ws() &&
      window.setTimeout(function () {
        document.hidden || W7() || Kb() || g7 || ((Mg = v[0].name), F7());
      }, 15e3);
  }
  function dh(e) {
    switch (e.keyCode) {
      case ya:
      case ba:
      case a:
        mf();
        break;
      case _a:
        2 < ++gm && (gm = 0), ff(), rf(), _f();
        break;
      case ua:
        --gm < 0 && (gm = 2), ff(), rf(), _f();
        break;
      case fa:
        r && gm
          ? 1 === gm
            ? (mf(), tizen.application.getCurrentApplication().hide())
            : 2 === gm && tizen.application.getCurrentApplication().exit()
          : mf();
    }
  }
  function ah() {
    (kc = qy = !0),
      x.Main_Go !== om && (x.Main_BeforeChannelisSet = !1),
      x.Main_Go !== cm && (x.Main_BeforeAgameisSet = !1),
      hf(),
      x.Main_Go === om
        ? Sc()
        : x.Main_Go === X_
        ? bA()
        : (x.Main_Go === q_
            ? (M = Yw)
            : x.Main_Go === Q_
            ? (M = Kw)
            : x.Main_Go === Z_
            ? (M = Jw)
            : x.Main_Go === cm
            ? (M = Ww)
            : x.Main_Go === J_
            ? (M = Qw)
            : x.Main_Go === Y_
            ? (M = Zw)
            : x.Main_Go === K_
            ? (M = zw)
            : x.Main_Go === um
            ? (M = Xw)
            : x.Main_Go === am
            ? (M = qw)
            : x.Main_Go === lm
            ? (M = $w)
            : x.Main_Go === $_
            ? (M = ex)
            : x.Main_Go === dm
            ? (M = tx)
            : x.Main_Go === W_
            ? (M = nx)
            : x.Main_Go === em
            ? (M = ix)
            : x.Main_Go === tm
            ? (M = ox)
            : x.Main_Go === nm
            ? (M = dx)
            : x.Main_Go === im && (M = ax),
          $y());
  }
  function sh(e, t) {
    $m || localStorage.setItem(e, t);
  }
  function ch(e, t) {
    return (e = parseInt(localStorage.getItem(e))) || 0 === e ? e : t;
  }
  function lh(e, t) {
    return JSON.parse(localStorage.getItem(e)) || t;
  }
  function uh(e, t) {
    var n = t.toString();
    return (localStorage.getItem(e) || n) === n ? t : !t;
  }
  function rh(e) {
    console.log(e);
    for (var t = 0; t < e.length; t++)
      console.log(
        "Character is: " +
          e.charAt(t) +
          " it's Unicode is: \\u" +
          e.charCodeAt(t).toString(16).toUpperCase()
      );
  }
  function _h(e, t, n, i, o, d, a, s, c, l) {
    var u = new XMLHttpRequest(),
      r = (u.open("GET", e, !0), (u.timeout = t), 0),
      _ = !1,
      m = !1;
    if (c)
      if (!l && Ws() && v[0].access_token)
        for (_ = !0, Qm[1][1] = Xm + v[0].access_token; r < Qm.length; r++)
          u.setRequestHeader(Qm[r][0], Qm[r][1]);
      else
        for (m = !0; r < Jm.length; r++) u.setRequestHeader(Jm[r][0], Jm[r][1]);
    else for (_m[2][1] = i; r < n; r++) u.setRequestHeader(_m[r][0], _m[r][1]);
    (u.ontimeout = function () {}),
      (u.onreadystatechange = function () {
        var e;
        4 === u.readyState &&
          (200 === u.status
            ? o(u.responseText, a, s)
            : !(2 < n || c) || (401 !== u.status && 403 !== u.status)
            ? d(a, s)
            : ((e = function () {
                d(a, s);
              }),
              _ ? qa(0, 0, e, e) : m ? za(0, e, e) : d(a, s)));
      }),
      u.send(null);
  }
  var mh =
    '{"operationName":"UseHosting","variables":{"channelLogin":"%x"},"extensions":{"persistedQuery":{"version": 1,"sha256Hash":"427f55a3daca510f726c02695a898ef3a0de4355b39af328848876052ea6b337"}}}';
  function fh(e, t, n) {
    var i = new XMLHttpRequest();
    i.open("POST", jp, !0),
      (i.timeout = 25e3),
      i.setRequestHeader(Mm, mm[0][1]),
      i.setRequestHeader("Content-Type", "application/json"),
      (i.ontimeout = function () {}),
      (i.onreadystatechange = function () {
        4 === this.readyState && e(this, t);
      }),
      i.send(mh.replace("%x", n));
  }
  var hh = ["384x216", "512x288", "640x360", "896x504", "1280x720"],
    ph = ["179x250", "272x380", "340x475", "476x665", "773x1080"],
    gh = ["640x360", "896x504", "1280x720", "1536x864", "1920x1080"],
    vh = "1280x720",
    yh = "640x360",
    wh = "340x475";
  function xh() {
    (yh = hh[O.thumb_quality.defaultValue]),
      (wh = ph[O.thumb_quality.defaultValue]),
      (vh = gh[O.thumb_quality.defaultValue]);
  }
  function bh(e) {
    return e.replace(/[^\x00-\x7F]/g, function (e) {
      return '<span style="font-size: 0.8em;">' + e + "</span>";
    });
  }
  function Ah(e, t) {
    return !!e && -1 !== e.indexOf(t);
  }
  var kh = document.body;
  function Ch(e, t) {
    Sh(e, t), kh.addEventListener(e, t);
  }
  function Sh(e, t) {
    kh.removeEventListener(e, t);
  }
  function k(e) {
    return document.getElementById(e);
  }
  function Eh(e, t, n) {
    return Ph(n), t && 0 < t ? window.setTimeout(e, t) : window.setTimeout(e);
  }
  function Ph(e) {
    window.clearTimeout(e);
  }
  function Ih(e) {
    var t;
    G_ &&
      ((e =
        e +
        " " +
        ((t = new Date()).toLocaleTimeString([], { hour12: !1 }) +
          "." +
          t.getMilliseconds())),
      console.log(e));
  }
  function jh(e, t) {
    e.classList.add(t);
  }
  function Mh(e, t) {
    e.classList.remove(t);
  }
  function Bh(e) {
    for (; e.firstChild; ) e.removeChild(e.firstChild);
  }
  var Lh = 25e3,
    Oh = 5e3,
    Vh = 2;
  function Th(e, t, n) {
    if ((Fh(n), t && 0 < t)) return window.setInterval(e, t);
  }
  function Fh(e) {
    window.clearInterval(e);
  }
  function Dh(e, t) {
    return e && !e.indexOf(t);
  }
  function Uh(e) {
    e.stopPropagation(), Rh();
  }
  function Rh() {
    b("dialog_warning_extra"),
      window.removeEventListener("keydown", Uh, !0),
      window.removeEventListener("keyup", Uh, !0),
      window.removeEventListener("keypress", Uh, !0);
  }
  var Nh = 0,
    Gh = null,
    Hh = 0,
    zh = !1,
    qh = !1,
    Xh = 0,
    Qh = 2e3,
    Jh = 3,
    Yh = "source",
    Kh = Yh,
    Wh = 0,
    Zh = [],
    $h = "",
    ep = 0,
    tp = 0,
    np = 0,
    ip = 1,
    op = !1,
    dp = 0,
    ap = !1,
    sp = !1,
    cp = 2e3,
    lp = !1,
    up = [0, 5],
    rp = 0,
    _p = !1,
    mp = !1,
    fp = ["next_button", "back_button"],
    hp = 0,
    pp = !1,
    gp = !0,
    vp = 0,
    yp = !1;
  function wp() {
    var e, t, n;
    X2(),
      x0(),
      (op = null !== x.ChannelVod_vodId),
      (Jr = Lt + "."),
      op ? ((Qr = hx), n_()) : (E_(), L_($t + h + en)),
      f2(
        document.getElementById("stream_info_icon"),
        x.Main_selectedChannelLogo
      ),
      f("stream_info_name", x.Main_selectedChannelDisplayname),
      m("stream_info_title", ux),
      m("stream_info_game", cx),
      m("stream_live_time", mx + "," + g + lx),
      f("stream_live_viewers", ""),
      f("stream_watching_time", ""),
      f("progress_bar_duration", F2(rp)),
      Ly((Mv = up)[1]),
      cf("stream_info_title"),
      (x.Play_isHost = !1),
      (document.getElementById("controls_" + Z0).style.display = op
        ? "inline-block"
        : "none"),
      (document.getElementById("controls_" + l1).style.display = "none"),
      (document.getElementById("controls_" + t1).style.display = "none"),
      (document.getElementById("controls_" + i1).style.display = "none"),
      y0(),
      f("progress_bar_current_time", F2(0)),
      m(
        "pause_button",
        '<div ><i class="pause_button3d icon-pause"></i> </div>'
      ),
      _("progress_bar_div"),
      _("controls_holder"),
      (Hh = dp = tp = 0),
      window.clearInterval(Gh),
      (sp = !1),
      (ep = np = 0),
      (P7 = !(Wh = 2)),
      (t = Hp(1, 0)),
      (n = Hp(-1, M.ColoumnsCount - 1)),
      (mp = _p = !1),
      t
        ? ((_p = !0),
          f(
            "next_button_text_name",
            (e = JSON.parse(
              document.getElementById(M.ids[8] + t).getAttribute(Um)
            ))[4]
          ),
          m("next_button_text_title", e[9]),
          f("end_next_button_text_name", e[4]),
          m("end_next_button_text_title", e[9]),
          zp(0, 1))
        : zp(0, 0),
      n
        ? ((mp = !0),
          f(
            "back_button_text_name",
            (e = JSON.parse(
              document.getElementById(M.ids[8] + n).getAttribute(Um)
            ))[4]
          ),
          m("back_button_text_title", e[9]),
          zp(1, 1))
        : zp(1, 0),
      E0(3),
      (mv = !1),
      Ws() ? ((Oa = !0), (Va = x.Main_selectedChannel_id), is()) : q2(),
      document.addEventListener("visibilitychange", Dp, !1),
      (zh = !0),
      (qh ? Tp : Ip)(),
      (qh = !1),
      document.body.removeEventListener("keyup", Hf),
      (vp = 0),
      Sp(),
      (T1 = 0),
      op
        ? Ap()
        : (f("end_vod_name_text", ""),
          m("end_vod_title_text", ""),
          I[Z0].setLable("")),
      I[K0].setLable(x.Main_selectedChannelDisplayname),
      I[W0].setLable(x.Play_gameSelected),
      !x.Play_gameSelected_id && x.Play_gameSelected && xp();
  }
  function xp() {
    _h(
      Lm + "games?name=" + x.Play_gameSelected,
      hv,
      2,
      null,
      bp,
      null,
      !1,
      null,
      !0
    );
  }
  function bp(e) {
    (e = JSON.parse(e)).data &&
      e.data.length &&
      (x.Play_gameSelected_id = e.data[0].id);
  }
  function Ap() {
    _h(Bm + "videos/" + x.ChannelVod_vodId + Fm, D1, 2, null, kp, Cp, !1);
  }
  function kp(e) {
    m("end_vod_title_text", (wx = f4.parse(JSON.parse(e).title, !1, !1))),
      I[Z0].setLable(wx);
  }
  function Cp() {
    ++T1 < F1 && Ap();
  }
  function Sp() {
    _h(Bm + "channels/" + x.Main_selectedChannel_id + Fm, 1e4, 2, null, Pp, Ep);
  }
  function Ep() {
    ++vp < Jh && Sp();
  }
  function Pp(e) {
    (x.Main_selectedChannelPartner = JSON.parse(e).partner),
      c2(
        x.Main_selectedChannelDisplayname,
        x.Main_selectedChannelPartner,
        !1,
        fx
      );
  }
  function Ip() {
    lp ? Lp() : ((Xh = 0), (Qh = 2e3), Bp());
  }
  var jp = "https://gql.twitch.tv/gql",
    Mp =
      '{"operationName":"VideoAccessToken_Clip","variables":{"slug":"%x"},"extensions":{"persistedQuery":{"version":1,"sha256Hash":"36b89d2507fce29e5ca551df756d27c1cfe079e2609642b4390aa4c35796eb11"}}}';
  function Bp() {
    var i = new XMLHttpRequest();
    i.open("POST", jp, !0),
      (i.timeout = Qh),
      i.setRequestHeader(Mm, mm[0][1]),
      i.setRequestHeader("Content-Type", "application/json"),
      (i.ontimeout = function () {}),
      (i.onreadystatechange = function () {
        if (4 === i.readyState)
          if (200 !== i.status)
            410 === i.status
              ? ((lp = !0),
                window.setTimeout(function () {
                  lp = !1;
                }, 36e5),
                Lp())
              : ++Xh < Jh
              ? ((Qh += 250), Bp())
              : r
              ? (Q2(), L0(3))
              : ((Zh = x2), (np = ip), Tp());
          else {
            var e,
              t = i.responseText;
            if (
              ((Zh = []),
              (t = JSON.parse(t)) &&
                t.hasOwnProperty("data") &&
                t.data.hasOwnProperty("clip"))
            ) {
              (e =
                "?sig=" +
                encodeURIComponent(t.data.clip.playbackAccessToken.signature) +
                "&token=" +
                encodeURIComponent(t.data.clip.playbackAccessToken.value)),
                (t = t.data.clip.videoQualities);
              for (var n = 0; n < t.length; n++)
                Zh.length
                  ? Zh.push({
                      id: t[n].quality + "p" + Vp(t[n].frameRate) + " | mp4",
                      url: t[n].sourceURL + e,
                    })
                  : Zh.push({
                      id:
                        t[n].quality +
                        "p" +
                        Vp(t[n].frameRate) +
                        " | source | mp4",
                      url: t[n].sourceURL + e,
                    });
            }
            (np = ip), Tp();
          }
      }),
      i.send(Mp.replace("%x", rx));
  }
  function Lp() {
    (Zh = []).push({ id: "Auto | mp4", url: _x }), (np = ip), Tp();
  }
  var Op = {
    onbufferingstart: function () {
      X2(),
        (yp = !1),
        (Pv = Bg),
        (ap = !(Hh = 0)),
        d || console.log("onbufferingstart:", "date: " + new Date());
    },
    onbufferingcomplete: function () {
      Q2(),
        (Hh = tp = 0),
        (Pv = Bg),
        (ap = yp = !0),
        d || console.log("onbufferingcomplete:", "date: " + new Date());
    },
    onbufferingprogress: function (e) {
      e < 5 && (Hh = 0),
        (Pv = Bg),
        (ap = !0),
        e < 98
          ? J2() || X2()
          : (Q2(),
            (Fv = !0),
            (tp = 0),
            d ||
              console.log("onbufferingprogress > 98:", "date: " + new Date()));
    },
    oncurrentplaytime: function (e) {
      ep !== e &&
        ((ep = e),
        op && (J1 = ep + 1e3 * hx),
        !mv && W2() && K2(),
        yp && J2() && Q2(),
        E() && !J2() && jy(ep / 1e3, rp, !X1));
    },
    onstreamcompleted: function () {
      B0(3);
    },
    onerror: function (e) {
      d || console.log("onerror:", "date: " + new Date() + " eventType: " + e),
        ("PLAYER_ERROR_CONNECTION_FAILED" !== e &&
          "PLAYER_ERROR_INVALID_URI" !== e) ||
          B0(3);
    },
  };
  function Vp(e) {
    return 40 < e ? 60 : "";
  }
  function Tp() {
    window.clearInterval(Gh), ($h = Zh[(Wh = 0)].url);
    for (var e = 0; e < Kp(); e++) {
      if (Zh[e].id === Yh) {
        $h = Zh[(Wh = e)].url;
        break;
      }
      -1 !== Zh[e].id.indexOf(Yh) && ($h = Zh[(Wh = e)].url);
    }
    (np = ip),
      (Yh = Zh[Wh].id),
      (Kh = Yh),
      Zp("stream_quality"),
      G_ && console.log("PlayClip_onPlayer:", '\n\n"' + $h + '"\n'),
      (qh = !1),
      (Lg = 0),
      Fp();
  }
  function Fp() {
    if (
      (X2(),
      d ||
        (console.log("PlayClip_onPlayer:", "date: " + new Date()),
        console.log("PlayClip_onPlayer:", '\n\n"' + $h + '"\n')),
      r)
    ) {
      try {
        C.stop(), C.close(), C.open($h);
      } catch (e) {
        console.log("PlayClip_onPlayer open " + e);
      }
      if (0 < tp && tp !== C.getCurrentTime()) {
        try {
          C.seekTo(tp - 3500);
        } catch (e) {
          console.log("PlayClip_onPlayer seekTo " + e);
        }
        t0();
      }
      C.setBufferingParam(
        "PLAYER_BUFFER_FOR_PLAY",
        "PLAYER_BUFFER_SIZE_IN_SECOND",
        cp
      ),
        C.setBufferingParam(
          "PLAYER_BUFFER_FOR_RESUME",
          "PLAYER_BUFFER_SIZE_IN_SECOND",
          cp
        ),
        Hv(Ig),
        C.setListener(Op),
        C.prepareAsync(
          function () {
            d ||
              console.log(
                "Play_avplay.prepareAsync Clip OK:",
                "date: " + new Date()
              ),
              C.play(),
              f("progress_bar_duration", F2((rp = C.getDuration() / 1e3))),
              Jg && !u0() && c0(),
              (Hh = 0),
              (Pv = 1 + 2 * cp),
              (ap = !1),
              window.clearInterval(Gh),
              (Gh = window.setInterval(Up, Iv));
          },
          function () {
            d ||
              console.log(
                "Play_avplay.prepareAsync Clip NOK:",
                "date: " + new Date()
              ),
              ++Lg < 5
                ? Fp()
                : (d ||
                    console.log(
                      "Play_avplay.prepareAsync Clip fail too mutch exit:",
                      "date: " + new Date()
                    ),
                  B2(!1, 3));
          }
        );
    }
  }
  function Dp() {
    document.hidden && Np();
  }
  function Up() {
    zh && Nh === ep && j2()
      ? ++Hh > Pv &&
        (ap && sp && Wh < Kp() - 1 ? Wh++ : !ap && sp && dp++,
        navigator.onLine
          ? 1 < dp
            ? L2(dp, 3, Rp)
            : (Wp(), (tp = tp || C.getCurrentTime()), Tp(), (sp = !0))
          : B2(!1, 3))
      : ((Hh = dp = 0), (sp = !1)),
      (Nh = ep);
  }
  function Rp(e) {
    if (!e) {
      if (!(Wh < Kp() - 1)) return void B2(!1, 3);
      Wh++;
    }
    (dp = 0), Wp(), (tp = tp || C.getCurrentTime()), Tp(), (sp = !0);
  }
  function Np() {
    zh && ((pp = !1), Gp(), $2(), H2());
  }
  function Gp() {
    r && G2(),
      Jp(),
      (Zh = []),
      window.clearInterval(Gh),
      (zh = !1),
      E_(),
      z2(),
      $7(!0),
      document.body.removeEventListener("keydown", ng),
      document.removeEventListener("visibilitychange", Dp),
      (hx = 0);
  }
  function Hp(e, t) {
    return Pf(M.posY, M.posX + e, M.ids[0])
      ? M.posY + "_" + (M.posX + e)
      : Pf(M.posY + e, t, M.ids[0])
      ? M.posY + e + "_" + t
      : null;
  }
  function zp(e, t) {
    document.getElementById(fp[e]).style.opacity = t;
  }
  function qp() {
    hp
      ? 1 === hp
        ? Xp()
        : -1 === hp && (kw(-1, M.ColoumnsCount - 1), Qp())
      : (op && !x.Play_ChatForceDisable && (O2() ? C_(y[0]) : S_()),
        P() || v0(3));
  }
  function Xp() {
    kw(1, 0), Qp();
  }
  function Qp() {
    d0(),
      A(function () {
        Gp(), Kf(M.posY + "_" + M.posX, M.ids, L);
      });
  }
  function Jp() {
    (X1 = !1),
      (q1 = Q1 = 0),
      n(),
      (Yh = Kh),
      d0(),
      jy(ep / 1e3, rp, !0),
      m("progress_bar_jump_to", g),
      (document.getElementById("progress_bar_steps").style.display = "none");
  }
  function Yp() {
    jy(ep / 1e3, rp, !0), V2(), $2(), ky();
    for (var e = (Wh = 0); e < Kp(); e++) {
      if (Zh[e].id === Yh) {
        Wh = e;
        break;
      }
      -1 !== Zh[e].id.indexOf(Yh) && (Wh = e);
    }
    Wp(), o0(), n(), $p();
  }
  function Kp() {
    return Zh.length;
  }
  function Wp() {
    1 === Kp()
      ? ((document.getElementById("control_arrow_up_" + e1).style.opacity =
          "0"),
        (document.getElementById("control_arrow_down" + e1).style.opacity =
          "0"))
      : Wh
      ? Wh === Kp() - 1
        ? ((document.getElementById("control_arrow_up_" + e1).style.opacity =
            "1"),
          (document.getElementById("control_arrow_down" + e1).style.opacity =
            "0.2"))
        : ((document.getElementById("control_arrow_up_" + e1).style.opacity =
            "1"),
          (document.getElementById("control_arrow_down" + e1).style.opacity =
            "1"))
      : ((document.getElementById("control_arrow_up_" + e1).style.opacity =
          "0.2"),
        (document.getElementById("control_arrow_down" + e1).style.opacity =
          "1")),
      Zp("controls_name_" + e1);
  }
  function Zp(e) {
    var t;
    Zh[Wh].hasOwnProperty("id") &&
      ((t = Yh = Zh[Wh].id),
      -1 !== Yh.indexOf("source") && (t = t.replace("source", Te)),
      f(e, Yh));
  }
  function $p() {
    Sg = window.setTimeout(Jp, 5e3 + W1);
  }
  function eg() {
    op
      ? ((x.vodOffset = hx),
        Gp(),
        document.body.addEventListener("keydown", Gy, !1),
        y0(),
        A(oy))
      : (n(),
        (mv = !0),
        Y2($t),
        window.setTimeout(function () {
          (mv = !1), K2();
        }, 2e3));
  }
  function tg() {
    Gp(), Jf(S, T, ng);
  }
  function ng(e) {
    if (np !== ip)
      switch (e.keyCode) {
        case ya:
        case ba:
        case a:
          e0() || bg ? ($2(), Np()) : Z2();
      }
    else
      switch (e.keyCode) {
        case ua:
          if (!W7() || (Fg && P()))
            if (E())
              n(),
                2 === j
                  ? v1(3, -1)
                  : j
                  ? 1 === j && -1 < hp && (hp--, mp || !hp ? Cy() : hp++)
                  : (Vy(-1, rp), (W1 = 2500)),
                $p();
            else {
              if (!P()) {
                Yp(), (j = 0), Cy(), n(), Vy(-1, rp), (W1 = 2500), $p();
                break;
              }
              C0(), k0(), --vv < (_p ? -1 : 0) && (vv = 3), A0();
            }
          else S && !g7 && (oA(), S--, iA());
          break;
        case _a:
          !W7() || (Fg && P())
            ? !Ig || E() || P()
              ? E()
                ? (n(),
                  2 === j
                    ? v1(3, 1)
                    : j
                    ? 1 === j && hp < 1 && (hp++, _p || !hp ? Cy() : hp--)
                    : (Vy(1, rp), (W1 = 2500)),
                  $p())
                : P()
                ? (C0(), k0(), 3 < ++vv && (vv = _p ? -1 : 0), A0())
                : Yp()
              : (Yp(), (j = 0), Cy(), n(), Vy(1, rp), (W1 = 2500), $p())
            : S < K7() - 1 && !g7 && (oA(), S++, iA());
          break;
        case ra:
          P()
            ? (C0(),
              document.body.removeEventListener("keydown", ng, !1),
              document.body.addEventListener("keyup", D0, !1),
              (Vg = !1),
              (sg = ng),
              (ag = window.setTimeout(R0, 250)))
            : E()
            ? (n(), j < 2 ? (j--, Cy()) : g1(3, 1), $p())
            : (W7() ? (W7() ? nA : Yp) : Z7)();
          break;
        case ma:
          P()
            ? N0()
            : E()
            ? (n(), j < 2 ? (j++, Cy()) : g1(3, -1), $p())
            : (W7() ? $7 : Ig && u0() ? f1 : Yp)();
          break;
        case fa:
          P()
            ? Fg
              ? S0(3)
              : ((Tg = 3), (sg = ng), G0(), Jf(S, T, z0))
            : E()
            ? (n(), j ? (1 === j ? qp() : h1(3)) : q1 && My(), $p())
            : W7()
            ? Kv(tg)
            : Yp();
          break;
        case ya:
        case ba:
        case a:
          P() && C0(),
            E() ? Jp() : W7() && !P() ? $7() : e0() || bg ? ($2(), Np()) : Z2();
          break;
        case da:
          !P() && O2() && (v0(2), x.Play_ChatForceDisable || C_(y[0]));
          break;
        case oa:
          P() || O2() || (v0(2), x.Play_ChatForceDisable || S_());
          break;
        case aa:
        case ka:
          op && !x.Play_ChatForceDisable && (O2() ? C_(y[0]) : S_()),
            P() || v0(3);
          break;
        case va:
        case ga:
          I[n1].enterKey(3);
          break;
        case pa:
          (i = d1), g1(3, 1), (i = r1);
          break;
        case ha:
          (i = d1), g1(3, -1), (i = r1);
          break;
        case ca:
          E() || (Yp(), (j = 0), Cy()), n(), Vy(-1, rp), (W1 = 2500), $p();
          break;
        case la:
          E() || (Yp(), (j = 0), Cy()), n(), Vy(1, rp), (W1 = 2500), $p();
          break;
        case sa:
          l0(), Np();
          break;
        case wa:
          d || (rh("Reloading"), window.location.reload(!0));
      }
  }
  var ig,
    og,
    dg,
    ag,
    sg,
    cg,
    lg,
    ug,
    rg,
    _g,
    mg,
    fg,
    hg,
    pg,
    gg,
    C,
    vg = 0,
    yg = vg,
    wg = 0.55,
    xg = 2,
    bg = 0,
    Ag = 4,
    kg = !1,
    Cg = !0,
    Sg = null,
    Eg = "source",
    Pg = Eg,
    Ig = !0,
    jg = !1,
    Mg = "",
    S = 0,
    Bg = 2e3,
    Lg = 0,
    Og = 2.4,
    Vg = !1,
    Tg = 0,
    Fg = !1,
    Dg = "",
    Ug = 0,
    Rg = 1,
    Ng = 2,
    Gg = 0,
    Hg = null,
    zg = 0,
    qg = "",
    Xg = [],
    Qg = 0,
    Jg = !1,
    Yg = null,
    Kg = null,
    Wg = null,
    Zg = null,
    $g = "",
    ev = 0,
    tv = 5,
    nv = 0,
    iv = 5,
    ov = 0,
    dv = !1,
    av = null,
    sv = 0,
    cv = null,
    lv = 0,
    uv = 0,
    rv = !1,
    _v = !1,
    mv = !1,
    fv = !1,
    hv = 1e4,
    pv = 2e3,
    gv = "",
    vv = 0,
    yv = 3,
    wv = 3,
    xv = null,
    bv = "",
    Av = 0,
    kv = 0,
    Cv = "",
    Sv = !0,
    Ev = !1,
    Pv = 7,
    Iv = 1e3,
    jv = 0,
    Mv = [],
    Bv = [
      { top: 51.8, left: 75.1, sizeOffset: [31, 16, 0, -25.2, 0] },
      { top: 33, left: 75.1, sizeOffset: [12.5, 0, -6.25, -19.5, 0] },
      { top: 0.2, left: 75.1, sizeOffset: [0, 0, 0, 0, 0] },
      { top: 0.2, left: 38.3, sizeOffset: [0, 0, 0, 0, 0] },
      { top: 0.2, left: 0.2, sizeOffset: [0, 0, 0, 0, 0] },
      { top: 33, left: 0.2, sizeOffset: [12.5, 0, -6.25, -19.5, 0] },
      { top: 51.8, left: 0.2, sizeOffset: [31, 16, 0, -25.2, 0] },
      { top: 51.8, left: 38.3, sizeOffset: [31, 16, 0, -25.2, 0] },
    ],
    Lv = [0, 0, 0, 1, 2, 2, 2, 1],
    Ov = [
      [0, 1, 2, 2, 2, 1, 0, 0],
      [7, 3, 3, 3, 3, 3, 7, 7],
      [6, 5, 4, 4, 4, 5, 6, 6],
    ],
    Vv = [
      { containerHeight: 17, percentage: "12.5%", dialogTop: -25 },
      { containerHeight: 32, percentage: "25%", dialogTop: -40 },
      { containerHeight: 48, percentage: "50%", dialogTop: -60 },
      { containerHeight: 73, percentage: "75%", dialogTop: -80 },
      { containerHeight: 99.6, percentage: "100%", dialogTop: -120 },
    ],
    Tv = [],
    Fv = !1,
    Dv = 0,
    Uv = 0,
    Rv = 0;
  var Nv = {
      onstreamcompleted: function () {
        try {
          C.stop(), C.close();
        } catch (e) {
          console.log(e + " PlayStart_listener");
        }
      },
    },
    Gv = !0;
  function Hv(e) {
    Gv === Ig
      ? zv(e)
      : ((Gv = Ig),
        e
          ? void 0 !== ig && ((vg = ig), (xg = dg), (Jg = og) || l0(), _0(!1))
          : ((ig = vg),
            (og = Jg),
            (dg = xg),
            (vg = 0),
            c0(),
            (xg = Ag),
            f0((Jg = !0)),
            _0(!1),
            Wr && (Wr.scrollTop = Wr.scrollHeight)),
        zv(e),
        sh("Play_isFullScreen", Ig));
  }
  function zv(e) {
    var t, n;
    dv
      ? (t = Xg[Qg].resolution.split("x"))
      : O1 && (t = j1[M1].resolution.split("x")),
      t && (n = parseInt(t[0]) / parseInt(t[1]) < 1.7);
    try {
      C.setDisplayMethod(
        n ? "PLAYER_DISPLAY_MODE_LETTER_BOX" : "PLAYER_DISPLAY_MODE_FULL_SCREEN"
      );
    } catch (e) {
      console.log("setDisplayMethod Is_4_by_3 " + n + " e " + e);
    }
    if (e)
      try {
        C.setDisplayRect(0, 0, screen.width, screen.height);
      } catch (e) {
        console.log(e + " Play_SetFullScreen true");
      }
    else
      try {
        n
          ? C.setDisplayRect(0, 0, 0.75 * screen.width, screen.height)
          : C.setDisplayRect(
              0,
              (0.25 * screen.height) / 2,
              0.75 * screen.width,
              0.75 * screen.height
            );
      } catch (e) {
        console.log(e + " Play_SetFullScreen false");
      }
  }
  function qv() {
    k("chat_inner_container").style.fontSize =
      0.76 * Tv[x.Chat_font_size_new] + "%";
  }
  function Xv() {
    X2(),
      Rf("stream_info_title"),
      (op = !(fv = !1)),
      f2(document.getElementById("stream_info_icon"), ta),
      (document.getElementById("controls_" + Z0).style.display = "none"),
      (document.getElementById("controls_" + l1).style.display = ""),
      (document.getElementById("controls_" + i1).style.display = ""),
      (document.getElementById("controls_" + t1).style.display = Cg
        ? ""
        : "none"),
      y0(),
      zp(0, 0),
      zp(1, 0),
      (x.Play_WasPlaying = 1),
      Lf(),
      (jg = x.Play_isHost),
      (x.Play_isHost = !1),
      (Ev = !1),
      _("controls_holder"),
      (Av = 0),
      f("stream_watching_time", K + F2(0)),
      f("stream_live_time", ($g = D2(0))),
      b("progress_bar_div"),
      (Rv = 0),
      Tg || (E0(1), sA()),
      (lv = uv = jv = 0),
      window.clearInterval(cv),
      (_v = !1),
      (hv = 3e3),
      (Sv = !(nv = 0)),
      (dv = !(zg = 0)),
      (Gg = Ug),
      document.addEventListener("visibilitychange", n2, !1),
      document.body.removeEventListener("keyup", Hf),
      s2(),
      h2(),
      window.clearInterval(Hg),
      (Hg = window.setInterval(r2, 6e4)),
      !x.Play_gameSelected_id && x.Play_gameSelected && xp();
  }
  var Qv = 0,
    Jv = 0,
    Yv = 0;
  function Kv(e) {
    Qf(S, T[0]) ||
      (X2(),
      (Qv = 0),
      (Yv = e),
      (Jv = JSON.parse(document.getElementById(T[8] + S).getAttribute(Um))[0]),
      (Dg = document.getElementById(T[3] + S).textContent),
      Wv());
  }
  function Wv() {
    var e = new XMLHttpRequest();
    if (
      (e.open("POST", "https://gql.twitch.tv/gql", !0),
      (e.timeout = pv),
      js && js.length)
    )
      for (var t = js.length, n = 0; n < t; n++)
        e.setRequestHeader(js[n][0], js[n][1]);
    (e.ontimeout = function () {}),
      (e.onreadystatechange = function () {
        if (4 === e.readyState)
          if (200 === e.status)
            try {
              (zg = JSON.parse(e.responseText).data
                .streamPlaybackAccessToken).hasOwnProperty("value") &&
              zg.hasOwnProperty("signature")
                ? ((Qv = 0), t2())
                : Zv();
            } catch (e) {
              console.log("Play_CheckIfIsLive e " + e), Zv();
            }
          else Zv();
      }),
      e.send(Cs.replace("%x", Jv));
  }
  function Zv() {
    Qv < 3 ? (Qv++, Wv()) : $v();
  }
  function $v() {
    Q2(),
      Y2(Dg + " " + X + oe),
      window.setTimeout(function () {
        K2();
      }, 2e3);
  }
  function e2() {
    Qv < 3 ? (Qv++, t2()) : $v();
  }
  function t2() {
    var e;
    try {
      e =
        "https://usher.ttvnw.net/api/channel/hls/" +
        Jv +
        ".m3u8?&token=" +
        encodeURIComponent(zg.value) +
        "&sig=" +
        zg.signature +
        "&reassignments_supported=true&playlist_include_framerate=true&allow_source=true&p=" +
        ih();
    } catch (e) {
      return console.log("Play_CheckIfIsLiveLink e " + e), e2();
    }
    var t = new XMLHttpRequest();
    t.open("GET", e, !0),
      (t.timeout = pv),
      t.setRequestHeader(Mm, mm[0][1]),
      (t.ontimeout = function () {}),
      (t.onreadystatechange = function () {
        4 === t.readyState && (200 === t.status ? Yv : e2)();
      }),
      t.send(null);
  }
  function n2() {
    document.hidden
      ? P()
        ? ($2(), l0(), R2())
        : (z2(),
          G2(),
          $7(!0),
          Rr(),
          window.clearInterval(Hg),
          window.clearInterval(cv))
      : ((dv = !0),
        t0(),
        dv &&
          (X2(),
          (hv = 3e3),
          (Ev = !(nv = 0)),
          (fv ? r2 : s2)(),
          (ov = 0),
          window.clearInterval(hg),
          navigator.onLine ? i2() : (hg = window.setInterval(i2, 100)),
          window.clearInterval(Hg),
          (Hg = window.setInterval(r2, 6e4))));
  }
  function i2() {
    (navigator.onLine || 200 < ov) &&
      (window.clearInterval(hg), (Gg = Ug), h2()),
      ov++;
  }
  function o2() {
    _h(
      Lm + "users?id=" + x.Play_selectedChannel_id,
      hv,
      2,
      null,
      d2,
      a2,
      !1,
      null,
      !0
    );
  }
  function d2(e) {
    (e = JSON.parse(e)).data &&
      e.data.length &&
      ((e.stream = e.data[0]),
      c2(
        jg ? x.Play_DisplaynameHost : x.Play_selectedChannelDisplayname,
        "partner" === e.stream.broadcaster_type,
        !0,
        gv
      ),
      (x.Play_selectedChannelLogo = e.stream.profile_image_url),
      (fv = !0),
      f2(
        document.getElementById("stream_info_icon"),
        x.Play_selectedChannelLogo
      ));
  }
  function a2() {
    nv < iv &&
      ((hv += 500),
      window.setTimeout(function () {
        dv && d2();
      }, 750)),
      nv++;
  }
  function s2() {
    _h(
      Lm + "streams/?user_id=" + x.Play_selectedChannel_id,
      hv,
      2,
      null,
      l2,
      u2,
      !1,
      null,
      !0
    );
  }
  function c2(e, t, n, i) {
    (e =
      '<div class="partnericon_div"> ' +
      e +
      g +
      g +
      "</div>" +
      (t ? '<img class="partnericon_img" alt="" src="' + na + '">' : "")),
      n &&
        (e +=
          g +
          g +
          '<div class="partnericon_text" style="background: #' +
          (x.IsRerun ? "FFFFFF; color: #000000;" : "E21212;") +
          '">' +
          g +
          g +
          (x.IsRerun ? we : X) +
          g +
          g +
          "</div>"),
      m(
        "stream_info_name",
        (e += '<div class="lang_text" ">' + g + g + i + "</div>")
      );
  }
  function l2(e) {
    Ws() ? ((Oa = !0), (Va = x.Play_selectedChannel_id), is()) : q2(),
      (e = JSON.parse(e)).data &&
        e.data.length &&
        ((e.stream = e.data[0]),
        (x.IsRerun = Ef(e.stream.type)),
        m("stream_info_title", f4.parse(e.stream.title, !1, !0)),
        (x.Play_gameSelected = e.stream.game_name),
        (gv = " [" + e.stream.language.toUpperCase() + "]"),
        c2(
          jg ? x.Play_DisplaynameHost : x.Play_selectedChannelDisplayname,
          !1,
          !0,
          gv
        ),
        f(
          "stream_info_game",
          "" !== x.Play_gameSelected ? J + x.Play_gameSelected : ""
        ),
        m("stream_live_viewers", g + Y + Cf(e.stream.viewer_count) + g + me),
        ($g = e.stream.started_at),
        I[K0].setLable(x.Play_selectedChannelDisplayname),
        I[W0].setLable(x.Play_gameSelected)),
      (nv = 0),
      (hv = 3e3),
      o2();
  }
  function u2() {
    nv < iv &&
      ((hv += 500),
      window.setTimeout(function () {
        dv && s2();
      }, 750)),
      nv++;
  }
  function r2() {
    _h(
      Lm + "streams/?user_id=" + x.Play_selectedChannel_id,
      3e3,
      2,
      null,
      _2,
      m2,
      !1,
      null,
      !0
    );
  }
  function _2(e) {
    (e = JSON.parse(e)).data &&
      e.data.length &&
      ((e.stream = e.data[0]),
      m("stream_info_title", f4.parse(e.stream.title, !1, !0)),
      (x.Play_gameSelected = e.stream.game_name),
      f("stream_info_game", J + x.Play_gameSelected),
      m("stream_live_viewers", g + Y + Cf(e.stream.viewer_count) + g + me),
      fv || ((nv = 0), (hv = 3e3), o2()),
      I[K0].setLable(x.Play_selectedChannelDisplayname),
      I[W0].setLable(x.Play_gameSelected));
  }
  function m2() {
    jv < iv
      ? (window.setTimeout(function () {
          dv && r2();
        }, 2500),
        jv++)
      : (jv = 0);
  }
  function f2(e, t) {
    (e.onerror = function () {
      (this.onerror = null), (this.src = Zd), (fv = !1);
    }),
      (e.src = t);
  }
  function h2() {
    (ev = 0), (pv = 2e3 + (Ev ? 3e3 : 0)), g2();
  }
  var p2 = !0;
  function g2() {
    try {
      var e,
        t = new XMLHttpRequest();
      if (Gg === Ug) t.open("POST", "https://gql.twitch.tv/gql", !0);
      else {
        if (!zg.hasOwnProperty("value") || !zg.hasOwnProperty("signature"))
          return (p2 = !0), G_ && console.log("Play_410ERROR " + p2), void y2();
        (e =
          "https://usher.ttvnw.net/api/channel/hls/" +
          x.Play_selectedChannel +
          ".m3u8?&token=" +
          encodeURIComponent(zg.value) +
          "&sig=" +
          zg.signature +
          "&playlist_include_framerate=true&reassignments_supported=true&allow_source=true&fast_bread=true&cdm=wv&p=" +
          ih()),
          t.open("GET", e, !0);
      }
      if (((t.timeout = pv), js && js.length))
        for (var n = js.length, i = 0; i < n; i++)
          t.setRequestHeader(js[i][0], js[i][1]);
      (t.ontimeout = function () {}),
        (t.onreadystatechange = function () {
          if (4 === t.readyState)
            if (200 !== t.status)
              403 === t.status || 404 === t.status
                ? (v2(t), w2(410 === t.status, 403 === t.status))
                : (410 === t.status &&
                    ((p2 = !0), G_ && console.log("Play_410ERROR " + p2)),
                  v2(t),
                  y2());
            else if (((ev = 0), dv)) {
              var e = t.responseText;
              if (Gg === Ug) {
                try {
                  zg = JSON.parse(e).data.streamPlaybackAccessToken;
                } catch (e) {
                  (zg = null), console.log("Play_loadDataSuccess e " + e);
                }
                (Gg = Rg), h2();
              } else
                Gg === Rg &&
                  ($7(!0),
                  2 === Tg ? xy(!0) : 3 === Tg && Gp(),
                  (Tg = 0),
                  E0(1),
                  sA(),
                  x0(),
                  (Xg = b2(e)),
                  (Gg = Ng),
                  dv && A2(),
                  (_u = !(P7 = !1)));
            }
        }),
        t.send(Gg === Ug ? Cs.replace("%x", x.Play_selectedChannel) : null);
    } catch (e) {
      console.log("Play_loadDataRequest e " + e), y2();
    }
  }
  function v2(e) {
    G_ && (console.log(e.status), console.log(e.responseText));
  }
  function y2() {
    dv &&
      Sv &&
      (++ev < tv + (Ev ? 7 : 0)
        ? ((pv += 250), Ev ? window.setTimeout(g2, 500) : g2())
        : (r
            ? w2
            : function () {
                (Xg = x2), (Gg = Ng), dv && A2();
              })());
  }
  function w2(e, t) {
    var n;
    Tg
      ? ((Tg = 0),
        Q2(),
        document.body.removeEventListener("keydown", z0),
        document.body.addEventListener("keydown", sg, !1),
        (Gg = Ng),
        Y2(e ? ao : x.Play_selectedChannelDisplayname + " " + X + oe),
        window.setTimeout(function () {
          K2();
        }, 2e3),
        H0(),
        (x.Play_WasPlaying = 0),
        Lf())
      : null !== Kg
      ? ((n = e),
        Q2(),
        (Gg = Ng),
        Y2(n ? ao : x.Play_selectedChannelDisplayname + " " + X + oe),
        window.setTimeout(function () {
          K2();
        }, 2e3),
        H0(),
        Lf(),
        s2())
      : t
      ? (Q2(),
        Y2(In),
        window.setTimeout(function () {
          dv && O0();
        }, 4e3))
      : O0(e);
  }
  var x2 = [
    {
      id: "Auto",
      band: 0,
      codec: "avc",
      resolution: "auto",
      url: "https://auto",
    },
    {
      id: "1080p60 | source ",
      band: "| 10.00Mbps",
      codec: " | avc",
      resolution: "1920x1080",
      url: "https://souce",
    },
    {
      id: "720p60",
      band: " | 5.00Mbps",
      codec: " | avc",
      resolution: "1920x1080",
      url: "https://720p60",
    },
    {
      id: "720p",
      band: " | 2.50Mbps",
      codec: " | avc",
      resolution: "1280x720",
      url: "https://720",
    },
    {
      id: "480p",
      band: " | 2.50Mbps",
      codec: " | avc",
      resolution: "640x480",
      url: "https://480",
    },
    {
      id: "320p",
      band: " | 2.50Mbps",
      codec: " | avc",
      resolution: "480x320",
      url: "https://320",
    },
  ];
  function b2(e) {
    for (
      var t,
        n,
        i,
        o = [],
        d = "",
        a = 1,
        s = (function (e) {
          for (
            var t,
              n = [],
              i = /#EXT-X-MEDIA:(.)*\n#EXT-X-STREAM-INF:(.)*\n(.)*/g;
            (t = i.exec(e));

          )
            n.push(t[0]);
          return n;
        })(e),
        c = 0;
      c < s.length;
      c++
    )
      (d = s[c].split('NAME="')[1].split('"')[0]),
        (i = s[c].split("BANDWIDTH=")[1].split(",")[0]),
        (i =
          0 < (i = parseInt(i))
            ? " | " + parseFloat(i / 1e6).toFixed(2) + "Mbps"
            : ""),
        (n =
          -1 !== (n = s[c].split('CODECS="')[1].split(".")[0]).indexOf("avc")
            ? " | avc"
            : -1 !== n.indexOf("vp9")
            ? " | vp9"
            : -1 !== n.indexOf("mp4")
            ? " | mp4"
            : ""),
        (t = s[c].split("RESOLUTION=")[1].split(",")[0]),
        o.length
          ? o[c - a].id !== d && o[c - a].id !== d + " | source"
            ? o.push({
                id: d,
                band: i,
                codec: n,
                resolution: t,
                url: s[c].split("\n")[2],
              })
            : a++
          : (-1 === d.indexOf("ource")
              ? (d += " | source")
              : (d = d.replace("(", " | ").replace(")", "")),
            o.push({
              id: d,
              band: i,
              codec: n,
              resolution: t,
              url: s[c].split("\n")[2],
            }));
    return o;
  }
  function A2() {
    window.clearInterval(cv), (qg = Xg[(Qg = 0)].url);
    for (var e = 0; e < r0(); e++) {
      if (Xg[e].id === Eg) {
        qg = Xg[(Qg = e)].url;
        break;
      }
      -1 !== Xg[e].id.indexOf(Eg) && (qg = Xg[(Qg = e)].url);
    }
    (Eg = Xg[Qg].id),
      (Pg = Eg),
      S2("stream_quality"),
      (Gg = Ng),
      G_ &&
        console.log(
          "Play_qualityChanged before Play_onPlayer:",
          '\n\n"' + qg + '"\n'
        ),
      (Lg = 0),
      dv && E2();
  }
  var k2,
    C2 = {
      onbufferingstart: function () {
        X2(),
          (Ev = Fv = !1),
          (Pv = Bg),
          (rv = !(lv = 0)),
          d || console.log("onbufferingstart:", "date: " + new Date());
      },
      onbufferingcomplete: function () {
        Q2(),
          (Ev = !(Fv = !0)),
          (Pv = Bg),
          (rv = !(lv = 0)),
          d || console.log("onbufferingcomplete:", "date: " + new Date());
      },
      onbufferingprogress: function (e) {
        e < 5 && (lv = 0),
          (Pv = Bg),
          (rv = !0),
          e < 98
            ? J2() || X2()
            : (Q2(),
              (Fv = !0),
              d ||
                console.log(
                  "onbufferingprogress > 98:",
                  "date: " + new Date()
                )),
          (Ev = !1);
      },
      oncurrentplaytime: function (e) {
        Av !== e &&
          ((Av = e = e),
          !mv && W2() && K2(),
          Fv && J2() && Q2(),
          (Dv = e + Uv - 14e3),
          E() && a0());
      },
      onstreamcompleted: function () {
        O0(), d || console.log("onstreamcompleted:", "date: " + new Date());
      },
      onerror: function (e) {
        d ||
          console.log("onerror:", "date: " + new Date() + " eventType: " + e),
          ("PLAYER_ERROR_CONNECTION_FAILED" !== e &&
            "PLAYER_ERROR_INVALID_URI" !== e) ||
            O0();
      },
    };
  function S2(e) {
    var t;
    Xg[Qg] &&
      Xg[Qg].hasOwnProperty("id") &&
      ((t =
        -1 !== (Eg = Xg[Qg].id).indexOf("source")
          ? Eg.replace("source", Te)
          : Eg),
      f(e, (t += Xg[Qg].band + Xg[Qg].codec)));
  }
  function E2() {
    if (
      (X2(),
      d ||
        (console.log("Play_onPlayer:", "date: " + new Date()),
        console.log("Play_onPlayer:", '\n\n"' + qg + '"\n')),
      r)
    ) {
      P2();
      try {
        C.stop(), C.close(), C.open(qg);
      } catch (e) {
        console.log("Play_onPlayer open " + e);
      }
      C.setBufferingParam(
        "PLAYER_BUFFER_FOR_PLAY",
        "PLAYER_BUFFER_SIZE_IN_SECOND",
        Bg
      ),
        C.setBufferingParam(
          "PLAYER_BUFFER_FOR_RESUME",
          "PLAYER_BUFFER_SIZE_IN_SECOND",
          Bg
        ),
        Hv(Ig),
        C.setListener(C2),
        (Uv = Dv),
        d ||
          console.log(
            "Before Play_avplay.prepareAsync:",
            "date: " + new Date()
          ),
        C.prepareAsync(
          function () {
            d ||
              console.log(
                "Play_avplay.prepareAsync Live OK:",
                "date: " + new Date()
              );
            try {
              kg &&
                C.seekTo(
                  C.getStreamingProperty("GET_LIVE_DURATION").split("|")[1] -
                    3e3
                );
            } catch (e) {}
            C.play(),
              Jg && !u0() && c0(),
              (lv = 0),
              (Pv = 1 + 2 * Bg),
              (rv = !1),
              window.clearInterval(cv),
              (cv = window.setInterval(I2, Iv));
          },
          function () {
            d ||
              console.log(
                "Play_avplay.prepareAsync Live NOK:",
                "date: " + new Date()
              ),
              ++Lg < 5
                ? E2()
                : (d ||
                    console.log(
                      "Play_avplay.prepareAsync Live fail too mutch exit:",
                      "date: " + new Date()
                    ),
                  B2(!1, 1));
          }
        );
    } else P2();
  }
  function P2() {
    (x.Play_ChatForceDisable ? B_ : Eu)();
  }
  function I2() {
    sv === Av && j2()
      ? Pv < ++lv &&
        (rv && _v && Qg < r0() - 1 && -1 === Pg.indexOf("Auto")
          ? Qg++
          : !rv && _v && uv++,
        navigator.onLine
          ? 1 < uv
            ? L2(uv, 1, M2)
            : (M0(r0, Qg, S2), A2(), (_v = !0))
          : B2(!1, 1))
      : ((lv = uv = 0), (_v = !1)),
      (sv = Av);
  }
  function j2() {
    var e;
    return r && ((e = C.getState()), !P() && ("IDLE" === e || "PLAYING" === e));
  }
  function M2(e) {
    if (!e) {
      if (!(Qg < r0() - 1)) return void O0();
      Qg++;
    }
    (uv = 0), M0(r0, Qg, S2), A2(), (_v = !0);
  }
  function B2(e, t) {
    (x.Play_isHost = e), E0(t), L0(t);
  }
  function L2(e, t, n) {
    var i = new XMLHttpRequest();
    (i.timeout = 1e3),
      i.open(
        "GET",
        "https://static-cdn.jtvnw.net/jtv-static/404_preview-10x10.png?" +
          Math.random(),
        !0
      ),
      (i.onreadystatechange = function () {
        4 === i.readyState &&
          (200 === i.status ? O2() && n(2 < e) : 12 < e && B2(!1, t));
      }),
      i.send(null);
  }
  function O2() {
    return r && "PLAYING" !== C.getState();
  }
  function V2() {
    var e = th();
    f("stream_clock", e), f("label_clock", e);
  }
  function T2(e) {
    return e < 10 ? "0" + e : e;
  }
  function F2(e) {
    var t, n, i;
    return (
      (e += Rv / 1e3),
      (e = Math.round(Math.max(0, e))),
      (t = T2(parseInt(e) % 60)),
      (n = T2((e = Math.floor(e / 60)) % 60)),
      (i = T2((e = Math.floor(e / 60)))),
      e ? i + ":" + n + ":" + t : n + ":" + t
    );
  }
  function D2(e) {
    return (e += Rv = e < 0 && !Rv ? -1 * e : Rv), F2(parseInt(e / 1e3));
  }
  function U2(e) {
    return D2(new Date().getTime() - new Date(e).getTime());
  }
  function R2() {
    dv && (N2(!0), (Xg = []), (x.Play_WasPlaying = 0), H2());
  }
  function N2(e) {
    r && e && G2(),
      e && (dv = !1),
      (P() && !e) || $7(!0),
      (e = e),
      document.body.removeEventListener("keydown", z0),
      document.removeEventListener("visibilitychange", n2),
      e && Rr(),
      (Dv = Uv = 0),
      window.clearInterval(Hg),
      window.clearInterval(cv),
      (mv = !1),
      z2(),
      (x.Play_selectedChannel_id = "");
  }
  function G2() {
    if (r)
      try {
        C.stop(), C.close();
      } catch (e) {
        console.log("Play_offPlayer " + e);
      }
  }
  function H2() {
    Ws() ? ((La = !1), T0()) : q2(),
      (P7 = !1),
      jy(0, 0),
      _("scene1"),
      b("scene2"),
      nh(),
      If(),
      document.body.addEventListener("keyup", Hf, !1);
  }
  function z2() {
    n0(),
      t0(),
      K2(),
      Tg || x0(),
      Xg[0] &&
        Qg === r0() - 1 &&
        Xg[0].hasOwnProperty("id") &&
        ((Eg = Xg[0].id), (Pg = Eg)),
      j1[0] &&
        M1 === Iy() - 1 &&
        j1[0].hasOwnProperty("id") &&
        ((k1 = j1[0].id), (C1 = k1)),
      Zh[0] &&
        Wh === Kp() - 1 &&
        Zh[0].hasOwnProperty("id") &&
        ((Yh = Zh[0].id), (Kh = Yh));
  }
  function q2() {
    I[$0].setLable(It), (La = !1);
  }
  function X2() {
    _("dialog_loading_play");
  }
  function Q2() {
    b("dialog_loading_play");
  }
  function J2() {
    return sf("dialog_loading_play");
  }
  function Y2(e) {
    m("dialog_warning_play_text", e), _("dialog_warning_play");
  }
  function K2() {
    b("dialog_warning_play");
  }
  function W2() {
    return sf("dialog_warning_play");
  }
  function Z2() {
    e0() ? $2() : (_("play_dialog_exit"), (Yg = window.setTimeout(Z2, 3e3)));
  }
  function $2() {
    window.clearTimeout(Yg), b("play_dialog_exit");
  }
  function e0() {
    return sf("play_dialog_exit");
  }
  function t0() {
    window.clearTimeout(Wg), window.clearTimeout(Zg), (_u = !0);
  }
  function E() {
    return "1" === document.getElementById("scene_channel_panel").style.opacity;
  }
  function n0() {
    n(), d0(), (Eg = Pg);
  }
  function i0() {
    ky();
    for (var e = (Qg = 0); e < r0(); e++) {
      if (Xg[e].id === Eg) {
        Qg = e;
        break;
      }
      -1 !== Xg[e].id.indexOf(Eg) && (Qg = e);
    }
    M0(r0, Qg, S2), S2("stream_quality"), a0(), V2(), $2(), o0(), n(), s0();
  }
  function o0() {
    (document.getElementById("scene_channel_panel").style.opacity = "1"),
      _("playsideinfo");
  }
  function d0() {
    (document.getElementById("scene_channel_panel").style.opacity = "0"),
      b("playsideinfo");
  }
  function a0() {
    m("stream_watching_time", "," + g + g + K + D2(Dv)),
      m(
        "stream_live_time",
        W + (-1 !== "00:00".indexOf($g) ? "00:00" : U2($g))
      );
  }
  function n() {
    window.clearTimeout(Sg), (W1 = 0);
  }
  function s0() {
    Sg = window.setTimeout(n0, 5e3);
  }
  function c0() {
    h0(), m0(!1), _("chat_container0"), I[n1].setLable();
  }
  function l0() {
    b("chat_container0"), I[n1].setLable();
  }
  function u0() {
    return sf("chat_container0");
  }
  function r0() {
    return Xg.length;
  }
  function _0(e) {
    Ag < xg && (xg = Ag),
      (pg.style.height = Vv[xg].containerHeight + "%"),
      (document.getElementById("play_chat_dialog").style.marginTop =
        Vv[xg].dialogTop + "%"),
      h0(),
      e && p0(En + Vv[xg].percentage),
      window.setTimeout(function () {
        Wr && (Wr.scrollTop = Wr.scrollHeight);
      }, 500),
      sh("ChatSizeValue", xg);
  }
  function m0(e) {
    (pg.style.backgroundColor = "rgba(0, 0, 0, " + wg + ")"),
      e && p0(Pn + (100 * wg).toFixed(0) + "%");
  }
  function f0(e) {
    vg = e ? Lv[(yg = vg)] : Ov[vg][yg];
  }
  function h0() {
    var e = xg === Ag;
    vg < 0 ? (vg = e ? 2 : 7) : (e ? 2 : 7) < vg && (vg = 0),
      (pg.style.top = (e ? 0.2 : Bv[vg].top + Bv[vg].sizeOffset[xg]) + "%"),
      (pg.style.left = Bv[vg + (e ? 2 : 0)].left + "%"),
      sh("ChatPositionsValue", vg);
  }
  function p0(e) {
    window.clearTimeout(av),
      f("play_chat_dialog_text", e),
      _("play_chat_dialog"),
      (av = window.setTimeout(g0, 1e3));
  }
  function g0() {
    b("play_chat_dialog");
  }
  function v0(e) {
    if (!J2())
      if (O2()) {
        if (r)
          try {
            webapis.appcommon.setScreenSaver(
              webapis.appcommon.AppCommonScreenSaverState.SCREEN_SAVER_OFF
            ),
              C.play();
          } catch (e) {
            return console.log("Play_avplay.pause: " + e);
          }
        t0();
        for (var t, n, i = 0; i < 2; i++) {
          for (n = cu[i].length, t = 0; t < n; t++) Fr(cu[i][t]);
          cu[i] = [];
        }
        m(
          "pause_button",
          '<div ><i class="pause_button3d icon-pause"></i></div>'
        ),
          1 === e
            ? (E() && n0(),
              window.clearInterval(cv),
              (cv = window.setInterval(I2, Iv)))
            : 2 === e
            ? (E() && by(),
              window.clearInterval(R1),
              (R1 = window.setInterval(vy, Iv)))
            : 3 === e &&
              (E() && Jp(),
              window.clearInterval(Gh),
              (Gh = window.setInterval(Up, Iv)));
      } else {
        if (r)
          try {
            webapis.appcommon.setScreenSaver(
              webapis.appcommon.AppCommonScreenSaverState.SCREEN_SAVER_ON
            ),
              C.pause();
          } catch (e) {
            return console.log("Play_avplay.pause: " + e);
          }
        (_u = !1),
          window.clearInterval(cv),
          window.clearInterval(R1),
          window.clearInterval(Gh),
          m(
            "pause_button",
            '<div ><i class="pause_button3d icon-play-1"></i></div>'
          );
      }
  }
  function y0() {
    m1(), (i = r1), _1();
  }
  function w0() {
    _("dialog_end_stream"),
      af("icon_feed_refresh", "icon-refresh", F + ":" + uo),
      (P7 = Fg = !0),
      tA(),
      Z7(!0),
      (x.Play_WasPlaying = 0),
      Lf();
  }
  function x0() {
    b("dialog_end_stream"), C0(), b0();
  }
  function P() {
    return sf("dialog_end_stream");
  }
  function b0() {
    k0(), (vv = 0), A0();
  }
  function A0() {
    c("dialog_end_" + vv, "dialog_end_icons_focus");
  }
  function k0() {
    l("dialog_end_" + vv, "dialog_end_icons_focus");
  }
  function C0() {
    window.clearTimeout(xv), m("dialog_end_stream_text", bv + oe + h + Jt);
  }
  function S0(e) {
    var t = !0;
    -1 === vv && _p
      ? Xp()
      : vv
      ? 1 === vv
        ? x.Play_isHost
          ? ((x.Play_DisplaynameHost = x.Play_selectedChannelDisplayname + Ee),
            (x.Play_selectedChannel = Cv.login),
            (x.Play_selectedChannelDisplayname = Cv.displayName),
            (x.Play_DisplaynameHost =
              x.Play_DisplaynameHost + x.Play_selectedChannelDisplayname),
            N2(!1),
            document.body.addEventListener("keydown", z0, !1),
            (x.Play_selectedChannel_id = Cv.id),
            A(Xv))
          : (eg(), op || (t = !1))
        : 2 === vv
        ? I0(e)
        : 3 === vv && (j0(e), "" === x.Play_gameSelected && (t = !1))
      : 2 === e
      ? j1.length
        ? ((G1 = !(ey = !0)), oy(), t0(), (Qr = J1 = 0), n_())
        : ((t = !1),
          Y2(Hn),
          window.setTimeout(function () {
            K2();
          }, 2e3))
      : 3 === e &&
        (Zh.length
          ? ((qh = !(ap = !(qh = !0))), wp(), t0())
          : ((t = !1),
            Y2(Hn),
            window.setTimeout(function () {
              K2();
            }, 2e3))),
      t && (x0(), $7(!0), (P7 = !1)),
      (Tg = 0);
  }
  function E0(e) {
    e
      ? 1 === e
        ? (k0(),
          (vv = 2),
          A0(),
          (document.getElementById("dialog_end_-1").style.display = "none"),
          (document.getElementById("dialog_end_0").style.display = "none"),
          (document.getElementById("dialog_end_1").style.display = "none"),
          P0(),
          m("end_channel_name_text", x.Play_selectedChannelDisplayname))
        : 2 === e
        ? (b0(),
          (document.getElementById("dialog_end_-1").style.display = "none"),
          (document.getElementById("dialog_end_0").style.display =
            "inline-block"),
          (document.getElementById("dialog_end_1").style.display = "none"),
          m("end_replay_name_text", x.Main_selectedChannelDisplayname),
          m("end_replay_title_text", wx),
          f("end_vod_name_text", ""),
          f("end_vod_title_text", ""),
          m("end_channel_name_text", x.Main_selectedChannelDisplayname))
        : 3 === e &&
          (b0(),
          (document.getElementById("dialog_end_-1").style.display = _p
            ? "inline-block"
            : "none"),
          (document.getElementById("dialog_end_0").style.display =
            "inline-block"),
          (document.getElementById("dialog_end_1").style.display =
            "inline-block"),
          f("dialog_end_vod_text", op ? Wt : Zt),
          m("end_replay_name_text", x.Main_selectedChannelDisplayname),
          m("end_replay_title_text", ux),
          m("end_vod_name_text", x.Main_selectedChannelDisplayname),
          m("end_channel_name_text", x.Main_selectedChannelDisplayname))
      : (k0(),
        (vv = 1),
        A0(),
        (document.getElementById("dialog_end_-1").style.display = "none"),
        (document.getElementById("dialog_end_0").style.display = "none"),
        (document.getElementById("dialog_end_1").style.display =
          "inline-block"),
        f("dialog_end_vod_text", nn),
        P0(),
        m("end_channel_name_text", x.Play_selectedChannelDisplayname),
        m(
          "end_vod_title_text",
          x.Play_selectedChannelDisplayname + tn + Ee + Cv.displayName
        )),
      f("end_game_name_text", x.Play_gameSelected);
  }
  function P0() {
    f("end_replay_name_text", ""),
      f("end_replay_title_text", ""),
      f("end_vod_name_text", ""),
      f("end_vod_title_text", "");
  }
  function I0(e) {
    x.Main_BeforeChannelisSet ||
      x.Main_Go === dm ||
      x.Main_Go === am ||
      ((x.Main_BeforeChannel =
        x.Main_BeforeAgameisSet && x.Main_Go !== cm
          ? x.Main_BeforeAgame
          : x.Main_Go),
      (x.Main_BeforeChannelisSet = !0)),
      Vf(x.Main_Go),
      (x.Main_Go = om),
      1 === e
        ? ((x.Main_selectedChannel_id = x.Play_selectedChannel_id),
          (x.Main_selectedChannel = x.Play_selectedChannel),
          (x.Main_selectedChannelDisplayname =
            x.Play_selectedChannelDisplayname),
          (_c = La),
          l0(),
          R2())
        : 2 === e
        ? wy()
        : 3 === e && Np();
  }
  function j0(e) {
    if ("" === x.Play_gameSelected)
      return (
        n(),
        (mv = !0),
        Y2(Un),
        window.setTimeout(function () {
          (mv = !1), K2();
        }, 2e3)
      );
    x.Main_BeforeAgameisSet ||
      x.Main_Go === lm ||
      x.Main_Go === um ||
      ((x.Main_BeforeAgame =
        x.Main_BeforeChannelisSet &&
        x.Main_Go !== om &&
        x.Main_Go !== dm &&
        x.Main_Go !== am
          ? x.Main_BeforeChannel
          : x.Main_Go),
      (x.Main_BeforeAgameisSet = !0)),
      Vf(x.Main_Go),
      (x.Main_Go = cm),
      (x.Main_gameSelected = x.Play_gameSelected),
      (x.Main_gameSelected_id = x.Play_gameSelected_id),
      l0(),
      1 === e ? R2() : 2 === e ? wy() : 3 === e && Np();
  }
  function M0(e, t, n) {
    var i = document.getElementById("control_arrow_up_" + e1),
      o = document.getElementById("control_arrow_down" + e1);
    1 === e()
      ? (i.classList.add("hide"), o.classList.add("hide"))
      : t
      ? t === e() - 1
        ? (i.classList.remove("hide"),
          o.classList.remove("hide"),
          (i.style.opacity = "1"),
          (o.style.opacity = "0.2"))
        : (i.classList.remove("hide"),
          o.classList.remove("hide"),
          (i.style.opacity = "1"),
          (o.style.opacity = "1"))
      : (i.classList.remove("hide"),
        o.classList.remove("hide"),
        (i.style.opacity = "0.2"),
        (o.style.opacity = "1")),
      n("controls_name_" + e1);
  }
  function B0(e) {
    1 === e ? (window.clearInterval(cv), O0()) : L0(e);
  }
  function L0(e) {
    var t;
    window.clearInterval(cv),
      window.clearInterval(Gh),
      window.clearInterval(R1),
      (t = e),
      (S1 = Gg = -1),
      (np = -1),
      l0(),
      n0(),
      Jp(),
      by(),
      mv || K2(),
      Q2(),
      $2(),
      3 === t && _p && (pp || gp) && (k0(), (vv = -1)),
      A0(),
      (yv = wv || -2),
      (function e(t) {
        if (
          (1 === t
            ? (bv = x.Play_selectedChannelDisplayname + " " + X)
            : 2 === t
            ? (bv = x.Main_selectedChannelDisplayname + qt)
            : 3 === t && (bv = x.Main_selectedChannelDisplayname + Lt),
          -2 === yv)
        )
          return (S1 = Gg = Ng), (np = ip), C0();
        m(
          "dialog_end_stream_text",
          bv + oe + h + (3 === t && _p && (pp || gp) ? Yn : Qt) + yv + "..."
        ),
          P()
            ? ((S1 = Gg = Ng),
              (np = ip),
              -1 == --yv
                ? (m("dialog_end_stream_text", bv + oe + h + Qt + "0..."),
                  $2(),
                  l0(),
                  1 === t
                    ? R2()
                    : 2 === t
                    ? wy()
                    : 3 === t &&
                      (_p && (pp || gp) && !document.hidden ? Xp : Np)())
                : (xv = window.setTimeout(function () {
                    e(t);
                  }, 1e3)))
            : (xv = window.setTimeout(function () {
                e(t);
              }, 50));
      })(e),
      w0();
  }
  function O0(e) {
    r &&
      webapis.appcommon.setScreenSaver(
        webapis.appcommon.AppCommonScreenSaverState.SCREEN_SAVER_OFF
      ),
      e && ((mv = !0), Y2(ao)),
      X2(),
      (Gg = -1),
      (ev = 0),
      (pv = 2e3),
      Rr(),
      window.clearInterval(Hg),
      window.clearInterval(cv),
      "" !== x.Play_selectedChannel_id &&
        fh(V0, (k2 = new Date().getTime()), x.Main_selectedChannel);
  }
  function V0(e, t) {
    if (dv && k2 === t) {
      if (
        200 === e.status &&
        (t = JSON.parse(e.responseText).data).user &&
        t.user.hosting
      )
        return (
          (e = t.user.hosting),
          (Cv = e),
          (mv = !0),
          Y2(x.Play_selectedChannelDisplayname + tn + Ee + Cv.displayName),
          window.setTimeout(function () {
            mv = !1;
          }, 4e3),
          E0(0),
          (x.Play_isHost = !0),
          void L0(1)
        );
      E0(1), (x.Play_isHost = !1), L0(1);
    }
  }
  function T0() {
    I[$0].setLable(La ? At : kt, La);
  }
  function F0(e) {
    P() && C0(),
      !P() || e0() || bg
        ? W7() && !P()
          ? $7()
          : E() && !Dy()
          ? (e ? by : n0)()
          : Dy() && e0()
          ? (Fy(), xy(!1), H2())
          : e0() || bg
          ? ($2(), l0(), (e ? wy : R2)())
          : (W2() && K2(), Z2())
        : Z2();
  }
  function D0(e) {
    e.keyCode === ra &&
      (window.clearTimeout(ag),
      document.body.removeEventListener("keyup", D0),
      document.body.addEventListener("keydown", sg, !1),
      Vg || N0());
  }
  function U0(e, t) {
    (t = JSON.parse(t.getAttribute(Um))[0]),
      x.Play_selectedChannel !== t
        ? (G0(), N2(!1), (x.Play_isHost = !1), Jf(S, T, z0))
        : e && eA();
  }
  function R0() {
    (Vg = !0), nA(Fg);
  }
  function N0() {
    C0(),
      !g7 && Ws() && (Fg ? ((Fg = !1), k0(), iA()) : ((Fg = !0), oA(), A0()));
  }
  function G0() {
    (Kg = x.Play_selectedChannel_id),
      (cg = x.IsRerun),
      (lg = x.Play_selectedChannel),
      (ug = jg),
      (rg = x.Play_isHost),
      (_g = x.Play_DisplaynameHost),
      (mg = x.Play_selectedChannelDisplayname),
      (fg = x.Play_gameSelected);
  }
  function H0() {
    (x.Play_selectedChannel_id = Kg),
      (Kg = null),
      (x.IsRerun = cg),
      (x.Play_selectedChannel = lg),
      (jg = ug),
      (x.Play_isHost = rg),
      (x.Play_DisplaynameHost = _g),
      (x.Play_selectedChannelDisplayname = mg),
      (x.Play_gameSelected = fg);
  }
  function z0(e) {
    if (Gg !== Ng)
      switch (e.keyCode) {
        case ya:
        case ba:
        case a:
          e0() || bg ? ($2(), l0(), R2()) : Z2();
      }
    else
      switch (e.keyCode) {
        case ua:
          !W7() || (Fg && P())
            ? E()
              ? (n(), 2 === j && v1(1, -1), s0())
              : P()
              ? (C0(), k0(), --vv < (x.Play_isHost ? 1 : 2) && (vv = 3), A0())
              : i0()
            : S && !g7 && (oA(), S--, iA());
          break;
        case _a:
          !W7() || (Fg && P())
            ? E()
              ? (n(), 2 === j && v1(1, 1), s0())
              : P()
              ? (C0(), k0(), 3 < ++vv && (vv = x.Play_isHost ? 1 : 2), A0())
              : i0()
            : S < K7() - 1 && !g7 && (oA(), S++, iA());
          break;
        case ra:
          E()
            ? (n(), j < 2 ? (--j < 1 ? (j = 1) : Cy()) : g1(1, 1), s0())
            : !W7() && Ws() && v[0].access_token
            ? Z7()
            : P()
            ? (C0(),
              document.body.removeEventListener("keydown", z0, !1),
              document.body.addEventListener("keyup", D0, !1),
              (Vg = !1),
              (sg = z0),
              (ag = window.setTimeout(R0, 250)))
            : W7() && nA();
          break;
        case ma:
          E()
            ? (n(), j < 2 ? (j++, Cy()) : g1(1, -1), s0())
            : (P() ? N0 : W7() ? $7 : Ig && u0() ? f1 : i0)();
          break;
        case fa:
          var t;
          P()
            ? Fg
              ? S0(1)
              : null !== (t = document.getElementById(T[8] + S)) &&
                ((sg = z0), U0(!(Tg = 1), t))
            : E()
            ? (n(), 1 === j ? P() || v0(1) : h1(1), s0())
            : W7()
            ? null !== (t = document.getElementById(T[8] + S)) &&
              ((sg = z0), U0(!(Tg = 1), t))
            : i0();
          break;
        case ya:
        case ba:
        case a:
          F0(!1);
          break;
        case da:
          !P() && O2() && v0(1);
          break;
        case oa:
          P() || O2() || v0(1);
          break;
        case ka:
        case aa:
          P() || v0(1);
          break;
        case va:
        case ga:
          I[n1].enterKey(1);
          break;
        case pa:
          (i = d1), g1(1, 1), (i = r1);
          break;
        case ha:
          (i = d1), g1(1, -1), (i = r1);
          break;
        case sa:
          l0(), R2();
          break;
        case wa:
          d || (rh("Reloading"), window.location.reload(!0));
      }
  }
  var q0,
    X0,
    Q0,
    I = {},
    J0 = -1,
    Y0 = 0,
    K0 = 1,
    W0 = 2,
    Z0 = 3,
    $0 = 4,
    e1 = 5,
    t1 = 6,
    n1 = 7,
    i1 = 8,
    o1 = 9,
    d1 = 10,
    a1 = 11,
    s1 = 12,
    c1 = 13,
    l1 = 14,
    u1 = 15,
    r1 = n1,
    i = r1;
  function _1() {
    c("controls_button_" + i, "progress_bar_div_focus"),
      (document.getElementById("controls_button_text_" + i).style.opacity =
        "1"),
      !I[i].isChat || (u0() && Ig)
        ? i === n1 ||
          I[i].isChat ||
          (document.getElementById("controls_button_text_" + n1).style.opacity =
            "0")
        : (document.getElementById("controls_button_text_" + n1).style.opacity =
            "1");
  }
  function m1() {
    l("controls_button_" + i, "progress_bar_div_focus"),
      (document.getElementById("controls_button_text_" + i).style.opacity =
        "0"),
      (document.getElementById("controls_button_text_" + n1).style.opacity =
        "0");
  }
  function f1() {
    Ag < ++xg ? ((xg = 0), f0(!1)) : xg === Ag && f0(!0),
      _0(!0),
      (I[a1].defaultValue = xg),
      I[a1].bottomArrows(),
      I[a1].setLable();
  }
  function h1(e) {
    A(function () {
      I[i].enterKey ? I[i].enterKey(e) : p1(e);
    }),
      Lf();
  }
  function p1(e) {
    n(), 1 === e ? s0() : 2 === e ? Sy() : 3 === e && $p();
  }
  function g1(e, t) {
    I[i].updown ? I[i].updown(t, e) : 1 === t && (j--, Cy());
  }
  function v1(e, t) {
    m1(),
      J0 < (i += t) ? (i = 0) : i < 0 && (i = J0),
      "none" === document.getElementById("controls_" + i).style.display
        ? v1(e, t)
        : _1();
  }
  function y1(e) {
    var t = document.getElementById("control_arrow_up_" + e),
      n = document.getElementById("control_arrow_down" + e);
    1 === I[e].values.length
      ? (t.classList.add("hide"), n.classList.add("hide"))
      : I[e].defaultValue
      ? (I[e].defaultValue === I[e].values.length - 1
          ? (t.classList.remove("hide"),
            n.classList.remove("hide"),
            (t.style.opacity = "0.2"))
          : (t.classList.remove("hide"),
            n.classList.remove("hide"),
            (t.style.opacity = "1")),
        (n.style.opacity = "1"))
      : (t.classList.remove("hide"),
        n.classList.remove("hide"),
        (t.style.opacity = "1"),
        (n.style.opacity = "0.2")),
      f("controls_name_" + e, I[e].values[I[e].defaultValue]);
  }
  function w1(e, t) {
    (X0.innerHTML = e),
      W7() ? (q0.style.marginTop = "90vh") : (q0.style.marginTop = "50vh"),
      q0.classList.remove("hide"),
      t
        ? (Q0 = Eh(
            function () {
              q0.classList.add("hide"), Ph(Q0);
            },
            t,
            Q0
          ))
        : Ph(Q0);
  }
  var x1,
    b1,
    A1,
    k1 = "Auto",
    C1 = k1,
    S1 = 0,
    E1 = null,
    P1 = 0,
    I1 = "",
    j1 = [],
    M1 = 0,
    B1 = 0,
    L1 = 5,
    O1 = !1,
    V1 = 2e3,
    T1 = 0,
    F1 = 5,
    D1 = 1e4,
    U1 = 0,
    R1 = null,
    N1 = 0,
    G1 = !1,
    H1 = 0,
    z1 = !1,
    q1 = 0,
    X1 = !1,
    Q1 = 0,
    J1 = 0,
    Y1 = {},
    K1 = 0,
    j = 0,
    W1 = 0,
    Z1 = 0,
    $1 = 0,
    ey = !1,
    ty = [0, 10, 30, 60, 120, 300, 600, 900, 1200, 1800],
    ny = !1,
    iy = !1;
  function oy() {
    X2(),
      x0(),
      (J1 = 0),
      f("stream_live_time", ""),
      f("stream_watching_time", ""),
      f("progress_bar_current_time", F2(0)),
      (Jr = ce + "."),
      m(
        "pause_button",
        '<div ><i class="pause_button3d icon-pause"></i> </div>'
      ),
      b("progress_pause_holder"),
      _("progress_bar_div"),
      (document.getElementById("controls_" + Z0).style.display = "none"),
      (document.getElementById("controls_" + l1).style.display = "none"),
      (document.getElementById("controls_" + t1).style.display = "none"),
      (document.getElementById("controls_" + i1).style.display = "none"),
      y0(),
      (Z1 = 0),
      Ly((Mv = ty)[1]),
      (S1 = Ug),
      (P7 = !(op = !0)),
      (hx = 0),
      (x.Play_isHost = !1),
      zp(0, 0),
      zp(1, 0),
      x.vodOffset
        ? ((T1 = 0), (F1 = 5), (D1 = 1e4), ay())
        : (f2(
            document.getElementById("stream_info_icon"),
            x.Main_selectedChannelLogo
          ),
          c2(
            x.Main_selectedChannelDisplayname,
            x.Main_selectedChannelPartner,
            !1,
            " [" + gx.toUpperCase() + "]"
          ),
          Y1["#" + x.ChannelVod_vodId] || n_(),
          Ws() ? ((Va = x.Main_selectedChannel_id), (Oa = !0), is()) : q2(),
          m("stream_info_title", wx),
          f("stream_info_game", xx),
          m("stream_live_time", vx + "," + g + yx),
          f("stream_live_viewers", ""),
          f("stream_watching_time", ""),
          cf("stream_info_title")),
      Y1["#" + x.ChannelVod_vodId] && !x.vodOffset
        ? (Q2(),
          b("controls_holder"),
          Ay(!1),
          f("stream_quality", ""),
          m(
            "dialog_vod_saved_text",
            mn + D2(1e3 * Y1["#" + x.ChannelVod_vodId])
          ),
          _("dialog_vod_start"))
        : dy(),
      !x.Play_gameSelected_id && x.Play_gameSelected && xp();
  }
  function dy() {
    window.setTimeout(function () {
      _("controls_holder"), _("progress_pause_holder");
    }, 1e3),
      f("progress_bar_duration", F2(px)),
      (x.Play_WasPlaying = 2),
      Lf(),
      window.clearInterval(A1),
      (A1 = window.setInterval(ry, 6e4)),
      (N1 = H1 = 0),
      window.clearInterval(R1),
      (mv = z1 = !-13),
      (X1 = !1),
      (P1 = Q1 = 0),
      document.addEventListener("visibilitychange", ly, !1),
      (ny = !(O1 = !!1)),
      ey ? ((S1 = Ng), hy()) : _y(),
      E0(2),
      document.body.removeEventListener("keyup", Hf),
      I[K0].setLable(x.Main_selectedChannelDisplayname),
      I[W0].setLable(x.Play_gameSelected);
  }
  function ay() {
    _h(Bm + "videos/" + x.ChannelVod_vodId + Fm, D1, 2, null, cy, sy, !1);
  }
  function sy() {
    ++T1 < F1 && ((D1 += 2e3), ay());
  }
  function cy(e) {
    (e = JSON.parse(e)),
      (wx = f4.parse(e.title, !1, !0)),
      (x.Main_selectedChannelPartner = e.channel.partner),
      c2(
        x.Main_selectedChannelDisplayname,
        x.Main_selectedChannelPartner,
        !1,
        "[" + e.channel.broadcaster_language.toUpperCase() + "]"
      ),
      m("stream_info_title", wx),
      m(
        "stream_info_game",
        "" !== e.game && null !== e.game ? Ht + J + e.game : ""
      ),
      m("stream_live_time", re + Df(e.created_at) + "," + g + Cf(e.views) + _e),
      f("stream_live_viewers", ""),
      f("stream_watching_time", ""),
      f("progress_bar_duration", F2((px = parseInt(e.length)))),
      (J1 = 1e3 * x.vodOffset),
      jy(x.vodOffset, px, !0),
      (x.Main_selectedChannelDisplayname = e.channel.display_name),
      (x.Main_selectedChannelLogo = e.channel.logo),
      f2(
        document.getElementById("stream_info_icon"),
        x.Main_selectedChannelLogo
      ),
      (x.Main_selectedChannel_id = e.channel._id),
      (x.Main_selectedChannel = e.channel.name),
      Ws() ? ((Oa = !0), (Va = x.Main_selectedChannel_id), is()) : q2(),
      E0(2);
  }
  function ly() {
    document.hidden
      ? P()
        ? ($2(), l0(), wy())
        : (ry(),
          Ty(),
          S_(),
          r && (C.pause(), (x.vodOffset = C.getCurrentTime() / 1e3)),
          z2(),
          $7(!0),
          window.clearInterval(R1),
          window.clearInterval(A1))
      : ((O1 = !0),
        t0(),
        O1 &&
          (X2(),
          (ov = 0),
          window.clearInterval(hg),
          navigator.onLine ? uy() : (hg = window.setInterval(uy, 100)),
          E0(2),
          window.clearInterval(A1),
          (A1 = window.setInterval(ry, 6e4))));
  }
  function uy() {
    (navigator.onLine || 200 < ov) &&
      (window.clearInterval(hg), (S1 = Ug), _y()),
      ov++;
  }
  function ry() {
    x.vodOffset ||
      ((x.vodOffset = parseInt(J1 / 1e3)), Lf(), (x.vodOffset = 0));
  }
  function _y() {
    (B1 = 0), my();
  }
  function my() {
    var e,
      t = S1 === Ug,
      n = new XMLHttpRequest();
    try {
      if (t) n.open("POST", "https://gql.twitch.tv/gql", !0);
      else {
        if (!P1.hasOwnProperty("value") || !P1.hasOwnProperty("signature"))
          return (p2 = !0), G_ && console.log("Play_410ERROR " + p2), fy();
        (e =
          "https://usher.ttvnw.net/vod/" +
          x.ChannelVod_vodId +
          ".m3u8?&nauth=" +
          encodeURIComponent(P1.value) +
          "&nauthsig=" +
          P1.signature +
          "&playlist_include_framerate=true&reassignments_supported=true&allow_source=true" +
          (qm ? "&preferred_codecs=vp09" : "") +
          "&p=" +
          ih()),
          n.open("GET", e, !0);
      }
      if (((n.timeout = pv), js && js.length))
        for (var i = js.length, o = 0; o < i; o++)
          n.setRequestHeader(js[o][0], js[o][1]);
      (n.ontimeout = function () {}),
        (n.onreadystatechange = function () {
          if (4 === n.readyState) {
            if (200 !== n.status)
              return (
                410 === n.status &&
                  ((p2 = !0), G_ && console.log("Play_410ERROR " + p2)),
                void fy()
              );
            var e = n.responseText;
            if (S1 === Ug) {
              try {
                P1 = JSON.parse(e).data.videoPlaybackAccessToken;
              } catch (e) {
                (P1 = null), console.log("PlayVod_loadDataSuccess e " + e);
              }
              (S1 = Rg), _y();
            } else S1 === Rg && ((j1 = b2(e)), (S1 = Ng), O1 && hy());
          }
        }),
        n.send(t ? Ss.replace("%x", x.ChannelVod_vodId) : null);
    } catch (e) {
      fy(), console.log("PlayVod_loadDataRequest e " + e);
    }
  }
  function fy() {
    if (O1) {
      var e;
      try {
        if (
          (e = P1.value ? JSON.parse(P1.value) : e) &&
          0 !== JSON.parse(P1.value).chansub.restricted_bitrates.length
        )
          return void (Ws() && v[0].access_token
            ? ((Va = x.Main_selectedChannel_id), ss())
            : (Q2(),
              Y2(de + Ct),
              window.setTimeout(function () {
                O1 && wy();
              }, 4e3)));
      } catch (e) {
        console.log("PlayVod_loadDataError e " + e);
      }
      ++B1 < L1 ? my() : r ? (Q2(), L0(2)) : ((j1 = x2), (S1 = Ng), O1 && hy());
    }
  }
  function hy() {
    window.clearInterval(R1), (I1 = j1[(M1 = 0)].url);
    for (var e = 0; e < Iy(); e++) {
      if (j1[e].id === k1) {
        I1 = j1[(M1 = e)].url;
        break;
      }
      -1 !== j1[e].id.indexOf(k1) && (I1 = j1[(M1 = e)].url);
    }
    (k1 = j1[M1].id), (C1 = k1), Py("stream_quality"), (Lg = 0), gy();
  }
  var py = {
    onbufferingstart: function () {
      X2(),
        (iy = !1),
        (Pv = V1),
        (G1 = !(N1 = 0)),
        d || console.log("onbufferingstart:", "date: " + new Date());
    },
    onbufferingcomplete: function () {
      Q2(),
        (iy = !0),
        ry(),
        (Pv = V1),
        (G1 = !(N1 = 0)),
        d || console.log("onbufferingcomplete:", "date: " + new Date());
    },
    onbufferingprogress: function (e) {
      e < 5 && (N1 = 0),
        (Pv = V1),
        (G1 = !0),
        e < 98
          ? J2() || X2()
          : (Q2(),
            (Fv = !0),
            (x.vodOffset = 0),
            d ||
              console.log("onbufferingprogress > 98:", "date: " + new Date()));
    },
    oncurrentplaytime: function (e) {
      J1 !== e &&
        ((J1 = e),
        !mv && W2() && K2(),
        iy && J2() && Q2(),
        E() && !J2() && jy(J1 / 1e3, px, !X1));
    },
    onstreamcompleted: function () {
      B0(2);
    },
    onerror: function (e) {
      d || console.log("onerror:", "date: " + new Date() + " eventType: " + e),
        ("PLAYER_ERROR_CONNECTION_FAILED" !== e &&
          "PLAYER_ERROR_INVALID_URI" !== e) ||
          B0(2);
    },
  };
  function gy() {
    if (
      (X2(),
      d ||
        (console.log("PlayVod_onPlayer:", "date: " + new Date()),
        console.log("PlayVod_onPlayer:", '\n\n"' + I1 + '"\n')),
      r)
    ) {
      try {
        C.stop(), C.close(), C.open(I1);
      } catch (e) {
        console.log("PlayVod_onPlayer open " + e);
      }
      x.vodOffset > px && (x.vodOffset = 0),
        x.vodOffset &&
          !ey &&
          ((Qr = x.vodOffset), n_(), C.seekTo(1e3 * x.vodOffset)),
        (ey = !1),
        C.setBufferingParam(
          "PLAYER_BUFFER_FOR_PLAY",
          "PLAYER_BUFFER_SIZE_IN_SECOND",
          V1
        ),
        C.setBufferingParam(
          "PLAYER_BUFFER_FOR_RESUME",
          "PLAYER_BUFFER_SIZE_IN_SECOND",
          V1
        ),
        Hv(Ig),
        C.setListener(py),
        C.prepareAsync(
          function () {
            d ||
              console.log(
                "Play_avplay.prepareAsync Vod OK:",
                "date: " + new Date()
              ),
              C.play(),
              f("progress_bar_duration", F2((px = C.getDuration() / 1e3))),
              Jg && !u0() && c0(),
              (N1 = 0),
              (Pv = 3 + 2 * V1),
              (G1 = !1),
              window.clearInterval(R1),
              (R1 = window.setInterval(vy, Iv));
          },
          function () {
            d ||
              console.log(
                "Play_avplay.prepareAsync Vod NOK:",
                "date: " + new Date()
              ),
              ++Lg < 5
                ? gy()
                : (d ||
                    console.log(
                      "Play_avplay.prepareAsync Vod fail too mutch exit:",
                      "date: " + new Date()
                    ),
                  B2(!1, 2));
          }
        );
    }
  }
  function vy() {
    O1 && U1 === J1 && j2()
      ? ++N1 > Pv &&
        (G1 && z1 && M1 < Iy() - 1 && -1 === k1.indexOf("Auto")
          ? M1++
          : !G1 && z1 && H1++,
        navigator.onLine
          ? 1 < H1
            ? L2(H1, 2, yy)
            : (Ey(),
              r && !x.vodOffset && (x.vodOffset = C.getCurrentTime() / 1e3),
              hy(),
              (z1 = !0))
          : B2(!1, 2))
      : ((N1 = H1 = 0), (z1 = !1)),
      (U1 = J1);
  }
  function yy(e) {
    if (!e) {
      if (!(M1 < Iy() - 1)) return void B2(!1, 2);
      M1++;
    }
    (H1 = 0),
      Ey(),
      r && !x.vodOffset && (x.vodOffset = C.getCurrentTime() / 1e3),
      hy(),
      (z1 = !0);
  }
  function wy() {
    O1 && ((j1 = []), xy(!0), H2());
  }
  function xy(e) {
    e && Ty(),
      r && G2(),
      _("controls_holder"),
      _("progress_pause_holder"),
      (O1 = !1),
      window.clearInterval(A1),
      window.clearInterval(b1),
      (x.Play_WasPlaying = 0),
      E_(),
      $7(!0),
      z2(),
      document.body.removeEventListener("keydown", Gy),
      document.removeEventListener("visibilitychange", ly),
      (x.vodOffset = 0),
      window.clearInterval(E1),
      window.clearInterval(R1),
      (px = 0);
  }
  function by() {
    (X1 = !1),
      (q1 = Q1 = 0),
      n(),
      d0(),
      jy(J1 / 1e3, px, !0),
      m("progress_bar_jump_to", g),
      (document.getElementById("progress_bar_steps").style.display = "none"),
      (k1 = C1);
  }
  function Ay(e) {
    if ((jy(J1 / 1e3, px, !0), V2(), $2(), e)) {
      ky();
      for (var t = (M1 = 0); t < Iy(); t++) {
        if (j1[t].id === k1) {
          M1 = t;
          break;
        }
        -1 !== j1[t].id.indexOf(k1) && (M1 = t);
      }
      Ey(), Py("stream_quality"), n(), Sy();
    }
    o0();
  }
  function ky() {
    (j = 1), (hp = 0), Cy();
  }
  function Cy() {
    j < 0
      ? (j = 0)
      : (l("pause_button", "progress_bar_div_focus"),
        l("next_button", "progress_bar_div_focus"),
        l("back_button", "progress_bar_div_focus"),
        l("progress_bar_div", "progress_bar_div_focus"),
        j
          ? 1 === j
            ? (hp
                ? 1 === hp
                  ? c("next_button", "progress_bar_div_focus")
                  : -1 === hp && c("back_button", "progress_bar_div_focus")
                : c("pause_button", "progress_bar_div_focus"),
              m1(),
              m("progress_bar_jump_to", g),
              (document.getElementById("progress_bar_steps").style.display =
                "none"))
            : 2 === j &&
              (_1(),
              m("progress_bar_jump_to", g),
              (document.getElementById("progress_bar_steps").style.display =
                "none"))
          : (c("progress_bar_div", "progress_bar_div_focus"),
            m1(),
            q1 &&
              (Oy(),
              (document.getElementById("progress_bar_steps").style.display =
                "inline-block"))));
  }
  function Sy() {
    Sg = window.setTimeout(by, 5e3 + W1);
  }
  function Ey() {
    1 === Iy()
      ? ((document.getElementById("control_arrow_up_" + e1).style.opacity =
          "0"),
        (document.getElementById("control_arrow_down" + e1).style.opacity =
          "0"))
      : M1
      ? M1 === Iy() - 1
        ? ((document.getElementById("control_arrow_up_" + e1).style.opacity =
            "1"),
          (document.getElementById("control_arrow_down" + e1).style.opacity =
            "0.2"))
        : ((document.getElementById("control_arrow_up_" + e1).style.opacity =
            "1"),
          (document.getElementById("control_arrow_down" + e1).style.opacity =
            "1"))
      : ((document.getElementById("control_arrow_up_" + e1).style.opacity =
          "0.2"),
        (document.getElementById("control_arrow_down" + e1).style.opacity =
          "1")),
      Py("controls_name_" + e1);
  }
  function Py(e) {
    var t;
    j1[M1] &&
      j1[M1].hasOwnProperty("id") &&
      ((t =
        -1 !== (k1 = j1[M1].id).indexOf("source")
          ? k1.replace("source", Te)
          : k1),
      f(e, (t += j1[M1].band + j1[M1].codec)));
  }
  function Iy() {
    return j1.length;
  }
  function jy(e, t, n) {
    f("progress_bar_current_time", F2(e)),
      n && (gg.style.width = (e / t) * 100 + "%");
  }
  function My() {
    if (J2())
      return (
        (mv = !0),
        Y2(Nn),
        window.setTimeout(function () {
          (mv = !1), K2();
        }, 1e3)
      );
    if ((t0(), !P() && r)) {
      j2() && C.pause();
      try {
        C.seekTo(0 < $1 ? 1e3 * $1 : 0);
      } catch (e) {
        return K2(), console.log("PlayVod_jump " + e);
      }
      (ap = G1 = !1),
        (J1 = 1e3 * $1),
        Ty(),
        (Qr = O1 ? $1 : hx),
        op && n_(),
        j2() || C.play();
    }
    m("progress_bar_jump_to", g),
      (document.getElementById("progress_bar_steps").style.display = "none"),
      m(
        "pause_button",
        '<div ><i class="pause_button3d icon-pause"></i> </div>'
      ),
      (X1 = !1),
      ($1 = q1 = Q1 = 0);
  }
  function By() {
    (Z1 = Q1 = 0), Ly(Mv[1]);
  }
  function Ly(e) {
    q1 &&
      !j &&
      (document.getElementById("progress_bar_steps").style.display =
        "inline-block"),
      60 < Math.abs(e)
        ? f("progress_bar_steps", jn + e / 60 + Ln)
        : f("progress_bar_steps", e ? jn + e + Mn : jn + Mv[1] + Mn);
  }
  function Oy() {
    f(
      "progress_bar_jump_to",
      Oe + " (" + (q1 < 0 ? "-" : "") + F2(Math.abs(q1)) + ")" + Ve + F2($1)
    );
  }
  function Vy(e, t) {
    var n = r ? C.getCurrentTime() / 1e3 : 0;
    window.clearTimeout(x1),
      (X1 = !0),
      Q1 < Mv.length - 1 && Z1++ % 6 == 0 && Q1++,
      (q1 += Mv[Q1] * e),
      ($1 = n + q1),
      t < ($1 = O1 ? 10 * Math.floor($1 / 10) : $1)
        ? ((q1 = t - n - Mv[1]), ($1 = n + q1), (Z1 = Q1 = 0))
        : $1 < 0 && ((q1 = 0 - n), ($1 = Z1 = Q1 = 0)),
      Oy(),
      (gg.style.width = ($1 / t) * 100 + "%"),
      Ly(Mv[Q1] * e),
      (x1 = window.setTimeout(By, 1e3));
  }
  function Ty() {
    var e = J1 / 1e3,
      t = "#" + x.ChannelVod_vodId;
    300 < e && e < px - 300
      ? (Y1[t] && delete Y1[t],
        (Y1[t] = e),
        sh("PlayVod_VodIds", JSON.stringify(Y1)))
      : px - 300 < e &&
        Y1[t] &&
        (delete Y1[t], sh("PlayVod_VodIds", JSON.stringify(Y1)));
  }
  function Fy() {
    by(),
      b("dialog_vod_start"),
      Ry(),
      (K1 = 0),
      Uy(),
      window.setTimeout(function () {
        _("controls_holder");
      }, 1e3);
  }
  function Dy() {
    return sf("dialog_vod_start");
  }
  function Uy() {
    c("dialog_vod_" + K1, "dialog_end_icons_focus");
  }
  function Ry() {
    l("dialog_vod_" + K1, "dialog_end_icons_focus");
  }
  function Ny() {
    xy(!0), Jf(S, T, Gy);
  }
  function Gy(e) {
    if (S1 === Ng || Dy())
      switch (e.keyCode) {
        case ua:
          !W7() || (Fg && P())
            ? E() && !Dy()
              ? (n(),
                2 === j ? v1(2, -1) : j || (Vy(-1, px), (W1 = 2500)),
                Sy())
              : Dy()
              ? (Ry(), K1 ? K1-- : K1++, Uy())
              : P()
              ? (C0(), k0(), 1 === (vv = --vv < 0 ? 3 : vv) && (vv = 0), A0())
              : Dy() ||
                (Ay(!0), (j = 0), Cy(), n(), Vy(-1, px), (W1 = 2500), Sy())
            : S && !g7 && (oA(), S--, iA());
          break;
        case _a:
          !W7() || (Fg && P())
            ? !Ig || E() || P()
              ? E() && !Dy()
                ? (n(),
                  2 === j ? v1(2, 1) : j || (Vy(1, px), (W1 = 2500)),
                  Sy())
                : Dy()
                ? (Ry(), K1 ? K1-- : K1++, Uy())
                : P()
                ? (C0(), k0(), 1 === (vv = 3 < ++vv ? 0 : vv) && (vv = 2), A0())
                : Dy() || Ay(!0)
              : (Ay(!0), (j = 0), Cy(), n(), Vy(1, px), (W1 = 2500), Sy())
            : S < K7() - 1 && !g7 && (oA(), S++, iA());
          break;
        case ra:
          P()
            ? (C0(),
              document.body.removeEventListener("keydown", Gy, !1),
              document.body.addEventListener("keyup", D0, !1),
              (Vg = !1),
              (sg = Gy),
              (ag = window.setTimeout(R0, 250)))
            : E() && !Dy()
            ? (n(), j < 2 ? (j--, Cy()) : g1(2, 1), Sy())
            : W7()
            ? W7()
              ? nA()
              : Dy() || Ay(!0)
            : Z7();
          break;
        case ma:
          P()
            ? N0()
            : E() && !Dy()
            ? (n(), j < 2 ? (j++, Cy()) : g1(2, -1), Sy())
            : W7()
            ? $7()
            : Ig && u0()
            ? f1()
            : Dy() || Ay(!0);
          break;
        case fa:
          Dy()
            ? ((t = K1),
              Fy(),
              X2(),
              A(function () {
                t
                  ? (delete Y1["#" + x.ChannelVod_vodId],
                    (x.vodOffset = 0),
                    oy())
                  : ((x.vodOffset = Y1["#" + x.ChannelVod_vodId]),
                    (J1 = 1e3 * x.vodOffset),
                    jy(x.vodOffset, px, !0),
                    dy());
              }))
            : P()
            ? Fg
              ? S0(2)
              : ((Tg = 2), (sg = Gy), G0(), Jf(S, T, z0))
            : E()
            ? (n(),
              j
                ? 1 === j
                  ? (x.Play_ChatForceDisable || (O2() ? C_(y[0]) : S_()),
                    P() || v0(2))
                  : h1(2)
                : q1 && My(),
              Sy())
            : W7()
            ? Kv(Ny)
            : Ay(!0);
          break;
        case ya:
        case ba:
        case a:
          F0(!0);
          break;
        case da:
          !P() && O2() && (v0(2), x.Play_ChatForceDisable || C_(y[0]));
          break;
        case oa:
          P() || O2() || (v0(2), x.Play_ChatForceDisable || S_());
          break;
        case aa:
        case ka:
          x.Play_ChatForceDisable || (O2() ? C_(y[0]) : S_()), P() || v0(2);
          break;
        case va:
        case ga:
          I[n1].enterKey(2);
          break;
        case pa:
          (i = d1), g1(2, 1), (i = r1);
          break;
        case ha:
          (i = d1), g1(2, -1), (i = r1);
          break;
        case ca:
          E() || (Ay(!0), (j = 0), Cy()), n(), Vy(-1, px), (W1 = 2500), Sy();
          break;
        case la:
          E() || (Ay(!0), (j = 0), Cy()), n(), Vy(1, px), (W1 = 2500), Sy();
          break;
        case sa:
          l0(), wy();
          break;
        case wa:
          d || (rh("Reloading"), window.location.reload(!0));
      }
    else
      switch (e.keyCode) {
        case ya:
        case ba:
        case a:
          e0() || bg ? ($2(), wy()) : Z2();
      }
    var t;
  }
  var Hy,
    zy,
    M = {},
    qy = !1,
    Xy = 350,
    Qy = !0,
    Jy = !1,
    Yy = !0;
  function Ky(e) {
    return [
      e + "_thumbdiv",
      e + "_img",
      e + "_infodiv",
      e + "_title",
      e + "_createdon",
      e + "_game",
      e + "_viewers",
      e + "_duration",
      e + "_cell",
      "cpempty_",
      e + "_scroll",
      e + "_lang",
      e + "_row",
    ];
  }
  function B() {
    for (var e = {}, t = 0; t < arguments.length; t += 1)
      for (
        var n = arguments[t], i = Object.keys(n), o = 0;
        o < i.length;
        o += 1
      )
        e[i[o]] = n[i[o]];
    return e;
  }
  function Wy() {
    (x.Main_Go = M.screen),
      M.label_init(),
      document.body.addEventListener("keydown", L, !1),
      _(M.ids[10]),
      M.status ? (Nf(M.posY), rw(!0), Lf()) : $y();
  }
  function Zy() {
    M.label_exit && M.label_exit(),
      document.body.removeEventListener("keydown", L),
      b(M.ids[10]),
      vf(),
      Aw();
  }
  function $y() {
    lf(),
      nh(),
      Rf(M.table),
      vf(),
      (M.cursor = null),
      (M.after = ""),
      (M.status = !1),
      (M.TopRowCreated = !1),
      (M.offset = 0),
      (M.offsettop = 0),
      (M.idObject = {}),
      (M.Cells = []),
      (M.FirstLoad = !0),
      (M.itemsCount = 0),
      (M.posX = 0),
      (M.posY = 0),
      (M.row_id = 0),
      (M.currY = 0),
      (M.loadChannelOffsset = 0),
      (M.followerChannels = []),
      (M.followerChannelsDone = !1),
      (M.coloumn_id = 0),
      (M.data = null),
      (M.data_cursor = 0),
      (M.dataEnded = !1),
      hf(),
      ew();
  }
  function ew() {
    (M.loadingData = !0),
      (M.loadingDataTry = 0),
      (M.loadingDataTimeout = 3500),
      tw();
  }
  function tw() {
    if ((M.set_url(), M.use_hls)) {
      var e = M.url + Tm,
        t = M.loadingDataTimeout,
        n = M.HeaderQuatity,
        i = M.token,
        o = ow,
        d = nw,
        a = new XMLHttpRequest();
      a.open("GET", e, !0), (a.timeout = t), (mm[2][1] = i);
      for (var s = 0; s < n; s++) a.setRequestHeader(mm[s][0], mm[s][1]);
      (a.ontimeout = function () {}),
        (a.onreadystatechange = function () {
          4 === a.readyState &&
            (200 === a.status
              ? o(a.responseText)
              : 2 < n && (401 === a.status || 403 === a.status)
              ? qa(0, 0, ew, iw)
              : d());
        }),
        a.send(null);
    } else
      _h(
        M.url + (M.use_helix ? "" : Tm),
        M.loadingDataTimeout,
        M.HeaderQuatity,
        M.token,
        ow,
        nw,
        null,
        null,
        M.use_helix
      );
  }
  function nw() {
    M.loadingDataTry++,
      M.loadingDataTry < M.loadingDataTryMax
        ? ((M.loadingDataTimeout += 500), tw())
        : iw();
  }
  function iw() {
    (M.loadingData = !1),
      M.itemsCount
        ? (M.dataEnded = !0)
        : (s7(x.Main_Go),
          (M.FirstLoad = !1),
          uf(),
          gf(ae),
          _("topbar"),
          _("side_panel_new_holder"),
          M.HasSwitches
            ? ((M.emptyContent = !0), M.addSwitches(), cw())
            : M.key_exit());
  }
  function ow(e) {
    M.concatenate(e);
  }
  function dw(e, t, n) {
    var i = document.createElement("div");
    return (
      i.setAttribute("id", e),
      i.setAttribute(Um, JSON.stringify(t)),
      i.classList.add(M.thumbclass),
      (i.innerHTML = n),
      i
    );
  }
  function aw(e, t, n) {
    return dw(
      t[5] + e,
      n,
      '<div id="' +
        t[0] +
        e +
        '" class="stream_thumbnail_game"><div class="stream_thumbnail_live_game"><img id="' +
        t[1] +
        e +
        '" class="stream_img" alt="" src="' +
        n[0] +
        '" onerror="this.onerror=null;this.src=\'' +
        M.img_404 +
        '\'"></div><div id="' +
        t[2] +
        e +
        '" class="stream_thumbnail_game_text_holder"><div class="stream_text_holder"><div id="<div id="' +
        t[3] +
        e +
        '" class="stream_info_game_name">' +
        n[1] +
        "</div>" +
        ("" !== n[2]
          ? '<div id="' +
            t[4] +
            e +
            '"class="stream_info_live" style="width: 100%; display: inline-block;">' +
            n[2] +
            "</div>"
          : "") +
        "</div></div></div>"
    );
  }
  function sw(e, t, n, i) {
    var o = -1 !== i[1].indexOf(Ee);
    return dw(
      n[8] + e,
      t,
      '<div id="' +
        n[0] +
        e +
        '" class="stream_thumbnail_live"><div class="stream_thumbnail_live_img"><img id="' +
        n[1] +
        e +
        '" class="stream_img" alt="" src="' +
        i[0] +
        zm +
        '" onerror="this.onerror=null;this.src=\'' +
        M.img_404 +
        '\'"></div><div id="' +
        n[2] +
        e +
        '" class="stream_thumbnail_live_text_holder"><div class="stream_text_holder"><div style="line-height: 1.6ch;"><div id="' +
        n[3] +
        e +
        '" class="stream_info_live_name" style="width:' +
        (o ? 99 : 66) +
        '%; display: inline-block;"><i class="icon-' +
        (t[2] ? "refresh" : "circle") +
        ' live_icon strokedeline" style="color: ' +
        (t[2] ? "#FFFFFF" : o ? "#FED000" : "red") +
        ';"></i> ' +
        i[1] +
        '</div><div id="' +
        n[7] +
        e +
        '"class="stream_info_live" style="width:' +
        (o ? 0 : 33) +
        '%; float: right; text-align: right; display: inline-block;">' +
        i[5] +
        '</div></div><div id="' +
        n[4] +
        e +
        '"class="stream_info_live_title">' +
        f4.parse(i[2]) +
        '</div><div id="' +
        n[5] +
        e +
        '"class="stream_info_live">' +
        ("" !== i[3] ? J + i[3] : "") +
        '</div><div id="' +
        n[6] +
        e +
        '"class="stream_info_live">' +
        i[4] +
        "</div></div></div></div>"
    );
  }
  function cw() {
    if (M.status) pf(M.posX, M.posY, M.ColoumnsCount, M.itemsCount);
    else {
      if (M.emptyContent) gf(M.empty_str());
      else {
        M.status = !0;
        for (
          var e = document.getElementById(M.table), t = 0;
          t < (M.Cells.length < M.visiblerows ? M.Cells.length : M.visiblerows);
          t++
        )
          e.appendChild(M.Cells[t]);
      }
      (M.FirstLoad = !1),
        bm
          ? (x.Never_run_new && ((rm = q_), (x.Play_WasPlaying = 0)),
            x.warning_new_api2 &&
              (m("dialog_warning_extra_text", Fd),
              _("dialog_warning_extra"),
              window.addEventListener("keydown", Uh, !0),
              window.addEventListener("keyup", Uh, !0),
              window.addEventListener("keypress", Uh, !0),
              Eh(function () {
                Rh();
              }, 6e4),
              (rm = q_)),
            (x.warning_new_api2 = !1),
            O.restor_playback.defaultValue && x.Play_WasPlaying && M.status
              ? (Vf(x.Main_Go),
                (x.Main_Go = rm),
                x.vodOffset || (x.vodOffset = 1),
                (px = x.vodOffset + 1),
                Y2(On),
                A(function () {
                  (1 === x.Play_WasPlaying ? Yf : Zf)(),
                    If(!0),
                    window.setTimeout(function () {
                      mv || K2();
                    }, 2e3),
                    uw();
                }))
              : rm !== q_ && rm !== sm && rm !== z_
              ? (b(M.ids[10]),
                A(function () {
                  Vf(x.Main_Go),
                    (x.Main_Go = rm),
                    Sw(),
                    Mf(),
                    pm ? ((bm = !1), uf()) : uw(!0);
                }))
              : A(function () {
                  (x.Search_isSearching = !1),
                    (x.Main_BeforeChannelisSet = !1),
                    (x.Main_BeforeAgameisSet = !1),
                    rw(!(x.Never_run_new = !1)),
                    Lf(),
                    uw();
                }))
          : (rw(!0), Lf(), uw());
    }
  }
  function lw(e) {
    switch (e.keyCode) {
      case fa:
      case ya:
      case ba:
      case a:
        Af(),
          wf(),
          document.body.addEventListener("keydown", L, !1),
          document.body.removeEventListener("keydown", lw),
          rw(!0);
    }
  }
  function uw(e) {
    (bm = !1),
      e || uf(),
      _("topbar"),
      _("side_panel_new_holder"),
      (x.Sidepannel_IsUser ? u7 : r7)(),
      s7(x.Main_Go);
  }
  function rw(e) {
    if (M.emptyContent) {
      if (!M.HasSwitches) return M.key_exit(M.emptyContent);
      M.posY = -1;
    }
    if (M.posY < 0)
      return (
        yw(),
        (document.getElementById(M.ids[10]).style.top = ""),
        M.emptyContent || pf(M.posX, M.posY + 1, M.ColoumnsCount, M.itemsCount)
      );
    2 < M.posY &&
    M.data_cursor + sx > M.data.length &&
    !M.dataEnded &&
    !M.loadingData
      ? ew()
      : M.posY + M.ItemsReloadLimit > M.itemsCount / M.ColoumnsCount &&
        M.data_cursor < M.data.length &&
        M.loadDataSuccess(),
      M.addrow(e, M.posY);
  }
  function _w(e) {
    return null !== document.getElementById(e);
  }
  function mw(e, t) {
    var n;
    M.currY < t
      ? ((M.currY = M.posY),
        2 < t &&
          (function e(t) {
            M.Cells[t + 2]
              ? (document.getElementById(M.table).appendChild(M.Cells[t + 2]),
                _w(M.ids[12] + (t - 3)) &&
                  (Qy && Yy && !Jy
                    ? ((Jy = !(Qy = !1)),
                      document
                        .getElementById(M.ids[12] + (t - 3))
                        .classList.add("animate_height"),
                      window.setTimeout(function () {
                        fw(M.ids[12] + (t - 3)), (Qy = !0);
                      }, Xy))
                    : fw(M.ids[12] + (t - 3))))
              : M.loadingData &&
                window.setTimeout(function () {
                  e(t);
                }, 10);
          })(t))
      : M.currY > t &&
        ((M.currY = M.posY),
        1 < t &&
          M.Cells.length > t + 3 &&
          ((n = document.getElementById(M.table)).insertBefore(
            M.Cells[t - 2],
            n.childNodes[0]
          ),
          document
            .getElementById(M.ids[12] + (t - 2))
            .classList.add("animate_height"),
          Qy && Yy && !Jy
            ? ((Jy = !(Qy = !1)),
              A(function () {
                document
                  .getElementById(M.ids[12] + (t - 2))
                  .classList.remove("animate_height");
              }),
              window.setTimeout(function () {
                fw(M.ids[12] + (t + 3)), (Qy = !0);
              }, Xy))
            : (document
                .getElementById(M.ids[12] + (t - 2))
                .classList.remove("animate_height"),
              fw(M.ids[12] + (t + 3))))),
      hw(e);
  }
  function fw(e) {
    (e = document.getElementById(e)) && e.remove();
  }
  function hw(e) {
    c(M.ids[0] + M.posY + "_" + M.posX, Dm),
      pf(M.posX, M.posY, M.ColoumnsCount, M.itemsCount),
      M.addFocus(M.posY, M.ids, e);
  }
  function pw(e, t) {
    (M.offsettop && M.offsettopFontsize === V("global_font_offset")) ||
      (M.Cells[(e = t || t + e)] &&
        ((M.offsettop =
          document.getElementById(M.ids[0] + e + "_0").offsetTop / Kd),
        (M.offsettopFontsize = V("global_font_offset"))));
  }
  function gw(e, t, n) {
    pw(1, e),
      (Gf(e) || n) &&
        (0 < e
          ? Pf(e + 1, 0, t[0]) &&
            (document.getElementById(t[10]).style.top =
              "calc(7.65% - " + M.offsettop + "em)")
          : (document.getElementById(t[10]).style.top = "")),
      Hf();
  }
  function vw(e, t) {
    $f(M.posY + "_" + M.posX, M.ids), Aw(), (M.posY += e), (M.posX = t), rw();
  }
  function yw() {
    M.posX > M.SwitchesIcons.length - 1
      ? (M.posX = 0)
      : M.posX < 0 && (M.posX = M.SwitchesIcons.length - 1),
      c(M.ids[0] + "y_" + M.posX, "stream_switch_focused");
  }
  function ww() {
    M.posX > M.SwitchesIcons.length - 1
      ? (M.posX = 0)
      : M.posX < 0 && (M.posX = M.SwitchesIcons.length - 1),
      l(M.ids[0] + "y_" + M.posX, "stream_switch_focused");
  }
  function xw(e) {
    kf()
      ? Af()
      : xf()
      ? wf()
      : (e === M.screen ? (x.Main_Go = q_) : (x.Main_Go = e), Zy());
  }
  function bw(e) {
    if (!M.HasSwitches || M.posY || -1 !== e || M.emptyContent) {
      if (M.HasSwitches && -1 === M.posY && Pf(0, M.posX, M.ids[0]))
        (M.posY = 0), rw(), ww();
      else
        for (var t = 0; t < M.ColoumnsCount; t++)
          if (Pf(M.posY + e, M.posX - t, M.ids[0])) return vw(e, M.posX - t);
    } else
      $f(M.posY + "_" + M.posX, M.ids),
        Aw(),
        (M.posY = -1),
        M.posX > M.SwitchesIcons.length - 1 && (M.posX = 1),
        yw();
  }
  function Aw() {
    M.HasAnimateThumb &&
      (window.clearInterval(M.AnimateThumbId),
      _w(M.ids[6] + M.posY + "_" + M.posX) &&
        _(M.ids[6] + M.posY + "_" + M.posX));
  }
  function kw(e, t) {
    M.HasSwitches && -1 === M.posY
      ? ((M.posY = -1), ww(), (M.posX += t ? -1 : 1), yw())
      : Pf(M.posY, M.posX + e, M.ids[0])
      ? vw(0, M.posX + e)
      : Pf(M.posY + e, t, M.ids[0]) && vw(e, t);
  }
  function Cw() {
    Sw(),
      x.Main_Go === cm && (x.Main_OldgameSelected = x.Main_gameSelected),
      Aw(),
      document.body.removeEventListener("keydown", L),
      n7(L);
  }
  function Sw() {
    Pf(M.posY, M.posX, M.ids[0])
      ? $f(M.posY + "_" + M.posX, M.ids)
      : M.posY < 0 && (ww(), (M.posY = 0), (M.posX = 0));
  }
  function Ew(e) {
    e.keyCode === fa &&
      (window.clearTimeout(Hy),
      document.body.removeEventListener("keyup", Ew),
      document.body.addEventListener("keydown", L, !1),
      qy || M.key_play());
  }
  function L(e) {
    if (!M.FirstLoad && !Xf())
      switch ((qf(), e.keyCode)) {
        case pa:
          !M.loadingData &&
            M.key_pgUp &&
            (Sw(),
            M.screen === em
              ? t7(v[0].access_token ? M.key_pgUp : M.key_pgUpNext)
              : t7(M.key_pgUp));
          break;
        case ha:
          !M.loadingData &&
            M.key_pgDown &&
            (Sw(),
            M.screen === Z_
              ? t7(v[0].access_token ? M.key_pgDown : M.key_pgDownNext)
              : t7(M.key_pgDown));
          break;
        case ya:
        case ba:
        case a:
          M.loadingData || M.key_exit();
          break;
        case ua:
          if (M.loadingData) break;
          M.posX ? kw(-1, M.ColoumnsCount - 1) : Cw();
          break;
        case _a:
          M.dataEnded ||
          M.posX < M.ColoumnsCount - 1 ||
          M.Cells.length - 1 >= M.posY + 1
            ? (M.posX === M.ColoumnsCount - 1 && !Qy) || kw(1, 0)
            : rw(!0);
          break;
        case ra:
          Qy && bw(-1);
          break;
        case ma:
          M.dataEnded || M.Cells.length - 1 >= M.posY + 1
            ? Qy && bw(1)
            : rw(!0);
          break;
        case da:
        case oa:
        case aa:
        case ka:
          M.key_play();
          break;
        case fa:
          V("enter_refresh")
            ? M.key_play()
            : (document.body.removeEventListener("keydown", L, !1),
              document.body.addEventListener("keyup", Ew, !1),
              (qy = !1),
              (Hy = window.setTimeout(ah, 400)));
          break;
        case va:
        case ga:
          ah();
          break;
        case wa:
          d || (rh("Reloading"), window.location.reload(!0));
      }
  }
  function Pw() {
    M.status &&
      -1 === M.posY &&
      (ww(), (M.posY = 0), (M.posX = 0), c(M.ids[0] + "0_" + M.posX, Dm)),
      document.body.removeEventListener("keydown", L),
      b(M.ids[10]);
  }
  function Iw() {
    m(
      Ww.ids[3] + "y_2",
      Ax
        ? '<i class="icon-heart" style="color: #6441a4; font-size: 100%;"></i>' +
            g +
            g +
            At
        : '<i class="icon-heart-o" style="color: #FFFFFF; font-size: 100%; "></i>' +
            g +
            g +
            (Ws() ? kt : It)
    );
  }
  document.body.addEventListener("keyup", function () {
    Jy = !1;
  });
  var jw,
    Mw = 0;
  function Bw() {
    Tw((Mw = M.periodPos)),
      Ow(),
      _("dialog_period"),
      document.body.removeEventListener("keydown", L),
      document.body.addEventListener("keydown", Dw, !1);
  }
  function Lw() {
    window.clearTimeout(zy);
  }
  function Ow() {
    window.clearTimeout(zy), (zy = window.setTimeout(Vw, 6e3));
  }
  function Vw() {
    Lw(),
      Fw(Mw),
      document.body.removeEventListener("keydown", Dw, !1),
      document.body.addEventListener("keydown", L, !1),
      b("dialog_period");
  }
  function Tw(e) {
    c("dialog_period_" + e, "button_dialog_focused");
  }
  function Fw(e) {
    l("dialog_period_" + e, "button_dialog_focused");
  }
  function Dw(e) {
    switch (e.keyCode) {
      case ya:
      case ba:
      case a:
        Fw(Mw), Vw();
        break;
      case ua:
        Lw(), Ow(), Fw(Mw), Tw((Mw = --Mw < 1 ? 4 : Mw));
        break;
      case _a:
        Lw(), Ow(), Fw(Mw), Tw((Mw = 4 < ++Mw ? 1 : Mw));
        break;
      case da:
      case oa:
      case aa:
      case ka:
      case fa:
        Vw(), M.periodPos !== Mw && ((M.periodPos = Mw), M.SetPeriod(), $y());
    }
  }
  function Uw() {
    window.clearTimeout(jw);
  }
  function Rw() {
    window.clearTimeout(jw), (jw = window.setTimeout(Nw, 6e3));
  }
  function Nw() {
    Uw(),
      document.body.removeEventListener("keydown", Hw, !1),
      document.body.addEventListener("keydown", L, !1),
      b("dialog_OffSet");
  }
  function Gw(e) {
    f("dialog_OffSet_val", e),
      0 < e && e < 5e3
        ? ((document.getElementById("dialog_OffSet_left").style.opacity = "1"),
          (document.getElementById("dialog_OffSet_right").style.opacity = "1"))
        : 5e3 === e
        ? ((document.getElementById("dialog_OffSet_left").style.opacity = "1"),
          (document.getElementById("dialog_OffSet_right").style.opacity =
            "0.2"))
        : ((document.getElementById("dialog_OffSet_left").style.opacity =
            "0.2"),
          (document.getElementById("dialog_OffSet_right").style.opacity = "1"));
  }
  function Hw(e) {
    switch (e.keyCode) {
      case ya:
      case ba:
      case a:
        Nw();
        break;
      case ua:
        Uw(),
          Rw(),
          M.OffSetPos--,
          M.OffSetPos < 0 && (M.OffSetPos = 0),
          Gw(100 * M.OffSetPos);
        break;
      case _a:
        Uw(),
          Rw(),
          M.OffSetPos++,
          50 < M.OffSetPos && (M.OffSetPos = 50),
          Gw(100 * M.OffSetPos);
        break;
      case da:
      case oa:
      case aa:
      case ka:
      case fa:
        Nw(),
          M.extraoffset !== M.OffSetPos &&
            ((M.extraoffset = 100 * M.OffSetPos), M.SetPeriod(), $y());
    }
  }
  var zw,
    qw,
    Xw,
    Qw,
    Jw,
    Yw,
    Kw,
    Ww,
    Zw,
    $w,
    ex,
    tx,
    nx,
    ix,
    ox,
    dx,
    ax,
    sx = 100,
    cx = "",
    lx = "",
    ux = "",
    rx = "",
    _x = "",
    mx = "",
    fx = "",
    hx = 0,
    px = 0,
    gx = "",
    vx = "",
    yx = "",
    wx = "",
    xx = "",
    bx = 1,
    Ax = !1,
    kx = function () {},
    Cx = {
      posX: 0,
      posY: 0,
      currY: 0,
      row_id: 0,
      offsettopFontsize: 0,
      offsettop: 0,
      coloumn_id: 0,
      dataEnded: !1,
      idObject: {},
      loadingData: !1,
      itemsCount: 0,
      loadingDataTryMax: 5,
      loadingDataTimeout: 3500,
      MaxOffset: 0,
      offset: 0,
      visiblerows: 3,
      status: !1,
      emptyContent: !1,
      itemsCountCheck: !1,
      FirstLoad: !1,
      row: 0,
      data: null,
      token: null,
      data_cursor: 0,
      loadDataSuccess: function () {
        var e = M.data.length - M.data_cursor;
        if (
          (e > M.ItemsLimit
            ? (e = M.ItemsLimit)
            : M.loadingData || (M.dataEnded = !0),
          M.HasSwitches && !M.TopRowCreated && M.addSwitches(),
          e)
        ) {
          M.row_id ||
            ((M.row = document.createElement("div")),
            M.rowClass && M.row.classList.add(M.rowClass),
            (M.row.id = M.ids[12] + M.row_id));
          var t = Math.ceil(e / M.ColoumnsCount),
            n = M.row_id + t;
          for (M.row_id; M.row_id < n; ) {
            for (
              M.coloumn_id === M.ColoumnsCount &&
                ((M.row = document.createElement("div")),
                M.rowClass && M.row.classList.add(M.rowClass),
                (M.row.id = M.ids[12] + M.row_id),
                (M.coloumn_id = 0)),
                M.coloumn_id;
              M.coloumn_id < M.ColoumnsCount && M.data_cursor < M.data.length;
              M.data_cursor++
            )
              M.data[M.data_cursor] && M.addCell(M.data[M.data_cursor]);
            if (M.coloumn_id === M.ColoumnsCount)
              (M.Cells[M.row_id] = M.row), M.row_id++;
            else if (M.data_cursor >= M.data.length) {
              "" !== M.row.innerHTML && (M.Cells[M.row_id] = M.row);
              break;
            }
          }
        }
        (M.emptyContent = !e && !M.status), cw();
      },
      addrow: function (e, t) {
        var n;
        M.currY < t
          ? ((M.currY = M.posY),
            (function e(t) {
              M.Cells[t + 1]
                ? (document.getElementById(M.table).appendChild(M.Cells[t + 1]),
                  _w(M.ids[12] + (t - 2)) &&
                    (Qy && Yy && !Jy
                      ? ((Jy = !(Qy = !1)),
                        document
                          .getElementById(M.ids[12] + (t - 2))
                          .classList.add("animate_height"),
                        window.setTimeout(function () {
                          fw(M.ids[12] + (t - 2)), (Qy = !0);
                        }, Xy))
                      : fw(M.ids[12] + (t - 2))))
                : M.loadingData &&
                  window.setTimeout(function () {
                    e(t);
                  }, 10);
            })(t))
          : M.currY > t &&
            ((M.currY = M.posY),
            t &&
              M.Cells.length > t + 1 &&
              M.Cells[t + 2] &&
              ((n = document.getElementById(M.table)).insertBefore(
                M.Cells[t - 1],
                n.childNodes[M.HasSwitches ? 1 : 0]
              ),
              document
                .getElementById(M.ids[12] + (t - 1))
                .classList.add("animate_height"),
              Qy && Yy && !Jy
                ? ((Jy = !(Qy = !1)),
                  A(function () {
                    document
                      .getElementById(M.ids[12] + (t - 1))
                      .classList.remove("animate_height");
                  }),
                  window.setTimeout(function () {
                    fw(M.ids[12] + (t + 2)), (Qy = !0);
                  }, Xy))
                : (document
                    .getElementById(M.ids[12] + (t - 1))
                    .classList.remove("animate_height"),
                  fw(M.ids[12] + (t + 2))))),
          hw(e);
      },
      key_exit: function (e) {
        Sw(),
          this.screen !== cm || e
            ? (this.screen !== nm &&
                this.screen !== tm &&
                this.screen !== im) ||
              e
              ? (this.screen !== um && this.screen !== lm) || e
                ? (this.screen !== am && this.screen !== dm) || e
                  ? Cw()
                  : (xw(om), Mf())
                : (xw(cm), Mf())
              : (x.Main_Go === x.Main_BeforeSearch
                  ? (x.Main_Go = q_)
                  : (x.Main_Go = x.Main_BeforeSearch),
                (x.Search_isSearching = !1),
                xw(x.Main_Go),
                Mf())
            : (x.Games_return
                ? ((x.Main_Go = tm),
                  (x.Main_gameSelected = x.gameSelectedOld),
                  (x.gameSelectedOld = null))
                : ((x.Main_Go = x.Main_BeforeAgame), (x.Main_BeforeAgame = J_)),
              xw(x.Main_Go),
              Mf());
      },
      concatenate: function (e) {
        this.data
          ? ((e = JSON.parse(e))[this.object] &&
              ((this.data = this.data.concat(e[this.object])),
              (this.offset = this.data.length)),
            this.setMax(e))
          : ((e = JSON.parse(e)),
            (this.data = e[this.object]),
            this.data
              ? ((this.offset = this.data.length), this.setMax(e))
              : (this.data = []),
            this.loadDataSuccess()),
          (this.loadingData = !1);
      },
    },
    Sx = {
      ItemsLimit: Cm,
      ColoumnsCount: 3,
      ItemsReloadLimit: e,
      thumbclass: "stream_thumbnail_live_holder",
      rowClass: "animate_height_transition",
      addFocus: function (e, t, n, i) {
        this.AnimateThumb(this), gw(e, t, n);
      },
      setMax: function (e) {
        e[this.object].length < sx - 5 && (this.dataEnded = !0);
      },
      img_404: $d,
      HasSwitches: !0,
      period: ["day", "week", "month", "all"],
      empty_str: function () {
        return se + g + (this.highlight ? le : ce);
      },
      AnimateThumbId: null,
      HasAnimateThumb: !0,
      Vod_newImg: new Image(),
      AnimateThumb: function (t) {
        var n;
        window.clearInterval(t.AnimateThumbId),
          bx &&
            ((n = document.getElementById(
              this.ids[6] + this.posY + "_" + this.posX
            )),
            (this.Vod_newImg.onload = function () {
              (this.onload = null),
                b(t.ids[1] + t.posY + "_" + t.posX),
                (n.style.backgroundSize = n.offsetWidth + "px");
              var e = 0;
              t.AnimateThumbId = window.setInterval(function () {
                n.style.backgroundPosition =
                  "0px " + (++e % 10) * -n.offsetHeight + "px";
              }, 650);
            }),
            (this.Vod_newImg.src = n.style.backgroundImage.replace(
              /url\(['"]?(.*?)['"]?\)/i,
              "$1"
            )));
      },
      addCellBase: function (e, t) {
        var n, i;
        this.idObject[e._id] ||
          -1 !== (t + "").indexOf("404_processing") ||
          (this.itemsCount++,
          (this.idObject[e._id] = 1),
          this.row.appendChild(
            ((n = this.row_id + "_" + this.coloumn_id),
            (i = this.ids),
            (t = [
              t.replace("{width}x{height}", yh),
              e.channel.display_name,
              re + Df(e.created_at),
              f4.parse(e.title),
              Cf(e.views) + _e,
              e.resolutions.chunked
                ? Sf(
                    e.resolutions.chunked.slice(-4),
                    parseInt(e.fps.chunked) || 0,
                    e.channel.broadcaster_language
                  )
                : "",
              e.length,
              e.animated_preview_url,
              e._id,
              e.channel.broadcaster_language,
              e.game,
              e.channel.name,
              e.increment_view_count_url,
              e.channel._id,
              e.channel.logo,
              e.channel.partner,
            ]),
            dw(
              i[8] + n,
              t,
              '<div id="' +
                i[0] +
                n +
                '" class="stream_thumbnail_live"><div id="' +
                i[6] +
                n +
                '" class="stream_thumbnail_live_img" ' +
                (t[7]
                  ? ' style="width: 100%; padding-bottom: 56.25%; background-size: 0 0; background-image: url(' +
                    t[7] +
                    ');"'
                  : "") +
                '><img id="' +
                i[1] +
                n +
                '" class="stream_img" alt="" src="' +
                t[0] +
                '" onerror="this.onerror=null;this.src=\'' +
                M.img_404 +
                '\'"></div><div id="' +
                i[2] +
                n +
                '" class="stream_thumbnail_live_text_holder"><div class="stream_text_holder"><div style="line-height: 1.6ch;"><div id="' +
                i[3] +
                n +
                '" class="stream_info_live_name" style="width: 72%; display: inline-block;">' +
                t[1] +
                '</div><div id="' +
                i[7] +
                n +
                '"class="stream_info_live" style="width:27%; float: right; text-align: right; display: inline-block;">' +
                t[5] +
                '</div></div><div id="' +
                i[11] +
                n +
                '"class="stream_info_live_title">' +
                t[3] +
                '</div><div id="' +
                i[9] +
                n +
                '"class="stream_info_live">' +
                ("" !== t[10] && null !== t[10] ? Ht + J + t[10] : "") +
                '</div><div style="line-height: 1.3ch;"><div id="' +
                i[4] +
                n +
                '"class="stream_info_live" style="width: auto; display: inline-block;">' +
                t[2] +
                "," +
                g +
                t[4] +
                '</div><div id="' +
                i[5] +
                n +
                '"class="stream_info_live" style="width: 9ch; display: inline-block; float: right; text-align: right;">' +
                F2(t[6]) +
                "</div></div></div></div></div>"
            ))
          ),
          this.coloumn_id++);
      },
      addCell: function (e) {
        this.addCellBase(e, e.preview.template);
      },
    };
  var Ex = {
    ItemsReloadLimit: e,
    ItemsLimit: Cm,
    ColoumnsCount: 3,
    addFocus: gw,
    rowClass: "animate_height_transition",
    thumbclass: "stream_thumbnail_live_holder",
    img_404: $d,
    setMax: function (e) {
      this.use_helix
        ? ((this.cursor = e.pagination.cursor),
          (this.cursor && "" !== this.cursor) || (this.dataEnded = !0))
        : ((this.MaxOffset = e._total),
          e[this.object]
            ? void 0 === this.MaxOffset
              ? e[this.object].length < 90 && (this.dataEnded = !0)
              : this.data.length >= this.MaxOffset && (this.dataEnded = !0)
            : (this.dataEnded = !0));
    },
    check_offset: function () {
      (900 <= this.offset ||
        (void 0 !== this.MaxOffset &&
          this.offset &&
          this.offset + sx > this.MaxOffset)) &&
        (this.dataEnded = !0);
    },
    empty_str: function () {
      return se + g + xe;
    },
    addCell: function (e) {
      this.addCellTemp(e);
    },
    addCellTemp: function (e) {
      var t = this.use_helix ? e.user_id : e.channel._id;
      this.idObject[t] ||
        (this.itemsCount++,
        (this.idObject[t] = 1),
        this.use_helix
          ? this.row.appendChild(
              sw(
                this.row_id + "_" + this.coloumn_id,
                [e.user_login, e.user_id, Ef(e.type), e.game_id],
                this.ids,
                [
                  e.thumbnail_url.replace("{width}x{height}", yh),
                  e.user_name,
                  e.title,
                  e.game_name,
                  W + U2(e.started_at) + g + Y + Cf(e.viewer_count) + g + me,
                  "[" + e.language.toUpperCase() + "]",
                ]
              )
            )
          : this.row.appendChild(
              sw(
                this.row_id + "_" + this.coloumn_id,
                [e.channel.name, e.channel._id, Ef(e.broadcast_platform)],
                this.ids,
                [
                  e.preview.template.replace("{width}x{height}", yh),
                  e.channel.display_name,
                  e.channel.status,
                  e.game,
                  W + U2(e.created_at) + g + Y + Cf(e.viewers) + g + me,
                  Sf(
                    e.video_height,
                    e.average_fps,
                    e.channel.broadcaster_language
                  ),
                ]
              )
            ),
        this.coloumn_id++);
    },
  };
  var Px = {
    HeaderQuatity: 2,
    ItemsLimit: Cm,
    TopRowCreated: !1,
    ItemsReloadLimit: e,
    ColoumnsCount: 3,
    addFocus: gw,
    rowClass: "animate_height_transition",
    thumbclass: "stream_thumbnail_live_holder",
    cursor: null,
    object: "clips",
    period: ["day", "week", "month", "all"],
    img_404: $d,
    empty_str: function () {
      return se + g + ue;
    },
    HasSwitches: !0,
    SwitchesIcons: ["history", "play-1"],
    addSwitches: function () {
      (this.TopRowCreated = !0), (this.row = document.createElement("div"));
      for (var e, t, n = [g + g + z, g + g + Jn], i = 0; i < n.length; i++)
        (e =
          '<i class="icon-' +
          this.SwitchesIcons[i] +
          ' stream_channel_follow_icon"></i>' +
          n[i]),
          (t = document.createElement("div")).setAttribute(
            "id",
            this.ids[8] + "y_" + i
          ),
          (t.className = "stream_cell_period"),
          (t.innerHTML =
            '<div id="' +
            this.ids[0] +
            "y_" +
            i +
            '" class="stream_thumbnail_channel_vod" ><div id="' +
            this.ids[3] +
            "y_" +
            i +
            '" class="stream_channel_follow_game">' +
            e +
            "</div></div>"),
          this.row.appendChild(t);
      document.getElementById(this.table).appendChild(this.row);
    },
    setMax: function (e) {
      (this.cursor = this.use_helix ? e.pagination.cursor : e._cursor),
        (this.cursor && "" !== this.cursor) || (this.dataEnded = !0);
    },
    key_play: function () {
      -1 === this.posY
        ? this.loadingData ||
          (this.posX
            ? ((pp = !0),
              ww(),
              (this.posX = 0),
              (this.posY = 0),
              Kf(this.posY + "_" + this.posX, this.ids, L))
            : Bw())
        : Kf(this.posY + "_" + this.posX, this.ids, L);
    },
    Cells: [],
    addCell: function (e) {
      var t, n, i;
      this.idObject[e.tracking_id] ||
        (this.itemsCount++,
        (this.idObject[e.tracking_id] = 1),
        this.row.appendChild(
          ((t = this.row_id + "_" + this.coloumn_id),
          (n = this.ids),
          (e = [
            e.slug,
            e.duration,
            e.game,
            e.broadcaster.name,
            e.broadcaster.display_name,
            e.broadcaster.logo.replace("150x150", "300x300"),
            e.broadcaster.id,
            null !== e.vod ? e.vod.id : null,
            null !== e.vod ? e.vod.offset : null,
            f4.parse(e.title),
            "[" + e.language.toUpperCase() + "]",
            Kt + Df(e.created_at),
            Cf(e.views) + _e,
            e.thumbnails.medium,
          ]),
          (i = "" !== e[2] ? J + e[2] : ""),
          dw(
            n[8] + t,
            e,
            '<div id="' +
              n[0] +
              t +
              '" class="stream_thumbnail_live"><div class="stream_thumbnail_live_img"><img id="' +
              n[1] +
              t +
              '" class="stream_img" alt="" src="' +
              e[13] +
              '" onerror="this.onerror=null;this.src=\'' +
              M.img_404 +
              '\'"></div><div id="' +
              n[2] +
              t +
              '" class="stream_thumbnail_live_text_holder"><div class="stream_text_holder"><div style="line-height: 1.6ch;"><div id="' +
              n[3] +
              t +
              '" class="stream_info_live_name" style="width: 72%; display: inline-block;">' +
              e[4] +
              '</div><div id="' +
              n[7] +
              t +
              '"class="stream_info_live" style="width:27%; float: right; text-align: right; display: inline-block;">' +
              e[10] +
              '</div></div><div id="' +
              n[11] +
              t +
              '"class="stream_info_live_title">' +
              e[9] +
              '</div><div id="' +
              n[4] +
              t +
              '"class="stream_info_live">' +
              i +
              '</div><div style="line-height: 1.3ch;"><div id="' +
              n[6] +
              t +
              '"class="stream_info_live" style="width: auto; display: inline-block;">' +
              e[11] +
              "," +
              g +
              e[12] +
              '</div><div id="' +
              n[5] +
              t +
              '"class="stream_info_live" style="width: 6ch; display: inline-block; float: right; text-align: right;">' +
              F2(e[1]) +
              "</div></div></div></div></div></div>"
          ))
        ),
        this.coloumn_id++);
    },
  };
  var Ix = {
    HeaderQuatity: 2,
    thumbclass: "stream_thumbnail_game_holder",
    ItemsReloadLimit: Sm,
    ItemsLimit: 45,
    rowClass: "animate_height_transition_games",
    ColoumnsCount: 5,
    addFocus: function (e, t, n) {
      pw(1, e),
        (Gf(e) || n) &&
          (0 < e
            ? Pf(e + 1, 0, t[0]) &&
              (document.getElementById(t[10]).style.top =
                "calc(4.5% - " + M.offsettop + "em)")
            : (document.getElementById(t[10]).style.top = "")),
        Hf();
    },
    img_404:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVQAAAHbCAMAAACjqpKKAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABjUExURQAAAFNTX1paYlBQWwAAAv7+/v///VJSXv///1FRXUtLU0VETQkIDFVVX05OWO/v8FJSWxYWGEJCRCkoLX5+gaurrjIyNru7u+fn6dLS152coXZ1e8TEyGhobPf3+d7e34uLj6Msg3EAABAXSURBVHja7N2HgqIwFAVQICA9Iih29P+/chNCExJs6IT1Pt2doo7MmZdCSMBwEZOHAQKgAhWoCKACFagIoAIVqAigAhWoCKACFagIoAIVqAigAhWoCKACFagIoAIVqAigAhWoQEUAFahARQAVqEBFABWoQEUAFahARQAVqEBFABWoQEUAFahARQAVqEBFABWoQAUqAqhABSoCqEAFKgKoQAUqAqhABSoCqEAFKgKoQAUqAqhABSoCqEAFKgKoQAUqUBFABSpQEUAFKlARQAUqUBFABSpQEUAFKlARQAUqUBFABSpQEUAFKlARQAUqUIGKACpQgYr4GVRTfPDLkDxefc80gTo9av0soE6KqnwKUF9FLR8nhAAVqCj+aKiA+iBqgi7VJEGI8DSpbyWUxEkV9eOUmIRYpk+thLgEqE+hxj5J2C2gvSDsFgTUZ9z8CUB9BpXVA5QkNOxHkLL/0jBIEkKSxDeB+gQqNVkxT2KriXN1s8p/cUzLTEamPoXquwml58NGHmsrYKQmUJ9C5T37IFjvi14seRS7jRWydoq1ZkB9BpU18EFw3Tn98BzP85ztmaFSoD5fpzLUi8cJxa2MxaJYOF6xOaeM9H9FFfs0vLU2zfqrd6LpkbKuP0Pde71YsPAchhpSXv7frlTNKvREdb+Cuuih+kB9BXUxjBrVnABV7+Ivdtu/ger8DKrfDoZ8tE4V7VaJmvz/qP40Q0fPocZA1RG13tXQGNWcEtX9WdQhCiHl+JHYYvLOXyuU9lMb1Em6VG73KEO5vc8T/weo0/ZTZ4FabxQyFajzQhUb+GwLxp6vQO00VL+M+kq3AKgfQFUX/8lRy5b1V1CJn3wDNdEZlZjsbhLXZNvlU/aVK47XkwrVfzDc6hg/nycV0CEqH6wuUVPiBnF78OXVMMsuYB2vDV98DNWP2T02Y5Y7cczSrDJlm8yUE25c3h5InEqVvUq2R1Wi1iP/cWv6aqLyPrXJPohR1dd6K58r/rHPCiMlfL4DqWc+BJRPfHgt2OvSdL2XFH6Po1ppmATJqz98GLwO4M2jXqisgJuE+kEQhBNFmktQeZ7yY1RxnoaTRUDLwu+/OCT0ueLPCk/sutaUkcSShqrgrsX2nCSTvlXCqlPWrJq6ZSorssRaXw+qCRDPx+G0k6GyXN1vpovDYX1OKPVfnpn5QVRWk5LzenO67HbLyWIx2E0VqNO9Q7Hc7TfXc8xZXxy6/GSXyrSY6X4npju8Hbzy5CNSfVRHVABOXb2++zbsXly21+PZZB1BU4+GqplPGruBdT1dlkXheN40rsLts8HfgCXrZXOk1PTLHsDTXYCPoRJiWscNn6Uz6a/8cVSvnEnkFCdWA8S8wOmESql1PJyKZjtng1q9x257ZRWAq1emBsGZtdVFPeXJmQ+qyIIlq1fNkJhaoNa7iUHACn8hEJwZFX+nep+i2GuIGh5PRWPgzKmhEuXKuVzjwNUP1Wn+7rMq/tXmXg5x6GuHuheFacoOwLeKP/+4Y6hUD9R6MZnI1BmHszskfOBbJAoB6vSovk6oizl6ljvDLaqvCyoRqIv/ANUH6hSkYiqRQH3l4AxQH0HVo/VP/itUd26oi4V28DeoRAfUes2jCnXBdqurXQKxtkyshSj3EPiX8v3Guk8unjkWj+4wdRcMFovbP634knf+iU8I+fuG6i6qaFqbHZfm9ymH7eWok47JyH6+EtWfB6pXJ0gdizbHut/u5l4nsSYP8aaep0T1fe1RHWe3P+0VcdoqYv/hWHo3uyldVC1a/3uZutyuj2tpXI9WmEqDntefjONhL2upWlTdGyrWptI0DPgkEBrQoA7+GU1Xtm0bkojyzlMnjzA9n24buB6qq33rvzsEOUMVc4GC5saVR1HFk8V97HZnPk//M/aSlKOqM1WHQ9T3Ud2QuOXK9c5MBT5HyAqySI66SvmBzfJp9Vm9VP/M0XCrOdl+/XP4G9PgOIJaP21qVLMzWd9vGQRg0kyRrGZ0VuOPHNVToFK/Ra1/2xFUm6Fa1a/nq/+Q4rPu9/ofZWXZdGl4vJ+p30Gte3CDJ1dKZaay/tIQlR+kcAdJRJKRTM2T2Jwo+kN5WqFWieqSXpTYfNbzaKaS5mQzzQzm8eJvNc8kNze/fr/OW0u2pn1I60zldZN0I0U6JEGqQmU7f5JMdU2GaqtR3Tvp51YVyk312flYRzU7Pm7rDt2KvySa0x2lZfGXoCYhn/jhN0kmco6SeLT4Vwt/E/JmDOpVnVD55rE/eNyrS5tE4ZvqKVAJXwtQN6gVVmxZNIsMRUNlWapzm3S+pX6ws2FxHItFWc0vEuiDKrY1jlVTkWm4lhb/5cEKFC/iqIYKdargqPX6DNFtCfQq/uX6hl7U+0mhvPiXe1Ty/aMkzKSFnxd/mky1/1Qtkvhz1Juy1bTWlMZxmGfqCLZeMRzf3K3Vr1DuUa2ysTcaf3Dw5DwNErb1bswzhLTFvx3++xpqbwIKT9QkyLNVpIx8IxkFdS7nKLIVr7AlqOw77Bbxm+p1tvIHymK1ylLq8lOt8tOH+u0Mhb9CvVmKR8N8VTrcRsORHZybmelibPRytkdjgGrcNF72+8HynlVApugOmn+OemNKwmzM1DZYpnZH7Ksx4WdR+64SpGdRoyjLA5N14vhSr79Gvdm9I0G+GkfpFf/HUFfDiOxuriqlVtKXKp7NagBKk4TySuAPUeuatP46TLPoKdSm+I9lVjYYjj4eU957vZd96bE39F1+GaxUfztWAyQxS1by96id3dJUFH5DHQy1GDZV/Uy9fU24Gaxr2l1Xxt2Izpfdkq/X2jWxZLdrJqlLRL2ah3FMdUPN75ka0tZ/DJV9Hu+Hh+YYqm2o34krGdG6qA/ItksBHW+TyRo+Q1QAVsxrgL9v/Utd0yex5eaR/QiqLFPVL7HpadgJeyhTjzvJ2SoXh0z1RnYW8ssGkP8ctfx2MEQtPoTKM5Ukv4nqFGXxH8lufmeoTnVe5e5M9hHUFUMtr7WgEWqSR+Okc0BNXB32qD6JaowU/4lRy04VQ+Vj1rqhGnNHFUcvdUQd7/xPjqro/KtQpfsmLaqudeqkqOH2W6isSyVOtqod6gStf/lDbLv6JBzLVP6sSFn8vf67jTRUOmYqnRCVHyxpY3A2H8dZbpK0mbiWTYNq/OeodmRtOnMml8M5uZfODMt1BtSHUJmHM3auhWpWbvn/NgXqI8U/Wi87Tczg+UX9nfIkF0B9FHXniMv2qNZIVydJ458A9UHUsvg7qvMC8FNOtqPcmxyoj6JWiSpfhVKedbJ6HKjPZOojS3OUqLy1Wzpe7+Atu8tQbaDeRy2ZRGvXq5Ud77C6s+8PVCmqOH4tMtXrL5A6KLq1yNSHUJONbP3VNZGtIMojoN4t/pw1y2V8Rzl1BtSHUKtJV7fjWcb5Ils3yTq7QL2PKpl0Vcb5IvtJ2xyo9+pUu+0o3Uy64qh7R7LemKFG6PyPdv7HwtrL/jibHLupd3ZTn0X1fgL1zQGVsTj/Lup7Q3/I1A8MUgN1gGrfO5zi3TucAlTZIerRA3/e3QN/qFOfP0Tt3DtEjUz9wLQfoI6i2kCdA+oZqCj+k6O+OukXqEDVAvWxhRSoUz+w5Oe1TE1+IFN5638ZnpPy8FLxt9l+gn2+DE5nybS2qR3pt5DiU10q2w63g1WUl/XKMJ5nLV9gnQZXwtstd5vctn8DVRwKyazhOSPD6JWSX25cLj2dpbX6LVTZAvPIeK3150tWV8oF6z9S/G3b+FL8EqrU1TZe7qUa0i0UZ7KIfqWhmj4j1Yn6M62/NCtte9qawRbL/W1k6ofq1PI0SkAFKlCBClSgAhWoQH0ftTl9sgSVzAU1Mt7Y85xMtRr5Z2jtSWnrXC2v8SVO9EzmgWrZXxw6Uauu8vp0w+1lPlpUb5aotgaotH9Bmtmi7q6K6yN9OeJje97Lw37mmVrst1rEqX+Rr97FaGeF2l567o/Dc5pLMvYnG88Pddpr079zvcT6vvDmjiqm9RfO36MunEV1L3qsM0TV6Tq+bXQrKH511upitMl3Lpz436N6QJ2Gtf8IUF9WbW4eUL+Qwx5QP4DqAfV/QCVA/SDqaGQHp7kkhTMbXN5L5cE7/1ZIxBmWv4h6Z3QtPxTNLv6s8lRMDRYj/7FuqNedU+iyq/9UspaZ6lz4bqqlF6qRXS9F9zwIMxGtKtViebryK7xqhro6bi9LnQu/pNvfDk8u95t1HGhWp/KrEx23y5GTI+ixmyo/uwirUbfXf+3dAVPaMBiAYWPwcmmbmNLZUxD1///KJU2rE+nqmMAXfd/bbYNznDxLWoRAdsZbYSN1tWriUTU/ySdQ9fBP/dMQuHl6fNk546VN/7SCv9o8Pt8+iX465eDsv71/uNtW2nkv7Zia3hZRb++ex1cshJVZbw5O/5s497c7pUP4uIH5xUdq2pt3t3l4TtvE3Qpr/hu6v3+Ix9O0AWDQ0lDTMpCrVduH7S+JvWzu5tpsXnbKp+NphBWGmj8ZZdpWV1pd9dd9wFXaad0eN1BP+JDq3Rt5Lr/Q5+NDk6qerfJ62CZSKSVtpOa3gVx+OdrhZT9rF9Km7/5Dw2bw+ckpFbzAE9Ufh1dxqNdOG7s/v+O5KaixiKrPjro4//N7luSN03Gkpv2o1Ove2mMu6OkK7825pr/SyoZrv/wkteTySLUma6bf7bvdy/+vo1A1qKCCCiqooIIKKqjHoI6Pgu3nV6iUgWpOEKiggloAqgEV1BJQlTGgfnNU/R1Qg1KXQZ0wpzdpqfgXrZxeXp8qmHR8OUUb66WhXpXbMFKDDkaD+tWvUVmjmP5fZ5pRtQX1C02HF/7ivRKG2q6KVU2oXURVpzmkHosaH1K1hQ7V4dNTm6ar5aHadds0JY7V0bTtK6cuNv3nWvddsypQdZU/57evK+VURH39oUYCqq2Go2ppqtk0Tn6v44nq7fQvA9XpustHgOJq2jj54zgdlkqKQtXW133XNiWadn3t81J+JWz6K5VVi6vt1j6k5fw2rT8ThZpOnb6Op6vC6vt+7Z3TaXFfvAtaFKqJB6Sgp8/Lq6Y/xTcs6w3DutN4D6wVNlLjL+XcdWHFbzie9cNwWtDayDqmjgX3j03LlJcu718/dztLt7d/vQnm5F2ZM/d65xYu718/dztLt7d0vUhUW1hFoB77n7B0eQlh7uvm/t23Rv0JnX36f3bELt3+Z2fAOUcoqBxTOaZyTIUAVFBBJVBBBZVABRVUAhVUUAlUUEElUEEFlUAFFVQCFVRQCVRQQSVQQQUVVAIVVFAJVFBBJVBBBZVABRVUAhVUUAlUUEElUEEFlUAFFVQCFVRQQSVQQQWVQAUVVAIVVFAJVFBBJVBBBZVABRVUAhVUUAlUUEElUEEFFVQCFVRQCVRQQSVQQQWVQAUVVAIVVFAJVFBBJVBBBZVABRVUAhVUUEElUEEFlUAFFVQCFVRQCVRQQSVQQQWVQAUVVAIVVFAJVFBBJVBBBZVABRXUH9tvlWLdWXsgA/8AAAAASUVORK5CYII=",
    empty_str: function () {
      return se + g + be;
    },
    key_play: function () {
      $f(this.posY + "_" + this.posX, this.ids),
        (x.Main_gameSelected = JSON.parse(
          document
            .getElementById(this.ids[5] + this.posY + "_" + this.posX)
            .getAttribute(Um)
        )),
        (x.Main_gameSelected_id = x.Main_gameSelected[3]),
        (x.Main_gameSelected = x.Main_gameSelected[1]),
        document.body.removeEventListener("keydown", L),
        (x.Main_BeforeAgame = this.screen),
        (x.Main_Go = cm),
        (x.Main_BeforeAgameisSet = !0),
        document.body.removeEventListener("keydown", L),
        b(this.ids[10]),
        Mf();
    },
    setMax: function (e) {
      this.use_helix
        ? ((this.cursor = e.pagination.cursor),
          (this.cursor && "" !== this.cursor) || (this.dataEnded = !0))
        : ((this.MaxOffset = e._total),
          this.data.length >= this.MaxOffset && (this.dataEnded = !0));
    },
    addCell: function (e) {
      var t = this.isLive || this.screen === J_,
        n = this.hasGameProp ? e.game : e,
        i = this.use_helix ? n.id : n._id;
      this.idObject[i] ||
        (this.itemsCount++,
        (this.idObject[i] = 1),
        this.use_helix
          ? this.row.appendChild(
              aw(this.row_id + "_" + this.coloumn_id, this.ids, [
                n.box_art_url.replace("{width}x{height}", wh),
                n.name,
                "",
                i,
              ])
            )
          : this.row.appendChild(
              aw(this.row_id + "_" + this.coloumn_id, this.ids, [
                n.box.template.replace("{width}x{height}", wh),
                n.name,
                t
                  ? Cf(e.channels) + g + ne + h + Y + Cf(e.viewers) + g + me
                  : "",
                i,
              ])
            ),
        this.coloumn_id++);
    },
  };
  var jx = {
    ItemsLimit: 48,
    ColoumnsCount: Em,
    addFocus: function (e, t, n) {
      pw(2, e),
        (Gf(e) || n) &&
          (1 < e
            ? M.Cells.length < 6
              ? (M.Cells[e + 1] && e + 2 < M.Cells.length) ||
                4 === M.Cells.length
                ? (document.getElementById(t[10]).style.top =
                    "calc(39% - " + M.offsettop + "em)")
                : 3 < M.Cells.length &&
                  (document.getElementById(t[10]).style.top =
                    "calc(39% - " + (3 * M.offsettop) / 2 + "em)")
              : M.Cells[e + 2]
              ? (document.getElementById(t[10]).style.top =
                  "calc(39% - " + M.offsettop + "em)")
              : (document.getElementById(t[10]).style.top =
                  "calc(39% - " + (3 * M.offsettop) / 2 + "em)")
            : (document.getElementById(t[10]).style.top = "")),
        Hf();
    },
    ItemsReloadLimit: Pm,
    thumbclass: "stream_thumbnail_channel_holder",
    rowClass: "animate_height_transition_channel",
    img_404: Zd,
    setMax: function (e) {
      (this.MaxOffset = e._total),
        (this.data.length >= this.MaxOffset || void 0 === this.MaxOffset) &&
          (this.dataEnded = !0);
    },
    empty_str: function () {
      return se + g + Ae;
    },
    addCellTemp: function (e) {
      var t, n;
      this.idObject[e._id] ||
        (this.itemsCount++,
        (this.idObject[e._id] = 1),
        this.row.appendChild(
          ((t = this.row_id + "_" + this.coloumn_id),
          (n = this.ids),
          (e = [e.name, e._id, e.logo, e.display_name, e.partner]),
          dw(
            n[8] + t,
            e,
            '<div id="' +
              n[0] +
              t +
              '" class="stream_thumbnail_channel" ><div class="stream_thumbnail_channel_img"><img id="' +
              n[1] +
              t +
              '" alt="" class="stream_img" src="' +
              e[2] +
              '" onerror="this.onerror=null;this.src=\'' +
              M.img_404 +
              '\'"></div><div id="' +
              n[2] +
              t +
              '" class="stream_thumbnail_channel_text_holder"><div id="' +
              n[3] +
              t +
              '" class="stream_info_channel_name">' +
              e[3] +
              (e[4]
                ? g +
                  g +
                  '</div><div class="stream_info_channel_partner_icon"><img style="width: 2ch;" alt="" src="' +
                  na +
                  '">'
                : "") +
              "</div></div></div>"
          ))
        ),
        this.coloumn_id++);
    },
  };
  function Mx() {
    null === x.Main_OldgameSelected &&
      (x.Main_OldgameSelected = x.Main_gameSelected),
      _("label_side_panel"),
      (x.Main_OldgameSelected === x.Main_gameSelected &&
        M.gameSelected === x.Main_gameSelected) ||
        (M.status = !1),
      (M.gameSelected = x.Main_gameSelected),
      (x.Main_OldgameSelected = x.Main_gameSelected),
      r7(),
      (x.Sidepannel_IsUser = !1),
      s7(M.screen);
  }
  function Bx() {
    (M.gameSelected = x.Main_gameSelected), b("label_side_panel");
  }
  function Lx() {
    M.OldUserName !== v[0].name && (M.status = !1),
      (M.OldUserName = v[0].name),
      u7(),
      s7(M.screen);
  }
  function Ox(e, t) {
    m(
      "top_lable",
      e +
        g +
        (t
          ? '<div style="font-size: 65%;display: inline-block;">' + t + "</div>"
          : "")
    );
  }
  var Vx = 0,
    Tx = 0,
    Fx = !1;
  function Dx() {
    Gx(!1),
      document.body.removeEventListener("keydown", Rx),
      Ux(),
      (x.Main_Go = x.Main_BeforeSearch),
      b("label_side_panel"),
      _("label_refresh"),
      (V_.value = ""),
      b("search_scroll");
  }
  function Ux() {
    l("chanel_button", "button_search_focused"),
      l("game_button", "button_search_focused"),
      l("live_button", "button_search_focused"),
      Vx &&
        (Tx
          ? 1 === Tx
            ? c("game_button", "button_search_focused")
            : 2 === Tx && c("live_button", "button_search_focused")
          : c("chanel_button", "button_search_focused"));
  }
  function Rx(e) {
    if (!Fx)
      switch (e.keyCode) {
        case ya:
        case ba:
        case a:
          kf() ? Af() : xf() ? wf() : (Dx(), If());
          break;
        case ua:
          1 === Vx && (--Tx < 0 && (Tx = 2), Ux());
          break;
        case _a:
          1 === Vx && (2 < ++Tx && (Tx = 0), Ux());
          break;
        case ra:
          1 === Vx && ((Vx = 0), Ux(), Nx());
          break;
        case ma:
          Vx ? 1 === Vx && ((Vx = 0), Ux(), Nx()) : (Gx(!1), (Vx = 1), Ux());
          break;
        case da:
        case oa:
        case aa:
        case fa:
          Vx
            ? V_.value && "" !== V_.value
              ? ((x.Search_data = V_.value),
                (V_.value = ""),
                Dx(),
                A(function () {
                  Tx
                    ? 1 === Tx
                      ? ((M = ox), Wy())
                      : 2 === Tx && ((M = dx), Wy())
                    : ((M = ax), Wy());
                }))
              : (gf(G),
                window.setTimeout(function () {
                  vf();
                }, 1e3))
            : Nx();
      }
  }
  function Nx() {
    document.body.removeEventListener("keydown", Rx),
      document.body.addEventListener("keydown", Hx, !1),
      (V_.placeholder = Z),
      V_.focus(),
      (Fx = !0);
  }
  function Gx(e) {
    var t;
    V_.blur(),
      null !== V_ &&
        ((t = V_.cloneNode(!0)),
        V_.parentNode.replaceChild(t, V_),
        (V_ = document.getElementById("search_input"))),
      document.body.removeEventListener("keydown", Hx),
      (V_.placeholder = te + Z),
      e && document.body.addEventListener("keydown", Rx, !1),
      (Fx = !1);
  }
  function Hx(e) {
    switch (e.keyCode) {
      case ya:
      case a:
        xf() ? wf() : kf() ? Af() : (Dx(), If());
        break;
      case Ca:
        V_.value = "";
        break;
      case Aa:
      case xa:
      case ma:
        Gx(!0), (Vx = 1), Ux();
        break;
      case ba:
        V_.value = V_.value.slice(0, -1);
        break;
      case ka:
        V_.value += " ";
    }
  }
  var zx = 0,
    O = {
      restor_playback: { values: ["no", "yes"], defaultValue: 2 },
      clip_auto_play_next: { values: ["no", "yes"], defaultValue: 2 },
      single_click_exit: { values: ["no", "yes"], defaultValue: 1 },
      app_animations: { values: ["no", "yes"], defaultValue: 1 },
      enter_refresh: { values: ["yes", "no"], defaultValue: 1 },
      show_screen_counter: { values: ["no", "yes"], defaultValue: 2 },
      live_feed_sort: {
        values: [
          "views_more",
          "views_less",
          "name_a-z",
          "name_z-a",
          "game_a-z",
          "game_z-a",
          "uptime_new",
          "uptime_old",
        ],
        defaultValue: 1,
      },
      live_notification: { values: ["no", "yes"], defaultValue: 2 },
      global_font_offset: { values: [-3, -2, -1, 0, 1, 2, 3], defaultValue: 4 },
      live_notification_time: {
        values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        defaultValue: 4,
      },
      buffer_live: {
        values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        defaultValue: 4,
      },
      buffer_vod: {
        values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        defaultValue: 5,
      },
      buffer_clip: {
        values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        defaultValue: 3,
      },
      end_dialog_counter: {
        values: ["disable", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        defaultValue: 4,
      },
      bitrate_min: {
        values: [
          "disable",
          11,
          10.5,
          10,
          9.5,
          9,
          8.5,
          8,
          7.5,
          7,
          6.5,
          6,
          5.5,
          5,
          4.5,
          4,
          3.5,
          3,
          2.5,
          2,
          1.5,
          1,
        ],
        defaultValue: 18,
      },
      videos_animation: { values: ["no", "yes"], defaultValue: 2 },
      thumb_quality: {
        values: ["very-low", "low", "normal", "high", "very-high"],
        defaultValue: 3,
      },
      clock_offset: {
        values: (function () {
          for (var e = [], t = 43200, n = 0; n < 48; n++)
            e.push("-" + F2(t)), (t -= 900);
          for (e.push(F2(0)), t = 900, n = 0; n < 48; n++)
            e.push(F2(t)), (t += 900);
          return e;
        })(),
        defaultValue: 49,
      },
      content_lang: { values: ["All"], set_values: [""], defaultValue: 1 },
      chat_opt: { values: ["None"], set_values: [""], defaultValue: 1 },
      highlight_rewards: { values: ["no", "yes"], defaultValue: 2 },
      highlight_atstreamer: { values: ["no", "yes"], defaultValue: 2 },
      highlight_atuser: { values: ["no", "yes"], defaultValue: 2 },
      highlight_user_send: { values: ["no", "yes"], defaultValue: 1 },
      show_sub: { values: ["no", "yes"], defaultValue: 2 },
      highlight_bits: { values: ["no", "yes"], defaultValue: 2 },
      show_actions: { values: ["no", "yes"], defaultValue: 1 },
      clear_chat: { values: ["no", "yes"], defaultValue: 2 },
      show_chatters: { values: ["no", "chatters", "viewers"], defaultValue: 2 },
      individual_lines: { values: ["no", "yes"], defaultValue: 2 },
      chat_individual_background: {
        values: ["disabled", "enabled", "bright", "dark"],
        defaultValue: 1,
      },
      chat_logging: { values: ["no", "yes"], defaultValue: 2 },
      chat_nickcolor: { values: ["no", "yes"], defaultValue: 2 },
      chat_timestamp: { values: ["no", "yes"], defaultValue: 1 },
    },
    qx = [
      [null, "viewer_count", 0],
      [null, "viewer_count", 1],
      [null, "user_login", 1],
      [null, "user_login", 0],
      [null, "game_name", 1],
      [null, "game_name", 0],
      [null, "started_at", 0],
      [null, "started_at", 1],
    ];
  var Xx = [],
    Qx = 0;
  function Jx() {
    rb(),
      document.body.removeEventListener("keydown", mb),
      b("label_side_panel"),
      _("label_refresh"),
      nb(),
      b("settings_holder");
  }
  function Yx(e, t) {
    return (
      '<div id="setting_title_' +
      e +
      '" class="settings_section">' +
      t +
      "</div>"
    );
  }
  function Kx(e, t) {
    return (
      '<div id="' +
      e +
      '_div" class="settings_div"><div id="' +
      e +
      '_name" class="settings_name">' +
      t +
      '</div><div class="settings_arraw_div"><div id="' +
      e +
      'arrow_left" class="left"></div></div><div id="' +
      e +
      '" class="strokedeline settings_value">' +
      $x(e) +
      '</div><div class="settings_arraw_div"><div id="' +
      e +
      'arrow_right" class="right"></div></div></div>'
    );
  }
  function Wx(e, t, n) {
    return (
      '<div id="' +
      e +
      '_div" class="settings_div"><div id="' +
      e +
      '_name" class="settings_name">' +
      t +
      '<div id="' +
      e +
      '_summary" class="settings_summary" style="font-size: 65%;">' +
      n +
      '</div></div><div class="settings_arraw_div"><div id="' +
      e +
      'arrow_left" class="left"></div></div><div id="' +
      e +
      '" class="strokedeline settings_value">' +
      $x(e) +
      '</div><div class="settings_arraw_div"><div id="' +
      e +
      'arrow_right" class="right"></div></div></div>'
    );
  }
  function Zx(e, t, n) {
    m(
      e + "_name",
      t +
        '<div id="' +
        e +
        '_summary" class="settings_summary" style="font-size: 65%;">' +
        n +
        "</div>"
    );
  }
  function $x(e) {
    return O[e].values[V(e)];
  }
  function V(e) {
    return O[e].defaultValue;
  }
  function eb(e) {
    return O[e].values.length - 1;
  }
  function tb(e) {
    var t,
      n = Xx[zx];
    c(n, "settings_value_focus"),
      c(n + "_div", "settings_div_focus"),
      ob(e),
      ub < zx && 13 === zx
        ? (((t = document.getElementById("settings_scroll")).scrollTop =
            t.scrollHeight),
          V("app_animations") &&
            ((n = t.scrollTop), (t.scrollTop = 0), _b(t, n, 450)))
        : zx < ub &&
          12 === zx &&
          ((t = document.getElementById("settings_scroll")),
          V("app_animations") ? _b(t, 0, 450) : (t.scrollTop = 0)),
      (ub = zx);
  }
  function nb() {
    var e = Xx[zx];
    (document.getElementById(e + "arrow_left").style.opacity = "0"),
      (document.getElementById(e + "arrow_right").style.opacity = "0"),
      l(e, "settings_value_focus"),
      l(e + "_div", "settings_div_focus");
  }
  function ib(e) {
    var t = Xx[e];
    sh(t, V(t) + 1), f(t, $x(t)), ob(e), db(e);
  }
  function ob(e) {
    var t, n;
    eb((e = Xx[e])) &&
      ((t = V(e)),
      (n = eb(e)),
      0 < t && t < n
        ? ((document.getElementById(e + "arrow_left").style.opacity = "1"),
          (document.getElementById(e + "arrow_right").style.opacity = "1"))
        : t === n
        ? ((document.getElementById(e + "arrow_left").style.opacity = "1"),
          (document.getElementById(e + "arrow_right").style.opacity = "0.2"))
        : ((document.getElementById(e + "arrow_left").style.opacity = "0.2"),
          (document.getElementById(e + "arrow_right").style.opacity = "1")));
  }
  function db(e) {
    "videos_animation" === (e = Xx[e])
      ? (bx = V("videos_animation"))
      : "clip_auto_play_next" === e
      ? (gp = V("clip_auto_play_next"))
      : "live_notification" === e
      ? (L7 = V("live_notification"))
      : "live_notification_time" === e
      ? (V7 = 1e3 * $x("live_notification_time"))
      : "single_click_exit" === e
      ? (bg = V("single_click_exit"))
      : "app_animations" === e
      ? sb()
      : "buffer_live" === e
      ? ab(1)
      : "buffer_vod" === e
      ? ab(2)
      : "buffer_clip" === e
      ? ab(3)
      : "end_dialog_counter" === e
      ? (wv = V("end_dialog_counter"))
      : "thumb_quality" === e
      ? xh()
      : "global_font_offset" === e
      ? ia()
      : "show_screen_counter" === e
      ? cb(V("show_screen_counter"))
      : "clock_offset" === e && (lb(), nh());
  }
  function ab(e) {
    try {
      e
        ? 1 === e
          ? (Bg = $x("buffer_live"))
          : 2 === e
          ? (V1 = $x("buffer_vod"))
          : 3 === e && (cp = $x("buffer_clip"))
        : ((Bg = $x("buffer_live")),
          (V1 = $x("buffer_vod")),
          (cp = $x("buffer_clip")));
    } catch (e) {}
  }
  function sb() {
    var t,
      n,
      e = V("app_animations"),
      i = e ? "" : "none";
    [
      "screen_holder",
      "screen_holder_channel",
      "screen_holder_switch",
      "screen_holder_user",
      "screen_holder_games",
      "animate_height_transition_channel",
      "animate_height_transition_games",
      "animate_height_transition",
      "side_panel_holder_ani",
      "scenefeed_background",
      "user_feed_notify",
      "user_feed_scroll_ani",
      "side_panel_fix",
      "side_panel_movel",
      "side_panel",
      "user_feed",
    ].forEach(function (e) {
      for (n = document.getElementsByClassName(e), t = 0; t < n.length; t++)
        n[t].style.transition = i;
    }),
      oA(),
      (n = document.getElementsByClassName(Dm));
    try {
      Array.prototype.forEach.call(n, function (e) {
        e.classList.remove(Dm);
      });
    } catch (e) {}
    (Dm = e ? "stream_thumbnail_focused" : "stream_thumbnail_focused_no_ani"),
      (S7 = e ? "feed_thumbnail_focused" : "feed_thumbnail_focused_no_ani"),
      (Yy = e);
  }
  function cb(e) {
    (e ? _ : b)("dialog_counter_text");
  }
  function lb() {
    var e = V("clock_offset");
    Hm = e < 48 ? -9e5 * (48 - e) : 9e5 * (e - 48);
  }
  var ub = 0;
  function rb() {
    (document.getElementById("settings_scroll").scrollTop = 0), (ub = 0);
  }
  function _b(n, e, i) {
    var o = n.scrollTop,
      d = e - o,
      a = 0;
    !(function e() {
      a += 3;
      var t = Math.easeInOutQuad(a, o, d, i);
      (n.scrollTop = t), a < i && setTimeout(e, 3);
    })();
  }
  function mb(e) {
    var t;
    switch (e.keyCode) {
      case ya:
      case ba:
      case a:
        xf() ? wf() : kf() ? Af() : (Jx(), If());
        break;
      case ua:
        0 < V((t = Xx[zx])) && (--O[t].defaultValue, ib(zx));
        break;
      case _a:
        V((t = Xx[zx])) < eb(t) && ((O[t].defaultValue += 1), ib(zx));
        break;
      case ra:
        0 < zx && (nb(), tb(--zx));
        break;
      case ma:
        zx < Qx - 1 && (nb(), tb(++zx));
        break;
      case fa:
        if (zx) {
          if (Ah(Xx[zx], "chat_opt")) {
            (t = [se, Ft]),
              (O.highlight_rewards.values = t),
              (O.highlight_atstreamer.values = t),
              (O.highlight_atuser.values = t),
              (O.highlight_user_send.values = t),
              (O.show_sub.values = t),
              (O.highlight_bits.values = t),
              (O.show_actions.values = t),
              (O.chat_individual_background.values = [Ed, Sd, fd, hd]),
              (O.chat_logging.values = t),
              (O.individual_lines.values = t),
              (O.chat_nickcolor.values = t),
              (O.chat_timestamp.values = t),
              (O.clear_chat.values = t),
              (O.show_chatters.values = [Ed, Id, Pd]);
            {
              var n = {
                chat_logging: {
                  defaultValue: O.chat_logging.defaultValue,
                  values: O.chat_logging.values,
                  title: ud,
                  summary: rd,
                },
                individual_lines: {
                  defaultValue: O.individual_lines.defaultValue,
                  values: O.individual_lines.values,
                  title: md,
                  summary: null,
                },
                chat_individual_background: {
                  defaultValue: O.chat_individual_background.defaultValue,
                  values: O.chat_individual_background.values,
                  title: cd,
                  summary: ld,
                },
                chat_timestamp: {
                  defaultValue: O.chat_timestamp.defaultValue,
                  values: O.chat_timestamp.values,
                  title: wd,
                  summary: null,
                },
                show_chatters: {
                  defaultValue: O.chat_timestamp.defaultValue,
                  values: O.chat_timestamp.values,
                  title: Md,
                  summary: Bd,
                },
                chat_nickcolor: {
                  defaultValue: O.chat_nickcolor.defaultValue,
                  values: O.chat_nickcolor.values,
                  title: pd,
                  summary: gd,
                },
                highlight_rewards: {
                  defaultValue: O.highlight_rewards.defaultValue,
                  values: O.highlight_rewards.values,
                  title: _d,
                  summary: null,
                },
                highlight_atstreamer: {
                  defaultValue: O.highlight_atstreamer.defaultValue,
                  values: O.highlight_atstreamer.values,
                  title: td,
                  summary: null,
                },
                highlight_atuser: {
                  defaultValue: O.highlight_atuser.defaultValue,
                  values: O.highlight_atuser.values,
                  title: nd,
                  summary: null,
                },
                highlight_user_send: {
                  defaultValue: O.highlight_user_send.defaultValue,
                  values: O.highlight_user_send.values,
                  title: id,
                  summary: null,
                },
                show_sub: {
                  defaultValue: O.show_sub.defaultValue,
                  values: O.show_sub.values,
                  title: od,
                  summary: null,
                },
                highlight_bits: {
                  defaultValue: O.highlight_bits.defaultValue,
                  values: O.highlight_bits.values,
                  title: dd,
                  summary: null,
                },
                clear_chat: {
                  defaultValue: O.clear_chat.defaultValue,
                  values: O.clear_chat.values,
                  title: xd,
                  summary: bd,
                },
                show_actions: {
                  defaultValue: O.show_actions.defaultValue,
                  values: O.show_actions.values,
                  title: ad,
                  summary: sd,
                },
              };
              var i = Io;
              Sh("keydown", mb);
              var o,
                d = i + h + h;
              for (o in ((fb = []), n))
                fb.push(o),
                  n[o].keyenter
                    ? (d += (function (e, t, n, i) {
                        return (
                          Xx.push(e),
                          t && (O[e].values = t),
                          i ? Wx(e, n, i) : Kx(e, n)
                        );
                      })(o, [Fn], n[o].title, null))
                    : (d += n[o].summary
                        ? Wx(o, n[o].title, n[o].summary)
                        : Kx(o, n[o].title));
              m("dialog_settings_text", d + Nd + Ue + "</div>"),
                c(fb[(hb = 0)], "settings_value_focus"),
                c(fb[0] + "_div", "settings_div_focus"),
                pb(fb[0]),
                _("dialog_settings"),
                Ch("keydown", gb);
            }
          }
        } else
          document.body.removeEventListener("keydown", mb),
            b("settings_main"),
            _("settings_lang"),
            Fb(),
            Ox(U + g + Tn),
            document.body.addEventListener("keydown", Db, !1),
            Bb((xb = 0)),
            Eb();
    }
  }
  Math.easeInOutQuad = function (e, t, n, i) {
    return (e /= i / 2) < 1
      ? (n / 2) * e * e + t
      : (-n / 2) * (--e * (e - 2) - 1) + t;
  };
  var fb = [],
    hb = 0;
  function pb(e) {
    var t, n;
    eb(e) &&
      ((t = V(e)),
      (n = eb(e)),
      0 < t && t < n
        ? ((k(e + "arrow_left").style.opacity = "1"),
          (k(e + "arrow_right").style.opacity = "1"))
        : t === n
        ? ((k(e + "arrow_left").style.opacity = "1"),
          (k(e + "arrow_right").style.opacity = "0.2"))
        : ((k(e + "arrow_left").style.opacity = "0.2"),
          (k(e + "arrow_right").style.opacity = "1")));
  }
  function gb(e) {
    var t;
    switch (e.keyCode) {
      case fa:
      case ba:
      case a:
        wb(fb[hb]), b("dialog_settings"), Sh("keydown", gb), Ch("keydown", mb);
        break;
      case ua:
        0 < V((t = fb[hb])) && yb(-1);
        break;
      case _a:
        V((t = fb[hb])) < eb(t) && yb(1);
        break;
      case ra:
        0 < hb && vb(-1);
        break;
      case ma:
        hb < fb.length - 1 && vb(1);
    }
  }
  function vb(e) {
    wb(fb[hb]),
      c((e = fb[(hb += e)]), "settings_value_focus"),
      c(e + "_div", "settings_div_focus"),
      pb(e);
  }
  function yb(e) {
    var t = fb[hb];
    (O[t].defaultValue += e), sh(t, V(t) + 1), f(t, $x(t)), pb(t), db(t);
  }
  function wb(e) {
    (k(e + "arrow_left").style.opacity = "0"),
      (k(e + "arrow_right").style.opacity = "0"),
      l(e, "settings_value_focus"),
      l(e + "_div", "settings_div_focus");
  }
  var xb = 0,
    bb = "",
    Ab = {
      All: { values: ["off", "on"], defaultValue: 2, set_values: "" },
      "Bulgarian [BG]": {
        values: ["off", "on"],
        defaultValue: 1,
        set_values: "bg",
      },
      "Čeština [CS]": {
        values: ["off", "on"],
        defaultValue: 1,
        set_values: "cs",
      },
      "Dansk [DA]": {
        values: ["off", "on"],
        defaultValue: 1,
        set_values: "da",
      },
      "Deutsch [DE]": {
        values: ["off", "on"],
        defaultValue: 1,
        set_values: "de",
      },
      "Ελληνικά [EL]": {
        values: ["off", "on"],
        defaultValue: 1,
        set_values: "el",
      },
      "English [EN]": {
        values: ["off", "on"],
        defaultValue: 1,
        set_values: "en",
      },
      "Español [ES]": {
        values: ["off", "on"],
        defaultValue: 1,
        set_values: "es",
      },
      "Suomi [FI]": {
        values: ["off", "on"],
        defaultValue: 1,
        set_values: "fi",
      },
      "Français [FR]": {
        values: ["off", "on"],
        defaultValue: 1,
        set_values: "fr",
      },
      "Italiano [IT]": {
        values: ["off", "on"],
        defaultValue: 1,
        set_values: "it",
      },
      "Magyar [HU]": {
        values: ["off", "on"],
        defaultValue: 1,
        set_values: "hu",
      },
      "日本語 [JA]": {
        values: ["off", "on"],
        defaultValue: 1,
        set_values: "ja",
      },
      "한국어 [KO]": {
        values: ["off", "on"],
        defaultValue: 1,
        set_values: "ko",
      },
      "Nederlands [NL]": {
        values: ["off", "on"],
        defaultValue: 1,
        set_values: "nl",
      },
      "Norsk [NO]": {
        values: ["off", "on"],
        defaultValue: 1,
        set_values: "no",
      },
      "Polski [PL]": {
        values: ["off", "on"],
        defaultValue: 1,
        set_values: "pl",
      },
      "Português [PT]": {
        values: ["off", "on"],
        defaultValue: 1,
        set_values: "pt",
      },
      "Română [RO]": {
        values: ["off", "on"],
        defaultValue: 1,
        set_values: "ro",
      },
      "Русский [RU]": {
        values: ["off", "on"],
        defaultValue: 1,
        set_values: "ru",
      },
      "Slovenčina [SK]": {
        values: ["off", "on"],
        defaultValue: 1,
        set_values: "sk",
      },
      "Svenska [SV]": {
        values: ["off", "on"],
        defaultValue: 1,
        set_values: "sv",
      },
      "ภาษาไทย [TH]": {
        values: ["off", "on"],
        defaultValue: 1,
        set_values: "th",
      },
      "Türkçe [TR]": {
        values: ["off", "on"],
        defaultValue: 1,
        set_values: "tr",
      },
      "Tiếng Việt [VI]": {
        values: ["off", "on"],
        defaultValue: 1,
        set_values: "vi",
      },
      "中文 [ZH]": { values: ["off", "on"], defaultValue: 1, set_values: "zh" },
    },
    kb = { en: "en,en-gb", es: "es,es-mx", pt: "pt,pt-br" },
    Cb = [],
    Sb = 0;
  function Eb() {
    "" === wm &&
      ((bb = Dn), (Ab.All.defaultValue = 1), Ob(0), c(Cb[0], "red_text"), Fb()),
      Zx("content_lang", Tn, bb);
  }
  function Pb() {
    if (((wm = ""), !jb("All"))) {
      for (var e in Ab) jb(e) && (wm += "," + Ab[e].set_values);
      Ah((wm = wm.slice(1)), ",") && (Vb(), (wm = ""));
    }
    bb = "" === wm ? Dn : wm.toUpperCase();
  }
  function Ib(e) {
    return Ab[e].values[jb(e)];
  }
  function jb(e) {
    return Ab[e].defaultValue;
  }
  function Mb(e) {
    return Ab[e].values.length - 1;
  }
  function Bb(e) {
    var t = Cb[xb];
    c(t, "settings_value_focus"),
      c(t + "_div", "settings_div_focus"),
      Tb(Cb[e]),
      (document.getElementById("settings_scroll").scrollTop =
        7 < xb ? document.getElementById(Cb[xb - 7]).offsetTop : 0);
  }
  function Lb() {
    var e = Cb[xb];
    (document.getElementById(e + "arrow_left").style.opacity = "0"),
      (document.getElementById(e + "arrow_right").style.opacity = "0"),
      l(e, "settings_value_focus"),
      l(e + "_div", "settings_div_focus");
  }
  function Ob(e) {
    e = Cb[e];
    sh(e, jb(e) + 1), f(e, Ib(e)), Tb(e);
  }
  function Vb() {
    for (var e in Ab)
      jb(e) &&
        (--Ab[e].defaultValue, sh(e, jb(e) + 1), f(e, Ib(e)), l(e, "red_text"));
  }
  function Tb(e) {
    var t = jb(e),
      n = Mb(e);
    0 < t && t < n
      ? ((document.getElementById(e + "arrow_left").style.opacity = "1"),
        (document.getElementById(e + "arrow_right").style.opacity = "1"))
      : t === n
      ? ((document.getElementById(e + "arrow_left").style.opacity = "1"),
        (document.getElementById(e + "arrow_right").style.opacity = "0.2"))
      : ((document.getElementById(e + "arrow_left").style.opacity = "0.2"),
        (document.getElementById(e + "arrow_right").style.opacity = "1"));
  }
  function Fb() {
    for (var e in Ab)
      -1 === e.indexOf("All") &&
        (document.getElementById(e + "_div").style.display = jb("All")
          ? "none"
          : "inline-block");
  }
  function Db(e) {
    var t;
    switch (e.keyCode) {
      case ya:
      case ba:
      case a:
        document.body.removeEventListener("keydown", Db),
          document.body.addEventListener("keydown", mb, !1),
          rb(),
          _("settings_main"),
          b("settings_lang"),
          Lb(),
          Pb(),
          Eb();
        break;
      case ua:
        0 < jb((t = Cb[xb])) &&
          (--Ab[t].defaultValue,
          Ob(xb),
          l(Cb[xb], "red_text"),
          -1 !== t.indexOf("All") && Fb());
        break;
      case _a:
        jb((t = Cb[xb])) < Mb(t) &&
          (Ah(t, "All") || Vb(),
          (Ab[t].defaultValue += 1),
          Ob(xb),
          c(Cb[xb], "red_text"),
          -1 !== t.indexOf("All") && Fb());
        break;
      case ra:
        0 < xb && (Lb(), Bb(--xb));
        break;
      case ma:
        !jb("All") && xb < Sb - 1 && (Lb(), Bb(++xb));
    }
  }
  var Ub,
    Rb,
    Nb = 0,
    Gb = !0,
    Hb = 13.5,
    zb = 5,
    qb = Hb + zb - 1;
  function Xb() {
    c("side_panel_movel_new_" + x.Sidepannel_Pos, "side_panel_new_icons_text");
  }
  function Qb() {
    l("side_panel_movel_new_" + x.Sidepannel_Pos, "side_panel_new_icons_text");
  }
  function Jb(e) {
    var t, n;
    Zb()
      ? (c(T7[0] + Nb, "side_panel_div_focused"),
        (e = e),
        (t = "0%"),
        (n = document.getElementById("side_panel_holder")),
        6 < Nb &&
          (Nb < Zb() - 6
            ? (t = -18.115 * (Nb - 6) + "%")
            : 0 < Zb() - 6 - 6 && (t = -18.115 * (Zb() - 12) + "%")),
        !e && Qy && Yy && !Jy
          ? ((Jy = !(Qy = !1)),
            (n.style.transition = ""),
            n.classList.add("side_panel_holder_ani"),
            window.setTimeout(function () {
              Qy = !0;
            }, 200))
          : (e && (Jy = !1),
            (n.style.transition = "none"),
            n.classList.remove("side_panel_holder_ani")),
        (n.style.marginTop = t),
        (e = JSON.parse(
          document.getElementById(T7[8] + Nb).getAttribute("side_panel_data")
        )),
        (Rb.onerror = function () {
          (this.onerror = null), (this.src = $d);
        }),
        (Rb.src = e[2] + zm),
        m(
          "feed_thum_name",
          (function (e, t, n) {
            return (
              '<div class="partnericon_div"> ' +
              e +
              g +
              g +
              "</div>" +
              (t
                ? '<img class="partnericon_img" alt="" src="' +
                  na +
                  '">' +
                  g +
                  g
                : "") +
              '<div class="partnericon_text" style="background: #' +
              (n ? "FFFFFF; color: #000000;" : "E21212;") +
              '">' +
              g +
              g +
              (n ? we : X) +
              g +
              g +
              "</div>"
            );
          })(bh(e[3]), e[9], e[8])
        ),
        m("feed_thum_quality", e[7]),
        m("feed_thum_title", bh(f4.parse(e[4]))),
        m("feed_thum_game", "" !== e[5] ? J + e[5] : ""),
        m("feed_thum_views", e[6]),
        sf("side_panel_feed_holder") && Kb() && _("side_panel_feed_thumb"))
      : (document.getElementById("side_panel_warn").style.display =
          "inline-block");
  }
  function Yb() {
    l(T7[0] + Nb, "side_panel_div_focused");
  }
  function Kb() {
    return (
      -1 ===
      document.getElementById("side_panel").className.indexOf("side_panel_hide")
    );
  }
  function Wb() {
    for (var e, t = 0; t < Zb(); t++)
      null !== (e = document.getElementById(T7[8] + t)) &&
        (new Image().src =
          JSON.parse(e.getAttribute("side_panel_data"))[2] + zm);
  }
  function Zb() {
    return document
      .getElementById("side_panel_holder")
      .getElementsByClassName("side_panel_feed").length;
  }
  function $b() {
    x.Sidepannel_Pos
      ? 1 === x.Sidepannel_Pos
        ? x.Main_Go !== z_
          ? (x.Search_isSearching ||
              (x.Main_Go !== om && x.Main_Go !== am && x.Main_Go !== dm) ||
              (wc = {
                "Main_values.Main_selectedChannel_id":
                  x.Main_selectedChannel_id,
                "Main_values.Main_selectedChannelLogo":
                  x.Main_selectedChannelLogo,
                "Main_values.Main_selectedChannel": x.Main_selectedChannel,
                "Main_values.Main_selectedChannelDisplayname":
                  x.Main_selectedChannelDisplayname,
                ChannelContent_UserChannels: _c,
                "Main_values.Main_BeforeChannel": x.Main_BeforeChannel,
              }),
            Bf())
          : document.body.addEventListener("keydown", Ub, !1)
        : 8 === x.Sidepannel_Pos
        ? bf()
        : 9 === x.Sidepannel_Pos
        ? (document.body.removeEventListener("keydown", Ub, !1),
          document.body.addEventListener("keydown", lw),
          Af(),
          yf(),
          _("dialog_about"))
        : 10 === x.Sidepannel_Pos
        ? (document.body.removeEventListener("keydown", Ub, !1),
          document.body.addEventListener("keydown", lw),
          wf(),
          _("dialog_controls"))
        : 11 === x.Sidepannel_Pos &&
          (_f(),
          _("main_dialog_exit"),
          document.body.addEventListener("keydown", dh, !1))
      : ((x.Main_Before = x.Main_Go), Vf(x.Main_Go), (Ws() ? wA : Fs)());
  }
  function e7() {
    var e;
    x.Sidepannel_IsUser
      ? ((e = !0),
        3 <= x.Sidepannel_Pos && x.Sidepannel_Pos <= 6 && !v[0].access_token
          ? (gf(vn), window.setTimeout(vf, 5e3))
          : (2 === x.Sidepannel_Pos
              ? ((x.Sidepannel_IsUser = !1), r7(), l7(), (e = !1))
              : 3 === x.Sidepannel_Pos
              ? t7(W_)
              : 4 === x.Sidepannel_Pos
              ? t7(Z_)
              : 5 === x.Sidepannel_Pos
              ? t7($_)
              : 6 === x.Sidepannel_Pos
              ? t7(em)
              : 7 === x.Sidepannel_Pos
              ? ((x.Main_selectedChannel_id = v[0].id),
                (x.Main_selectedChannelDisplayname =
                  v[0].display_name || v[0].name),
                (x.Main_selectedChannel = v[0].name),
                (x.Main_BeforeChannel = x.Main_Go),
                (x.Main_Go = om),
                (x.Main_BeforeChannelisSet = !0),
                (_c = La = !1),
                Vf(x.Main_BeforeChannel),
                (x.My_channel = !0),
                If())
              : $b(),
            e && a7()))
      : ((e = !0),
        2 === x.Sidepannel_Pos
          ? (nc()
              ? (u7(),
                l7(),
                (x.Main_Go !== W_ &&
                  x.Main_Go !== Z_ &&
                  x.Main_Go !== $_ &&
                  x.Main_Go !== em &&
                  x.Main_Go !== om) ||
                  (Qb(), s7(x.Main_Go), Xb()))
              : (gf(ti), window.setTimeout(vf, 2e3)),
            (e = !1))
          : 3 === x.Sidepannel_Pos
          ? t7(q_)
          : 4 === x.Sidepannel_Pos
          ? t7(Q_)
          : 5 === x.Sidepannel_Pos
          ? t7(J_)
          : 6 === x.Sidepannel_Pos
          ? t7(Y_)
          : 7 === x.Sidepannel_Pos
          ? t7(K_)
          : $b(),
        e && a7());
  }
  function t7(e) {
    e === x.Main_Go
      ? (document.body.addEventListener("keydown", Ub, !1), Mf())
      : ((x.Main_Before = x.Main_Go), (x.Main_Go = e), Vf(x.Main_Before), If());
  }
  function n7(e) {
    (Ub = e),
      document.body.removeEventListener("keydown", Ub),
      (!Gb && Ws() ? o7 : i7)();
  }
  function i7() {
    l("scenefeed", Yy ? "scenefeed_background" : "scenefeed_background_no_ani"),
      (Gb = !0),
      _("side_panel_fix"),
      (document.getElementById("side_panel_movel").style.marginLeft = 0),
      (document.getElementById("side_panel_fix").style.marginLeft = ""),
      document.body.addEventListener("keydown", h7, !1),
      Xb();
  }
  function o7() {
    (Gb = !1),
      document.body.addEventListener("keydown", f7, !1),
      l("side_panel", "side_panel_hide"),
      c(
        "scenefeed",
        Yy ? "scenefeed_background" : "scenefeed_background_no_ani"
      ),
      Mg !== v[0].name && (b7 = !1),
      (Mg = v[0].name),
      (b7 = !(!aA(0, T[0]) || I7 !== O.live_feed_sort.defaultValue) && b7) ||
        g7 ||
        F7(),
      null !== document.getElementById(T7[0] + Nb) &&
        (Jb(!0), window.setTimeout(Wb, 600)),
      d7(!0);
  }
  function d7(e) {
    var t = 11 < (t = v[0] ? v[0].display_name.length : ke) ? t - 11 : 0;
    e &&
      (document.getElementById("side_panel_fix").style.marginLeft =
        "-" + zb + "%"),
      (document.getElementById("side_panel_movel").style.marginLeft =
        "calc(-" + (e ? qb + 0.5 : Hb) + "% - " + t + "ch)");
  }
  function a7() {
    d7(),
      Qb(),
      s7(x.Main_Go),
      _("side_panel_fix"),
      (document.getElementById("side_panel_fix").style.marginLeft = ""),
      c("side_panel", "side_panel_hide"),
      b("side_panel_feed_thumb"),
      l(
        "scenefeed",
        Yy ? "scenefeed_background" : "scenefeed_background_no_ani"
      ),
      document.body.removeEventListener("keydown", f7),
      document.body.removeEventListener("keydown", h7);
  }
  function s7(e) {
    c7[e] && (x.Sidepannel_Pos = c7[e]),
      l7(),
      x.Sidepannel_Pos &&
        x.Sidepannel_Pos < 8 &&
        c("side_panel_new_" + x.Sidepannel_Pos, "side_panel_new_icons_text");
  }
  var c7 = [1, 3, 0, 4, 5, 6, 7, 3, 4, 5, 6, 1, 1, 1, 0, 0, 0, 0, 5, 5, 5];
  function l7() {
    for (var e = 1; e < 8; e++)
      l("side_panel_new_" + e, "side_panel_new_icons_text");
  }
  function u7() {
    (x.Sidepannel_IsUser = !0),
      m("side_panel_movel_user_text", g + Li + g),
      _("side_panel_movel_user_text_holder"),
      m("side_panel_movel_new_2", g + Bi),
      m("side_panel_movel_new_4", g + Q),
      m("side_panel_movel_new_5", g + zt),
      m("side_panel_movel_new_6", g + ne),
      m("side_panel_movel_new_7", g + Si),
      m7("side_panel_new_2", "arrow-left"),
      m7("side_panel_new_4", "gamepad"),
      m7("side_panel_new_5", "movie-play"),
      m7("side_panel_new_6", "filmstrip"),
      m7("side_panel_new_7", "user");
  }
  function r7() {
    v[0] ? _7(v[0].display_name) : _7(ke),
      b("side_panel_movel_user_text_holder"),
      m("side_panel_movel_new_1", g + D),
      m("side_panel_movel_new_2", g + Li),
      m("side_panel_movel_new_3", g + X),
      m("side_panel_movel_new_4", g + Yt),
      m("side_panel_movel_new_5", g + Q),
      m("side_panel_movel_new_6", g + zt),
      m("side_panel_movel_new_7", g + ue),
      m("side_panel_movel_new_8", g + Si),
      m("side_panel_movel_new_8", g + U),
      m("side_panel_movel_new_9", g + N),
      m("side_panel_movel_new_10", g + R),
      m("side_panel_movel_new_11", g + pe),
      m7("side_panel_new_1", "search"),
      m7("side_panel_new_2", "user"),
      m7("side_panel_new_3", "play"),
      m7("side_panel_new_4", "star"),
      m7("side_panel_new_5", "gamepad"),
      m7("side_panel_new_6", "movie-play"),
      m7("side_panel_new_7", "movie");
  }
  function _7(e) {
    m(
      "side_panel_movel_new_0",
      g +
        e +
        h +
        '<div style="font-size: 45%;display: inline-block; transform: translateY(-80%);">' +
        g +
        g +
        Ni +
        "</div>"
    );
  }
  function m7(e, t) {
    t
      ? m(e, '<i class="icon icon-' + t + ' side_panel_new_icons_pad"></i>')
      : f(e, "");
  }
  function f7(e) {
    switch (e.keyCode) {
      case ya:
      case ba:
      case a:
        a7(), Mf();
        break;
      case _a:
        c("side_panel", "side_panel_hide"),
          l(
            "scenefeed",
            Yy ? "scenefeed_background" : "scenefeed_background_no_ani"
          ),
          b("side_panel_feed_thumb"),
          document.body.removeEventListener("keydown", f7),
          i7();
        break;
      case va:
      case ga:
      case ua:
        g7 || nA();
        break;
      case pa:
      case ra:
        Qy && Nb && !g7 && (Yb(), Nb--, Jb());
        break;
      case ha:
      case ma:
        Qy && Nb < Zb() - 1 && !g7 && (Yb(), Nb++, Jb());
        break;
      case da:
      case oa:
      case aa:
      case ka:
      case fa:
        var t;
        g7 ||
          (((t = document.getElementById("side_panel")).style.transition =
            "none"),
          a7(),
          (x.Play_isHost = !1),
          A(function () {
            Jf(Nb, T7, f7), V("app_animations") && (t.style.transition = "");
          }));
    }
  }
  function h7(e) {
    switch (e.keyCode) {
      case ya:
      case ba:
      case a:
      case _a:
        a7(), Mf();
        break;
      case ua:
        Ws()
          ? v[0].access_token
            ? (document.body.removeEventListener("keydown", h7),
              _("side_panel_feed_thumb"),
              o7())
            : (gf(vn), window.setTimeout(vf, 5e3))
          : (gf(ti), window.setTimeout(vf, 5e3));
        break;
      case pa:
      case ra:
        x.Sidepannel_Pos && (Qb(), x.Sidepannel_Pos--, Xb());
        break;
      case ha:
      case ma:
        x.Sidepannel_Pos < 11 && (Qb(), x.Sidepannel_Pos++, Xb());
        break;
      case da:
      case oa:
      case aa:
      case ka:
      case fa:
        e7();
    }
  }
  var p7,
    g7 = !1,
    v7 = 0,
    y7 = 3500,
    w7 = 2,
    x7 = {},
    b7 = !1,
    A7 = null,
    k7 = null,
    C7 = null,
    S7 = "feed_thumbnail_focused",
    E7 = !1,
    P7 = !1,
    I7 = 0,
    j7 = !1,
    M7 = {},
    B7 = [],
    L7 = !0,
    O7 = !1,
    V7 = 3e3,
    T = [
      "ulf_thumbdiv",
      "ulf_img",
      "ulf_infodiv",
      "ulf_displayname",
      "ulf_streamtitle",
      "ulf_streamgame",
      "ulf_viwers",
      "ulf_quality",
      "ulf_cell",
      "ulempty_",
      "user_live_scroll",
    ],
    T7 = [
      "usf_thumbdiv",
      "usf_img",
      "usf_infodiv",
      "usf_displayname",
      "usf_streamtitle",
      "usf_streamgame",
      "usf_viwers",
      "usf_quality",
      "usf_cell",
      "ulempty_",
      "user_live_scroll",
    ];
  function F7(e) {
    Ws() &&
      (tA(),
      b7
        ? (aA(S, T[0]) &&
            (A7 = JSON.parse(
              document.getElementById(T[8] + S).getAttribute(Um)
            )[0]),
          aA(Nb, T7[0]) &&
            (k7 = JSON.parse(
              document.getElementById(T7[8] + Nb).getAttribute(Um)
            )[0]))
        : (A7 = k7 = null),
      (E7 = e),
      Rf("user_feed_scroll"),
      b("side_panel_feed_thumb"),
      (Nb = 0),
      Rf("side_panel_holder"),
      (document.getElementById("side_panel_warn").style.display = "none"),
      (b7 = !1),
      (document.getElementById("user_feed_scroll").style.left = "0.125em"),
      _("dialog_loading_feed"),
      _("dialog_loading_side_feed"),
      (S = 0),
      (x7 = {}),
      nh(),
      (I7 = O.live_feed_sort.defaultValue),
      (g7 = !0),
      (v7 = 0),
      (y7 = 3500),
      D7());
  }
  function D7() {
    (C7 = v[0].access_token), U7();
  }
  function U7() {
    var e = Lm + "streams/followed?user_id=" + v[0].id + "&first=100",
      i = new XMLHttpRequest();
    i.open("GET", e, !0), (i.timeout = y7), (Qm[1][1] = Xm + v[0].access_token);
    for (var t = 0; t < Jm.length; t++) i.setRequestHeader(Qm[t][0], Qm[t][1]);
    (i.ontimeout = function () {}),
      (i.onreadystatechange = function () {
        if (4 === i.readyState)
          if (200 !== i.status)
            !C7 || (401 !== i.status && 403 !== i.status)
              ? N7()
              : qa(0, 0, D7, R7);
          else {
            var e,
              t = i.responseText;
            H7 = JSON.parse(t).data;
            for (var n = 0; n < H7.length; n++)
              e ? (e += "&id=" + H7[n].user_id) : (e = "?id=" + H7[n].user_id);
            (G7 = Lm + "users" + e), (v7 = 0), (y7 = 3500), z7();
          }
      }),
      i.send(null);
  }
  function R7() {
    (v[0].access_token ? N7 : D7)();
  }
  function N7() {
    ++v7 < w7
      ? ((y7 += 500), U7())
      : ((g7 = !1),
        b("dialog_loading_feed"),
        b("dialog_loading_side_feed"),
        W7() &&
          (Y2(ae),
          window.setTimeout(function () {
            K2();
          }, 2e3)));
  }
  var G7,
    H7 = [];
  function z7() {
    _h(G7, y7, 2, null, q7, X7, !1, null, !0);
  }
  function q7(e) {
    if ((e = JSON.parse(e)).data && e.data.length) {
      for (var t = e.data, n = {}, i = 0; i < t.length; i++)
        n[t[i].id] = {
          partner: "partner" === t[i].broadcaster_type,
          logo: t[i].profile_image_url,
        };
      Q7(H7, n);
    }
  }
  function X7() {
    ++v7 < w7 ? ((y7 += 500), z7()) : Q7(H7, {});
  }
  function Q7(e, t) {
    var n = e.length,
      i = V("live_feed_sort");
    n < Cm && 0;
    var o,
      d,
      a,
      s,
      c,
      l,
      u = document.getElementById("user_feed_scroll"),
      r = document.getElementById("side_panel_holder"),
      _ = 0,
      m = (M7[v[0].name] || ((M7[v[0].name] = {}), (j7 = !1)), qx[i][0]),
      f = qx[i][1];
    for (
      qx[i][2]
        ? m
          ? e.sort(function (e, t) {
              return e[m][f] < t[m][f] ? -1 : e[m][f] > t[m][f] ? 1 : 0;
            })
          : e.sort(function (e, t) {
              return e[f] < t[f] ? -1 : e[f] > t[f] ? 1 : 0;
            })
        : m
        ? e.sort(function (e, t) {
            return e[m][f] > t[m][f] ? -1 : e[m][f] < t[m][f] ? 1 : 0;
          })
        : e.sort(function (e, t) {
            return e[f] > t[f] ? -1 : e[f] < t[f] ? 1 : 0;
          });
      _ < n;
      _++
    )
      (d = (o = e[_]).user_id),
        x7[d] ||
          (M7[v[0].name][d] ||
            B7.push({
              name: o.user_name,
              logo: t[d] ? t[d].logo : null,
              title: bh(f4.parse(o.title)),
              game: o.game_name,
              rerun: Ef(o.type),
            }),
          (x7[d] = 1),
          null !== A7 && A7 === o.user_login && (S = _),
          u.appendChild(
            ((a = _),
            (s = [o.user_login, d, Ef(o.type)]),
            (c = [
              o.thumbnail_url.replace("{width}x{height}", yh),
              o.user_name,
              o.game_name,
              Cf(o.viewer_count),
              o.title,
            ]),
            (l = void 0),
            (l = document.createElement("div")).setAttribute("id", T[8] + a),
            l.setAttribute(Um, JSON.stringify(s)),
            (l.className = "user_feed_thumb"),
            (l.innerHTML =
              '<div id="' +
              T[0] +
              a +
              '" class="stream_thumbnail_player_feed" ><div class="stream_thumbnail_live_img"><img id="' +
              T[1] +
              a +
              '" alt="" class="stream_img" src="' +
              c[0] +
              zm +
              '" onerror="this.onerror=null;this.src=\'' +
              $d +
              '\'"></div><div id="' +
              T[2] +
              a +
              '" class="player_live_feed_text"><div class="stream_text_holder"><div style="line-height: 1.6ch;"><div id="' +
              T[3] +
              a +
              '" class="stream_info_live_name" style="width: 63%; display: inline-block;">' +
              bh(c[1]) +
              '</div><div "class="stream_info_live" style="width:36%; float: right; text-align: right; display: inline-block; font-size: 75%; "><i class="icon-' +
              (s[2] ? 'refresh" style="' : 'circle" style="color: red;') +
              ' font-size: 75%; "></i>' +
              g +
              c[3] +
              '</div></div><div id="' +
              T[4] +
              a +
              '"class="stream_info_live_title">' +
              bh(f4.parse(c[4])) +
              '</div><div id="' +
              T[5] +
              a +
              '"class="stream_info_live">' +
              c[2] +
              "</div></div></div></div>"),
            l)
          ),
          null !== k7 && k7 === o.user_login && (Nb = _),
          r.appendChild(
            ((s = _),
            (a = [o.user_login, d, Ef(o.type)]),
            (c = [
              o.user_login,
              d,
              o.thumbnail_url.replace("{width}x{height}", vh),
              o.user_name,
              o.title,
              o.game_name,
              W + U2(o.started_at) + " " + Y + Cf(o.viewer_count) + g + me,
              "[" + o.language.toUpperCase() + "]",
              Ef(o.type),
              t[d] ? t[d].partner : null,
            ]),
            (l = [
              t[d] ? t[d].logo : null,
              o.user_name,
              o.user_name,
              o.game_name,
              Cf(o.viewer_count),
            ]),
            (d = void 0),
            (d = document.createElement("div")).setAttribute("id", T7[8] + s),
            d.setAttribute(Um, JSON.stringify(a)),
            d.setAttribute("side_panel_data", JSON.stringify(c)),
            (d.className = "side_panel_feed"),
            (d.innerHTML =
              '<div id="' +
              T7[0] +
              s +
              '" class="side_panel_div"><div id="' +
              T7[2] +
              s +
              '" style="width: 100%;"><div id="' +
              T7[3] +
              s +
              '" style="display: none;">' +
              l[1] +
              '</div><div class="side_panel_iner_div1"><img id="' +
              T7[1] +
              s +
              '" class="side_panel_channel_img" src="' +
              l[0] +
              '" onerror="this.onerror=null;this.src=\'' +
              Zd +
              '\'"></div><div class="side_panel_iner_div2"><div id="' +
              T7[4] +
              s +
              '" class="side_panel_new_title">' +
              bh(l[2]) +
              '</div><div id="' +
              T7[5] +
              s +
              '" class="side_panel_new_game">' +
              l[3] +
              '</div></div><div class="side_panel_iner_div3"><div style="text-align: center;"><i class="icon-' +
              (a[2] ? 'refresh" style="' : 'circle" style="color: red;') +
              ' font-size: 55%; "></i><div style="font-size: 58%;">' +
              l[4] +
              "</div></div></div></div></div></div>"),
            d)
          ));
    (M7[v[0].name] = JSON.parse(JSON.stringify(x7))),
      (b7 = !(g7 = !1)),
      A(function () {
        b("dialog_loading_feed"),
          b("dialog_loading_side_feed"),
          Jb(!0),
          iA(!0),
          window.setTimeout(Wb, 600),
          j7
            ? !O7 && L7 && B7.length
              ? ((O7 = !0), J7(0))
              : (B7 = [])
            : ((B7 = []), (j7 = !0));
      });
  }
  function J7(e) {
    var t = document.getElementById("user_feed_notify_img");
    (t.onload = function () {
      (this.onload = null), (this.onerror = null), Y7(e);
    }),
      (t.onerror = function () {
        (this.onerror = null), (this.onload = null), (this.src = Zd), Y7(e);
      }),
      (t.src = B7[e].logo);
  }
  function Y7(t) {
    m(
      "user_feed_notify_name",
      '<i class="icon-' +
        (B7[t].rerun ? 'refresh" style="' : 'circle" style="color: red;') +
        ' font-size: 75%; "></i>' +
        g +
        B7[t].name
    ),
      f("user_feed_notify_game", B7[t].game),
      m("user_feed_notify_title", B7[t].title),
      A(function () {
        l("user_feed_notify", "user_feed_notify_hide"),
          window.setTimeout(function () {
            var e;
            (e = t),
              c("user_feed_notify", "user_feed_notify_hide"),
              e < B7.length - 1
                ? window.setTimeout(function () {
                    J7(e + 1);
                  }, 800)
                : ((O7 = !1), (B7 = []));
          }, V7);
      });
  }
  function K7() {
    return document
      .getElementById("user_feed_scroll")
      .getElementsByClassName("user_feed_thumb").length;
  }
  function W7() {
    return (
      -1 ===
      document.getElementById("user_feed").className.indexOf("user_feed_hide")
    );
  }
  function Z7(e) {
    var t,
      n = Ws() && v[0].access_token;
    n &&
      (Mg !== v[0].name && (b7 = !1),
      (Mg = v[0].name),
      (b7 =
        !(!n || !aA(0, T[0]) || I7 !== O.live_feed_sort.defaultValue) && b7) ||
        g7 ||
        F7(e),
      n &&
        (sf("scene2") &&
          (e
            ? (((t = document.getElementById("user_feed")).style.transition =
                "none"),
              t.classList.remove("user_feed_hide"),
              A(function () {
                V("app_animations") && (t.style.transition = "");
              }))
            : l("user_feed", "user_feed_hide")),
        e ? (oA(), dA(!0)) : iA(!0)));
  }
  function $7(e) {
    var t;
    e
      ? (((t = document.getElementById("user_feed")).style.transition = "none"),
        t.classList.add("user_feed_hide"),
        A(function () {
          V("app_animations") && (t.style.transition = "");
        }))
      : c("user_feed", "user_feed_hide");
  }
  function eA() {
    tA(), P7 || (W7() && (p7 = window.setTimeout($7, 5500)));
  }
  function tA() {
    window.clearTimeout(p7);
  }
  function nA(e) {
    tA(),
      g7
        ? window.setTimeout(function () {
            g7 = !1;
          }, 15e3)
        : F7(e);
  }
  function iA(e) {
    eA(), aA(S, T[0]) && (E7 ? (E7 = !1) : c(T[0] + S, S7), dA(e));
  }
  function oA() {
    aA(S, T[0]) && l(T[0] + S, S7);
  }
  function dA(e) {
    var t =
        S < 3
          ? 2.5
          : aA(S + 2, T[0])
          ? -1 * document.getElementById(T[8] + (S - 2)).offsetLeft
          : aA(S + 1, T[0])
          ? -1 * document.getElementById(T[8] + (S - 3)).offsetLeft
          : -1 *
            document.getElementById(T[8] + (S - (3 < S ? 4 : 3))).offsetLeft,
      n = document.getElementById("user_feed_scroll");
    !e && Qy && Yy && !Jy
      ? ((Jy = !(Qy = !1)),
        (n.style.transition = ""),
        n.classList.add("user_feed_scroll_ani"),
        window.setTimeout(function () {
          Qy = !0;
        }, 200))
      : (e && (Jy = !1),
        (n.style.transition = "none"),
        n.classList.remove("user_feed_scroll_ani")),
      t && (n.style.left = t / Kd + "em");
  }
  function aA(e, t) {
    return null !== document.getElementById(t + e);
  }
  function sA() {
    m(
      "icon_feed_refresh",
      '<div class="strokedelinebig" style="vertical-align: middle; display: inline-block;"><i class="icon-refresh" style="color: #FFFFFF; font-size: 115%; "></i></div><div class="strokedelinebig" style="vertical-align: middle; display: inline-block">' +
        g +
        F +
        ":" +
        $n +
        g +
        g +
        "</div>"
    );
  }
  var cA = 0,
    lA = 0,
    uA = 8,
    rA = 0,
    _A = null,
    mA = 1,
    fA = null,
    hA = !0,
    pA = !1,
    gA = "",
    vA = [
      "u_thumbdiv",
      "u_img",
      "u_infodiv",
      "u_displayname",
      "u_cell",
      "user_scroll",
    ],
    yA = !1;
  function wA() {
    if (!nc()) return (x.Main_Go = q_), xA(), void If();
    x.Main_Before !== X_ && (mA = x.Main_Before),
      _("label_side_panel"),
      af("label_refresh", "icon-user", Ri),
      (x.Main_Go = X_),
      vf(),
      Ox(q, Di + " " + v[0].display_name),
      document.body.addEventListener("keydown", KA, !1),
      yA ? (Nf(cA), _(vA[5]), AA(), Lf()) : bA();
  }
  function xA() {
    b("label_side_panel"),
      document.body.removeEventListener("keydown", KA),
      b(vA[5]),
      af("label_refresh", "icon-refresh", F + ":" + Rt);
  }
  function bA() {
    Rf("stream_table_user"),
      b(vA[5]),
      lf(),
      vf(),
      (Am = !(yA = !1)),
      (cA = lA = 0),
      hf(),
      A(function () {
        var e = document.createElement("div"),
          t = document.getElementById("stream_table_user"),
          n = 1,
          i = 0,
          o = document.createElement("div");
        o.setAttribute("id", vA[4] + "0_0"),
          o.classList.add("stream_thumbnail_user_icon_holder"),
          (o.innerHTML =
            '<div id="' +
            vA[0] +
            '0_0" class="stream_thumbnail_user" ><div class="stream_thumbnail_channel_img"></div><div  class="stream_thumbnail_user_text_holder"><div class="stream_info_user_name">' +
            ke +
            '</div><div style="color:#FFFFFF;font-size: 17vh; text-align: center; transform: translateY(-24.5vh);"><i class="icon-user-plus" ></i></div></div></div>'),
          e.appendChild(o);
        for (var d = 0; d < v.length; d++)
          e.appendChild(
            (function (e, t) {
              var n = document.createElement("div");
              return (
                n.setAttribute("id", vA[4] + e),
                n.setAttribute(Um, t),
                n.classList.add("stream_thumbnail_user_icon_holder"),
                (n.innerHTML =
                  '<div id="' +
                  vA[0] +
                  e +
                  '" class="stream_thumbnail_user" ><div class="stream_thumbnail_channel_img"><img id="' +
                  vA[1] +
                  e +
                  '" alt="" class="stream_img" src="' +
                  v[t].logo +
                  '" onerror="this.onerror=null;this.src=\'' +
                  Zd +
                  '\'"></div><div  class="stream_thumbnail_user_text_holder"><div class="stream_info_user_name">' +
                  v[t].display_name +
                  '</div><div class="stream_info_user_title">' +
                  (v[t].access_token ? bt : xt) +
                  "</div></div></div>"),
                n
              );
            })(i + "_" + n, d)
          ),
            5 < ++n &&
              (t.appendChild(e),
              (e = document.createElement("div")),
              i++,
              (n = 0));
        n <= 5 && t.appendChild(e),
          A(function () {
            var e;
            yA || ((yA = !0), AA(), uf(), Lf()),
              _(vA[5]),
              (Am = !1),
              pA &&
                ((pA = !1),
                (e = gA),
                (RA = v
                  .map(function (e) {
                    return e.name;
                  })
                  .indexOf(e)),
                (hA = !0),
                XA());
          });
      });
  }
  function AA(e) {
    var t, n;
    c(vA[0] + cA + "_" + lA, Dm),
      pf(lA, cA, Em, v.length + 1),
      Gf(cA) || e
        ? 1 < cA
          ? Pf(cA + 1, 0, vA[0]) &&
            ((e = vA[5]),
            (t = -1 * document.getElementById(vA[4] + cA + "_" + lA).offsetTop),
            (n = 39),
            (document.getElementById(e).style.top =
              "calc(" + n + "% + " + t / Kd + "em)"),
            window.setTimeout(Hf, 10))
          : ((e = vA[5]),
            (n = 0),
            (document.getElementById(e).style.top = n ? n / Kd + "em" : ""),
            window.setTimeout(Hf, 10))
        : Hf();
  }
  function kA() {
    (hm = !1), l(vA[0] + cA + "_" + lA, Dm);
  }
  function CA() {
    lA || cA
      ? ((rA = 0),
        EA(),
        (RA = parseInt(
          document.getElementById(vA[4] + cA + "_" + lA).getAttribute(Um)
        )),
        m("main_dialog_user_text", Ui + " " + v[RA].display_name),
        m("main_dialog_user_key", v[RA].access_token ? bt : xt),
        _("main_dialog_user"))
      : ((x.Main_Before = x.Main_Go),
        b(vA[5]),
        document.body.removeEventListener("keydown", KA),
        Fs());
  }
  function SA() {
    window.clearTimeout(fA);
  }
  function EA() {
    fA = window.setTimeout(NA, 2e4);
  }
  var PA,
    IA,
    jA,
    MA,
    BA,
    LA,
    OA,
    VA,
    TA,
    FA,
    DA,
    UA,
    RA = 0;
  function NA() {
    SA(), b("main_dialog_user"), (rA = 0), HA();
  }
  function GA() {
    return sf("main_dialog_user");
  }
  function HA() {
    l("main_dialog_user_first", "button_dialog_focused"),
      l("main_dialog_user_key", "button_dialog_focused"),
      l("main_dialog_user_remove", "button_dialog_focused"),
      rA
        ? 1 === rA
          ? c("main_dialog_user_key", "button_dialog_focused")
          : rA && c("main_dialog_user_remove", "button_dialog_focused")
        : c("main_dialog_user_first", "button_dialog_focused");
  }
  function zA() {
    window.clearTimeout(_A);
  }
  function qA() {
    _A = window.setTimeout(QA, 3e4);
  }
  function XA() {
    qA(),
      -1 < RA &&
        (m(
          "main_dialog_remove",
          hA ? wt + " " + v[RA].name + "?" : Dt + h + v[RA].name + "?"
        ),
        _("main_remove_dialog"));
  }
  function QA() {
    zA(), b("main_remove_dialog"), (rA = 0), YA();
  }
  function JA() {
    return sf("main_remove_dialog");
  }
  function YA() {
    rA
      ? (l("remove_cancel", "button_dialog_focused"),
        c("remove_yes", "button_dialog_focused"))
      : (c("remove_cancel", "button_dialog_focused"),
        l("remove_yes", "button_dialog_focused"));
  }
  function KA(e) {
    var t, n, i;
    if (!Am && !Xf())
      switch ((qf(), e.keyCode)) {
        case ya:
        case ba:
        case a:
          JA()
            ? QA()
            : GA()
            ? NA()
            : xf()
            ? wf()
            : kf()
            ? Af()
            : (xA(), Qb(), (x.Main_Go = mA), s7(x.Main_Go), Mf());
          break;
        case ua:
          if (JA()) --rA < 0 && (rA = 1), YA(), zA(), qA();
          else if (GA()) --rA < 0 && (rA = 2), HA(), SA(), EA();
          else if (lA)
            if (Pf(cA, lA - 1, vA[0])) kA(), lA--, AA();
            else if (Pf(cA - 1, 0, vA[0])) {
              for (t = uA - 1; -1 < t; t--)
                if (Pf(cA - 1, t, vA[0])) {
                  kA(), cA--, (lA = t), AA();
                  break;
                }
            } else kA(), (lA = uA - 1), AA();
          else kA(), n7(KA);
          break;
        case _a:
          JA()
            ? (1 < ++rA && (rA = 0), YA(), zA(), qA())
            : GA()
            ? (2 < ++rA && (rA = 0), HA(), SA(), EA())
            : (Pf(cA, lA + 1, vA[0])
                ? (kA(), lA++)
                : (Pf(cA + 1, 0, vA[0]) ? (kA(), cA++) : kA(), (lA = 0)),
              AA());
          break;
        case ra:
          if (JA() || GA()) break;
          if (cA)
            for (t = 0; t < uA; t++)
              if (Pf(cA - 1, lA - t, vA[0])) {
                kA(), cA--, (lA -= t), AA();
                break;
              }
          break;
        case ma:
          if (JA() || GA()) break;
          for (t = 0; t < uA; t++)
            if (Pf(cA + 1, lA - t, vA[0])) {
              kA(), cA++, (lA -= t), AA();
              break;
            }
          break;
        case da:
        case oa:
        case aa:
        case ka:
        case fa:
          var o = rA;
          JA()
            ? (QA(),
              hA
                ? o &&
                  ((x.Users_AddcodePosition = RA),
                  (x.Main_Before = x.Main_Go),
                  b(vA[5]),
                  document.body.removeEventListener("keydown", KA),
                  Lf(),
                  (Ma = !1),
                  hf(),
                  vf(),
                  Ox(xt),
                  (F_.placeholder = $),
                  _("oauth_scroll"),
                  m(
                    "oauth_text",
                    wt +
                      "<div style=\"display: inline-block; color: #FF0000; font-size: 110%; font-family: 'Roboto-Bold';\">" +
                      v[x.Users_AddcodePosition].name +
                      "</div>" +
                      to
                  ),
                  Ra())
                : o &&
                  (document.body.removeEventListener("keydown", KA),
                  xA(),
                  (n = RA),
                  -1 < (i = v.indexOf(v[n])) &&
                    (window.clearTimeout(v[n].timeout_id), v.splice(i, 1)),
                  tc(),
                  0 < v.length ? (n || Js(), (yA = !1), wA()) : (Ys(), Fs())))
            : GA()
            ? (NA(),
              o
                ? 1 === o
                  ? v[RA].access_token
                    ? (gf(bt), window.setTimeout(vf, 1500))
                    : ((hA = !0), XA())
                  : ((hA = !1), XA())
                : ((i = RA),
                  (n = JSON.parse(JSON.stringify(v[0]))),
                  (v[0] = JSON.parse(JSON.stringify(v[i]))),
                  (v[i] = n),
                  ns(0),
                  ns(i),
                  tc(),
                  (yA = !1),
                  Js(),
                  wA()))
            : CA();
          break;
        case va:
        case ga:
          ah();
      }
  }
  function WA(e) {
    return (
      "https://static-cdn.jtvnw.net/emoticons/v2/" + e + "/default/dark/3.0"
    );
  }
  function ZA(e) {
    return '<img class="emoticon" alt="" src="' + e + '"/>';
  }
  function $A(e, t, n) {
    for (var i, o = e.split(" "), d = 0, a = o.length; d < a; d++)
      (i = n
        ? (function (e, t) {
            for (
              var n = Object.keys(vu[w[t]]),
                i = e.toLowerCase(),
                o = -1,
                d = 0,
                a = n.length;
              d < a;
              d++
            ) {
              if (Dh(e, n[d]))
                return e4(n[d], parseInt(e.substr(n[d].length), 10), t);
              Dh(i, n[d].toLowerCase()) && (o = d);
            }
            return -1 < o
              ? e4(n[o], parseInt(i.substr(n[o].toLowerCase().length), 10), t)
              : null;
          })(o[d], t)
        : 0)
        ? (o[d] = i)
        : ((i = gu[o[d]]),
          (o[d] = i
            ? i.chat_div
            : o[d].replace(/</g, "&lt;").replace(/>/g, "&gt;")));
    return o.join(" ") + (n ? " " + n + " bits" : "");
  }
  function e4(e, t, n) {
    for (var i = vu[w[n]][e], o = Object.keys(i), d = o.length; d--; )
      if (t >= o[d]) return i[o[d]];
    return i[o[0]];
  }
  function t4(e, t) {
    if (!t) return [e];
    var n,
      i,
      o,
      d,
      a,
      s = [],
      c = [];
    for (n in t)
      for (d = 0, a = (o = t[n]).length; d < a; d++)
        c.push({ id: n, first: o[d][0], last: o[d][1] });
    for (
      c.sort(function (e, t) {
        return t.first - e.first;
      }),
        e = punycode.ucs2.decode(e),
        d = 0,
        a = c.length;
      d < a;
      d++
    )
      (i = c[d]),
        s.unshift(punycode.ucs2.encode(e.slice(i.last + 1))),
        s.unshift([ZA(WA(i.id))]),
        (e = e.slice(0, i.first));
    return s.unshift(punycode.ucs2.encode(e)), s;
  }
  function n4(e) {
    throw new RangeError(TA[e]);
  }
  function i4(e, t) {
    for (var n = e.length, i = []; n--; ) i[n] = t(e[n]);
    return i;
  }
  function o4(e, t) {
    var n = "",
      i =
        (1 < (i = e.split("@")).length && ((n = i[0] + "@"), (e = i[1])),
        (e = e.replace(VA, ".")).split("."));
    return n + i4(i, t).join(".");
  }
  function d4(e) {
    for (var t, n, i = [], o = 0, d = e.length; o < d; )
      55296 <= (t = e.charCodeAt(o++)) && t <= 56319 && o < d
        ? 56320 == (64512 & (n = e.charCodeAt(o++)))
          ? i.push(((1023 & t) << 10) + (1023 & n) + 65536)
          : (i.push(t), o--)
        : i.push(t);
    return i;
  }
  function a4(e) {
    return i4(e, function (e) {
      var t = "";
      return (
        65535 < e &&
          ((t += UA((((e -= 65536) >>> 10) & 1023) | 55296)),
          (e = 56320 | (1023 & e))),
        t + UA(e)
      );
    }).join("");
  }
  function s4(e, t) {
    return e + 22 + 75 * (e < 26) - ((0 !== t) << 5);
  }
  function c4(e, t, n) {
    var i = 0;
    for (
      e = n ? DA(e / BA) : e >> 1, e += DA(e / t);
      (FA * jA) >> 1 < e;
      i += IA
    )
      e = DA(e / FA);
    return DA(i + ((FA + 1) * e) / (e + MA));
  }
  function l4(e) {
    var t,
      n,
      i,
      o,
      d,
      a,
      s,
      c = [],
      l = e.length,
      u = 0,
      r = 128,
      _ = 72,
      m = e.lastIndexOf("-");
    for (m < 0 && (m = 0), n = 0; n < m; ++n)
      128 <= e.charCodeAt(n) && n4("not-basic"), c.push(e.charCodeAt(n));
    for (i = 0 < m ? m + 1 : 0; i < l; ) {
      for (
        o = u, d = 1, a = IA;
        l <= i && n4("invalid-input"),
          (s = e.charCodeAt(i++)),
          (IA <=
            (s =
              s - 48 < 10
                ? s - 22
                : s - 65 < 26
                ? s - 65
                : s - 97 < 26
                ? s - 97
                : IA) ||
            s > DA((PA - u) / d)) &&
            n4("overflow"),
          (u += s * d),
          !(s < (s = a <= _ ? 1 : _ + jA <= a ? jA : a - _));
        a += IA
      )
        d > DA(PA / (s = IA - s)) && n4("overflow"), (d *= s);
      (_ = c4(u - o, (t = c.length + 1), 0 === o)),
        DA(u / t) > PA - r && n4("overflow"),
        (r += DA(u / t)),
        (u %= t),
        c.splice(u++, 0, r);
    }
    return a4(c);
  }
  function u4(e) {
    for (
      var t,
        n,
        i,
        o,
        d,
        a,
        s,
        c,
        l,
        u,
        r = [],
        _ = (e = d4(e)).length,
        m = 128,
        f = 72,
        h = (t = 0);
      h < _;
      ++h
    )
      (s = e[h]) < 128 && r.push(UA(s));
    for (n = i = r.length, i && r.push("-"); n < _; ) {
      for (o = PA, h = 0; h < _; ++h) m <= (s = e[h]) && s < o && (o = s);
      for (
        o - m > DA((PA - t) / (c = n + 1)) && n4("overflow"),
          t += (o - m) * c,
          m = o,
          h = 0;
        h < _;
        ++h
      )
        if (((s = e[h]) < m && ++t > PA && n4("overflow"), s === m)) {
          for (
            d = t, a = IA;
            !(d < (l = a <= f ? 1 : f + jA <= a ? jA : a - f));
            a += IA
          )
            r.push(UA(s4(l + ((u = d - l) % (l = IA - l)), 0))),
              (d = DA(u / l));
          r.push(UA(s4(d, 0))), (f = c4(t, c, n === i)), (t = 0), ++n;
        }
      ++t, ++m;
    }
    return r.join("");
  }
  (window.parseIRC = function (e) {
    var t = { raw: e, tags: {}, prefix: null, command: null, params: [] },
      n = 0,
      i = 0;
    if (64 === e.charCodeAt(0)) {
      if (-1 === (i = e.indexOf(" "))) return null;
      for (var o = e.slice(1, i).split(";"), d = 0, a = o.length; d < a; d++) {
        var s = o[d],
          c = s.split("=");
        t.tags[c[0]] = s.substring(s.indexOf("=") + 1) || !0;
      }
      n = i + 1;
    }
    for (; 32 === e.charCodeAt(n); ) n++;
    if (58 === e.charCodeAt(n)) {
      if (-1 === (i = e.indexOf(" ", n))) return null;
      for (t.prefix = e.slice(n + 1, i), n = i + 1; 32 === e.charCodeAt(n); )
        n++;
    }
    if (-1 === (i = e.indexOf(" ", n)))
      return e.length > n ? ((t.command = e.slice(n)), t) : null;
    for (t.command = e.slice(n, i), n = i + 1; 32 === e.charCodeAt(n); ) n++;
    for (; n < e.length; ) {
      if (((i = e.indexOf(" ", n)), 58 === e.charCodeAt(n))) {
        t.params.push(e.slice(n + 1));
        break;
      }
      if (-1 !== i)
        for (t.params.push(e.slice(n, i)), n = i + 1; 32 === e.charCodeAt(n); )
          n++;
      else if (-1 === i) {
        t.params.push(e.slice(n));
        break;
      }
    }
    return t;
  }),
    (e = this),
    ((Sm = "object" == typeof global && global).global !== Sm &&
      Sm.window !== Sm &&
      Sm.self !== Sm) ||
      (e = Sm),
    (PA = 2147483647),
    (jA = 26),
    (MA = 38),
    (BA = 700),
    (LA = /^xn--/),
    (OA = /[^\x20-\x7E]/),
    (VA = /[\x2E\u3002\uFF0E\uFF61]/g),
    (TA = {
      overflow: "Overflow: input needs wider integers to process",
      "not-basic": "Illegal input >= 0x80 (not a basic code point)",
      "invalid-input": "Invalid input",
    }),
    (FA = (IA = 36) - 1),
    (DA = Math.floor),
    (UA = String.fromCharCode),
    (e.punycode = {
      version: "1.4.1",
      ucs2: { decode: d4, encode: a4 },
      decode: l4,
      encode: u4,
      toASCII: function (e) {
        return o4(e, function (e) {
          return OA.test(e) ? "xn--" + u4(e) : e;
        });
      },
      toUnicode: function (e) {
        return o4(e, function (e) {
          return LA.test(e) ? l4(e.slice(4).toLowerCase()) : e;
        });
      },
    });
  (Pm = {
    parse: function (e, t, n) {
      return e
        ? p4(
            (e = (e = t
              ? e
              : e.replace(/</g, "&lt;").replace(/>/g, "&gt;")).replace(
              /(\r\n|\n|\r)/gm,
              ""
            )),
            function (e) {
              var t = h4(e);
              return t
                ? '<img class="' +
                    (n ? "emoticon" : "emoji") +
                    '" alt="" src="https://twemoji.maxcdn.com/2/72x72/' +
                    t +
                    '.png"/>'
                : e;
            }
          )
        : "";
    },
    parseIcon: function (e) {
      return e
        ? p4(e, function (e) {
            var t = h4(e);
            return t ? "https://twemoji.maxcdn.com/2/72x72/" + t + ".png" : e;
          })
        : "";
    },
    replace: p4,
  }),
    (r4 =
      /(?:\ud83d\udc68\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc68\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc68\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1|\ud83d\udc6b\ud83c[\udffb-\udfff]|\ud83d\udc6c\ud83c[\udffb-\udfff]|\ud83d\udc6d\ud83c[\udffb-\udfff]|\ud83d[\udc6b-\udc6d])|(?:\ud83d[\udc68\udc69]|\ud83e\uddd1)(?:\ud83c[\udffb-\udfff])?\u200d(?:\u2695\ufe0f|\u2696\ufe0f|\u2708\ufe0f|\ud83c[\udf3e\udf73\udf7c\udf84\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92]|\ud83e[\uddaf-\uddb3\uddbc\uddbd])|(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75]|\u26f9)((?:\ud83c[\udffb-\udfff]|\ufe0f)\u200d[\u2640\u2642]\ufe0f)|(?:\ud83c[\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc70\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6]|\ud83e[\udd26\udd35\udd37-\udd39\udd3d\udd3e\uddb8\uddb9\uddcd-\uddcf\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?\u200d[\u2640\u2642]\ufe0f|(?:\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f|\ud83c\udff3\ufe0f\u200d\ud83c\udf08|\ud83c\udff4\u200d\u2620\ufe0f|\ud83d\udc15\u200d\ud83e\uddba|\ud83d\udc3b\u200d\u2744\ufe0f|\ud83d\udc41\u200d\ud83d\udde8|\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc6f\u200d\u2640\ufe0f|\ud83d\udc6f\u200d\u2642\ufe0f|\ud83e\udd3c\u200d\u2640\ufe0f|\ud83e\udd3c\u200d\u2642\ufe0f|\ud83e\uddde\u200d\u2640\ufe0f|\ud83e\uddde\u200d\u2642\ufe0f|\ud83e\udddf\u200d\u2640\ufe0f|\ud83e\udddf\u200d\u2642\ufe0f|\ud83d\udc08\u200d\u2b1b)|[#*0-9]\ufe0f?\u20e3|(?:[©®\u2122\u265f]\ufe0f)|(?:\ud83c[\udc04\udd70\udd71\udd7e\udd7f\ude02\ude1a\ude2f\ude37\udf21\udf24-\udf2c\udf36\udf7d\udf96\udf97\udf99-\udf9b\udf9e\udf9f\udfcd\udfce\udfd4-\udfdf\udff3\udff5\udff7]|\ud83d[\udc3f\udc41\udcfd\udd49\udd4a\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa\udecb\udecd-\udecf\udee0-\udee5\udee9\udef0\udef3]|[\u203c\u2049\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u2328\u23cf\u23ed-\u23ef\u23f1\u23f2\u23f8-\u23fa\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600-\u2604\u260e\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638-\u263a\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2692-\u2697\u2699\u269b\u269c\u26a0\u26a1\u26a7\u26aa\u26ab\u26b0\u26b1\u26bd\u26be\u26c4\u26c5\u26c8\u26cf\u26d1\u26d3\u26d4\u26e9\u26ea\u26f0-\u26f5\u26f8\u26fa\u26fd\u2702\u2708\u2709\u270f\u2712\u2714\u2716\u271d\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u2764\u27a1\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299])(?:\ufe0f|(?!\ufe0e))|(?:(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75\udd90]|[\u261d\u26f7\u26f9\u270c\u270d])(?:\ufe0f|(?!\ufe0e))|(?:\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd7a\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd0c\udd0f\udd18-\udd1c\udd1e\udd1f\udd26\udd30-\udd39\udd3d\udd3e\udd77\uddb5\uddb6\uddb8\uddb9\uddbb\uddcd-\uddcf\uddd1-\udddd]|[\u270a\u270b]))(?:\ud83c[\udffb-\udfff])?|(?:\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\ud83c[\udccf\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude32-\ude36\ude38-\ude3a\ude50\ude51\udf00-\udf20\udf2d-\udf35\udf37-\udf7c\udf7e-\udf84\udf86-\udf93\udfa0-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcf-\udfd3\udfe0-\udff0\udff4\udff8-\udfff]|\ud83d[\udc00-\udc3e\udc40\udc44\udc45\udc51-\udc65\udc6a\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udca9\udcab-\udcfc\udcff-\udd3d\udd4b-\udd4e\udd50-\udd67\udda4\uddfb-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\uded0-\uded2\uded5-\uded7\udeeb\udeec\udef4-\udefc\udfe0-\udfeb]|\ud83e[\udd0d\udd0e\udd10-\udd17\udd1d\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd3f-\udd45\udd47-\udd76\udd78\udd7a-\uddb4\uddb7\uddba\uddbc-\uddcb\uddd0\uddde-\uddff\ude70-\ude74\ude78-\ude7a\ude80-\ude86\ude90-\udea8\udeb0-\udeb6\udec0-\udec2\uded0-\uded6]|[\u23e9-\u23ec\u23f0\u23f3\u267e\u26ce\u2705\u2728\u274c\u274e\u2753-\u2755\u2795-\u2797\u27b0\u27bf\ue50a])|\ufe0f/g),
    (_4 = /\uFE0F/g),
    (m4 = String.fromCharCode(8205));
  var r4,
    _4,
    m4,
    f4 = Pm;
  function h4(e) {
    for (
      var t = e && (e.indexOf(m4) < 0 ? e.replace(_4, "") : e),
        n = [],
        i = 0,
        o = 0,
        d = 0;
      d < t.length;

    )
      (i = t.charCodeAt(d++)),
        o
          ? (n.push((65536 + ((o - 55296) << 10) + (i - 56320)).toString(16)),
            (o = 0))
          : 55296 <= i && i <= 56319
          ? (o = i)
          : n.push(i.toString(16));
    return n.join("-");
  }
  function p4(e, t) {
    return String(e).replace(r4, t);
  }
  t.smartTwitchTV = { mainstart: Ym };
})(this),
  smartTwitchTV.mainstart();
